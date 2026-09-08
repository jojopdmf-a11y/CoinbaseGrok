#!/usr/bin/env python3
"""Preview a Coinbase Advanced order. Does not create an order."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from cb_client import as_dict, client  # noqa: E402


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--product", required=True)
    parser.add_argument("--side", required=True, choices=["BUY", "SELL"])
    parser.add_argument("--type", dest="order_type", required=True, choices=["market", "limit"])
    parser.add_argument("--quote-size", default="")
    parser.add_argument("--base-size", default="")
    parser.add_argument("--limit-price", default="")
    args = parser.parse_args(argv)

    try:
        rest = client()
    except RuntimeError as exc:
        print(f"Preview unavailable: {exc}", file=sys.stderr)
        return 1

    kwargs: dict = {
        "product_id": args.product.upper(),
        "side": args.side,
        "order_configuration": {},
    }
    if args.order_type == "market":
        market: dict = {}
        if args.side == "BUY":
            if not args.quote_size:
                print("Market BUY requires --quote-size", file=sys.stderr)
                return 2
            market["quote_size"] = args.quote_size
        else:
            if not args.base_size:
                print("Market SELL requires --base-size", file=sys.stderr)
                return 2
            market["base_size"] = args.base_size
        kwargs["order_configuration"]["market_market_ioc"] = market
    else:
        if not args.base_size or not args.limit_price:
            print("Limit orders require --base-size and --limit-price", file=sys.stderr)
            return 2
        kwargs["order_configuration"]["limit_limit_gtc"] = {
            "base_size": args.base_size,
            "limit_price": args.limit_price,
            "post_only": False,
        }

    try:
        preview = rest.preview_order(**kwargs)
    except Exception as exc:  # noqa: BLE001
        print(f"Preview failed: {exc}", file=sys.stderr)
        return 1
    print(json.dumps(as_dict(preview), indent=2, default=str))
    print("PREVIEW ONLY. No order was created.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
