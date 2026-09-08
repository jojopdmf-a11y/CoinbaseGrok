#!/usr/bin/env python3
"""Create one Coinbase Advanced order.

Hard gates:
- requires --i-understand-this-is-live
- requires a caller-supplied --client-order-id (never invent and retry)
- refuses unless engagement file says live
- never prints secrets
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from cb_client import as_dict, client  # noqa: E402


def engagement_is_live(desk_root: Path) -> bool:
    record = desk_root / "desk.md"
    if not record.is_file():
        return False
    text = record.read_text(encoding="utf-8").lower()
    return "engagement level: live" in text


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--i-understand-this-is-live", action="store_true")
    parser.add_argument("--client-order-id", required=True)
    parser.add_argument("--product", required=True)
    parser.add_argument("--side", required=True, choices=["BUY", "SELL"])
    parser.add_argument("--type", dest="order_type", required=True, choices=["market", "limit"])
    parser.add_argument("--quote-size", default="")
    parser.add_argument("--base-size", default="")
    parser.add_argument("--limit-price", default="")
    parser.add_argument("--desk-root", default="/workspace/cb-trading-desk")
    args = parser.parse_args(argv)

    if not args.i_understand_this_is_live:
        print("Refused: pass --i-understand-this-is-live after a ticket approval.", file=sys.stderr)
        return 2
    if not engagement_is_live(Path(args.desk_root)):
        print("Refused: desk.md engagement level is not live.", file=sys.stderr)
        return 2
    if not args.client_order_id.strip():
        print("Refused: empty client_order_id", file=sys.stderr)
        return 2

    try:
        rest = client()
    except RuntimeError as exc:
        print(f"Create unavailable: {exc}", file=sys.stderr)
        return 1

    configuration: dict = {}
    if args.order_type == "market":
        if args.side == "BUY":
            configuration["market_market_ioc"] = {"quote_size": args.quote_size}
        else:
            configuration["market_market_ioc"] = {"base_size": args.base_size}
    else:
        configuration["limit_limit_gtc"] = {
            "base_size": args.base_size,
            "limit_price": args.limit_price,
            "post_only": False,
        }

    try:
        created = rest.create_order(
            client_order_id=args.client_order_id.strip(),
            product_id=args.product.upper(),
            side=args.side,
            order_configuration=configuration,
        )
    except Exception as exc:  # noqa: BLE001
        print(f"Create failed: {exc}", file=sys.stderr)
        return 1
    print(json.dumps(as_dict(created), indent=2, default=str))
    return 0


if __name__ == "__main__":
    sys.exit(main())
