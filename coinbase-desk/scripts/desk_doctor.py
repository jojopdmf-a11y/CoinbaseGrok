#!/usr/bin/env python3
"""Read-only readiness check for a CoinbaseGrok desk.

Never reads environment variables or secrets. Never POSTs /orders.
"""

from __future__ import annotations

import argparse
import json
import sys
import urllib.request
from pathlib import Path

REQUIRED_SKILLS = [
    "coinbasegrok-bootstrap",
    "coinbase-setup",
    "coinbase-market-data",
    "coinbase-account",
    "coinbase-orders",
    "coinbase-preview",
    "coinbase-sandbox",
    "coinbase-api-reference",
    "desk-operating-model",
    "desk-trade-lifecycle",
    "desk-risk-limits",
    "desk-execution-protocol",
    "desk-monitoring",
    "desk-post-trade-review",
    "desk-incident-response",
    "desk-strategy-lab",
]

REQUIRED_AGENTS = [
    "desk-lead.md",
    "market-analyst.md",
    "research-analyst.md",
    "strategist.md",
    "risk-manager.md",
    "execution-trader.md",
    "trade-reviewer.md",
]


def ok(name: str, detail: str) -> dict:
    return {"name": name, "ok": True, "detail": detail}


def bad(name: str, detail: str) -> dict:
    return {"name": name, "ok": False, "detail": detail}


def check_repo(root: Path) -> list[dict]:
    results = []
    for agent in REQUIRED_AGENTS:
        path = root / "agents" / agent
        results.append(ok(f"agent:{agent}", str(path)) if path.is_file() else bad(f"agent:{agent}", "missing"))
    for skill in REQUIRED_SKILLS:
        path = root / "skills" / skill / "SKILL.md"
        results.append(ok(f"skill:{skill}", str(path)) if path.is_file() else bad(f"skill:{skill}", "missing"))
    for extra in ("SETUP.md", "SECURITY.md", "scripts/opening_bell.py"):
        path = root / extra
        results.append(ok(extra, str(path)) if path.is_file() else bad(extra, "missing"))
    return results


def check_desk(desk_root: Path) -> list[dict]:
    results = []
    if not desk_root.exists():
        return [bad("desk-root", f"{desk_root} does not exist yet")]
    for folder in ("proposals", "briefs", "research", "strategies", "data", "journal", "watch"):
        path = desk_root / folder
        results.append(ok(f"folder:{folder}", str(path)) if path.is_dir() else bad(f"folder:{folder}", "missing"))
    record = desk_root / "desk.md"
    if record.is_file():
        text = record.read_text(encoding="utf-8")
        if "coinbase-advanced" in text:
            results.append(ok("desk.md", "venue recorded"))
        else:
            results.append(bad("desk.md", "venue is not coinbase-advanced"))
    else:
        results.append(bad("desk.md", "not written yet (expected during setup)"))
    return results


def check_public() -> list[dict]:
    url = "https://api.coinbase.com/api/v3/brokerage/market/products/BTC-USD"
    try:
        request = urllib.request.Request(url, headers={"User-Agent": "coinbasegrok-desk-doctor/0.1"})
        with urllib.request.urlopen(request, timeout=15) as response:
            payload = json.load(response)
        product = payload.get("product_id")
        price = payload.get("price")
        if product == "BTC-USD" and price:
            return [ok("public-market", f"{product} last={price}")]
        return [bad("public-market", "unexpected product payload")]
    except Exception as exc:  # noqa: BLE001 — doctor must stay running
        return [bad("public-market", str(exc))]


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo-root", default=str(Path(__file__).resolve().parents[1]))
    parser.add_argument("--desk-root", default="/workspace/cb-trading-desk")
    args = parser.parse_args(argv)
    results = []
    results.extend(check_repo(Path(args.repo_root)))
    results.extend(check_desk(Path(args.desk_root)))
    results.extend(check_public())
    failed = [row for row in results if not row["ok"]]
    for row in results:
        mark = "PASS" if row["ok"] else "WARN" if row["name"] in {"desk.md"} and "not written" in row["detail"] else "FAIL"
        if mark == "WARN":
            print(f"WARN  {row['name']}: {row['detail']}")
        elif row["ok"]:
            print(f"PASS  {row['name']}: {row['detail']}")
        else:
            print(f"FAIL  {row['name']}: {row['detail']}")
    blocking = [row for row in failed if not (row["name"] == "desk.md" and "not written" in row["detail"])]
    print()
    print("Desk doctor is read-only. No key read. No order sent.")
    return 1 if blocking else 0


if __name__ == "__main__":
    sys.exit(main())
