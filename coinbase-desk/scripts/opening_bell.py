#!/usr/bin/env python3
"""Zero-key Coinbase Advanced market snapshot.

Uses only public brokerage market endpoints. Never reads environment
variables, keys, accounts, or POST /orders.
"""

from __future__ import annotations

import argparse
import json
import math
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from decimal import Decimal, InvalidOperation

PUBLIC_HOST = "https://api.coinbase.com"
BANDS_BPS = (5, 10, 25)
USER_AGENT = "coinbasegrok-opening-bell/0.1"


def get_json(url: str, timeout: float) -> dict:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        payload = json.load(response)
    if not isinstance(payload, dict):
        raise ValueError(f"unexpected payload from {url}")
    return payload


def decimal(value, field: str) -> Decimal:
    try:
        number = Decimal(str(value))
    except (InvalidOperation, ValueError) as exc:
        raise ValueError(f"{field} is not numeric") from exc
    if not number.is_finite():
        raise ValueError(f"{field} is not finite")
    return number


def depth_within(levels: list[dict], mid: Decimal, band_bps: int) -> Decimal:
    limit = Decimal(band_bps) / Decimal(10_000)
    total = Decimal(0)
    for level in levels:
        price = decimal(level.get("price"), "book price")
        size = decimal(level.get("size"), "book size")
        if mid > 0 and abs(price - mid) / mid <= limit:
            total += size
    return total


def fetch_snapshot(product_id: str, timeout: float) -> dict:
    product_url = f"{PUBLIC_HOST}/api/v3/brokerage/market/products/{urllib.parse.quote(product_id)}"
    book_qs = urllib.parse.urlencode({"product_id": product_id, "limit": 60})
    book_url = f"{PUBLIC_HOST}/api/v3/brokerage/market/product_book?{book_qs}"
    product = get_json(product_url, timeout)
    book = get_json(book_url, timeout)
    pricebook = book.get("pricebook") or {}
    bids = pricebook.get("bids") or []
    asks = pricebook.get("asks") or []
    if not bids or not asks:
        raise ValueError(f"{product_id} book has no two-sided depth")

    last = decimal(product.get("price") or book.get("last"), "last")
    mid = decimal(book.get("mid_market") or product.get("mid_market") or last, "mid")
    best_bid = decimal(product.get("best_bid_price") or bids[0].get("price"), "best bid")
    best_ask = decimal(product.get("best_ask_price") or asks[0].get("price"), "best ask")
    change = decimal(product.get("price_percentage_change_24h") or 0, "24h change")
    volume = decimal(product.get("volume_24h") or 0, "volume")
    quote_volume = decimal(product.get("approximate_quote_24h_volume") or 0, "quote volume")
    spread_bps = decimal(book.get("spread_bps") or ((best_ask - best_bid) / mid * 10_000), "spread")

    depth = {}
    for band in BANDS_BPS:
        bid_base = depth_within(bids, mid, band)
        ask_base = depth_within(asks, mid, band)
        depth[str(band)] = {
            "bid_base": str(bid_base),
            "ask_base": str(ask_base),
            "bid_usd": str(bid_base * mid),
            "ask_usd": str(ask_base * mid),
        }

    observed = datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")
    return {
        "mode": "read-only",
        "venue": "coinbase-advanced",
        "network": "public-production-market",
        "product_id": product.get("product_id") or product_id,
        "source": {
            "product": product_url,
            "book": book_url,
            "observed_at": observed,
        },
        "prices": {
            "last": str(last),
            "mid": str(mid),
            "best_bid": str(best_bid),
            "best_ask": str(best_ask),
            "change_24h_pct": str(change),
        },
        "activity": {
            "volume_24h_base": str(volume),
            "volume_24h_quote_approx": str(quote_volume),
        },
        "increments": {
            "base": product.get("base_increment"),
            "quote": product.get("quote_increment"),
            "base_min_size": product.get("base_min_size"),
        },
        "book": {
            "spread_bps": str(spread_bps),
            "levels_returned": {"bid": len(bids), "ask": len(asks)},
            "depth": depth,
        },
        "safety": "No key requested. No account read. No order created or sent.",
    }


def compact(number: Decimal, prefix: str = "") -> str:
    absolute = abs(number)
    for threshold, suffix in ((Decimal("1e9"), "B"), (Decimal("1e6"), "M"), (Decimal("1e3"), "K")):
        if absolute >= threshold:
            return f"{prefix}{number / threshold:,.2f}{suffix}"
    return f"{prefix}{number:,.2f}"


def render(snapshot: dict) -> str:
    price = snapshot["prices"]
    activity = snapshot["activity"]
    book = snapshot["book"]
    lines = [
        f"COINBASEGROK OPENING BELL — {snapshot['product_id']}",
        f"READ ONLY · {snapshot['network'].upper()} · {snapshot['source']['observed_at']}",
        "Sources: Coinbase public /market/products + /market/product_book",
        "",
        f"Last {Decimal(price['last']):,.2f} · mid {Decimal(price['mid']):,.2f}",
        f"Bid {Decimal(price['best_bid']):,.2f} · ask {Decimal(price['best_ask']):,.2f}",
        f"24h change {Decimal(price['change_24h_pct']):+,.2f}%",
        f"24h volume {compact(Decimal(activity['volume_24h_base']))} base · ~{compact(Decimal(activity['volume_24h_quote_approx']), '$')} quote",
        f"Spread {Decimal(book['spread_bps']):,.3f} bps",
        "",
        "Visible depth from the mid (this page only)",
    ]
    for band in BANDS_BPS:
        row = book["depth"][str(band)]
        lines.append(
            f" {band:>2} bps bid {compact(Decimal(row['bid_usd']), '$'):>13} · ask {compact(Decimal(row['ask_usd']), '$'):>13}"
        )
    lines.extend(["", snapshot["safety"], "Facts only. This snapshot is not a trading signal."])
    return "\n".join(lines)


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--product", default="BTC-USD", help="Coinbase product id, e.g. BTC-USD")
    parser.add_argument("--timeout", type=float, default=15.0)
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args(argv)
    product = args.product.strip().upper()
    if not product or any(ch not in "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-" for ch in product):
        parser.error("product contains unsupported characters")
    if not math.isfinite(args.timeout) or args.timeout <= 0:
        parser.error("timeout must be positive")
    try:
        snapshot = fetch_snapshot(product, args.timeout)
    except (OSError, ValueError, KeyError, TypeError, urllib.error.URLError, json.JSONDecodeError) as exc:
        print(f"Opening Bell unavailable: {exc}", file=sys.stderr)
        return 1
    print(json.dumps(snapshot, indent=2, sort_keys=True) if args.json else render(snapshot))
    return 0


if __name__ == "__main__":
    sys.exit(main())
