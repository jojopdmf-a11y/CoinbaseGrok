---
name: desk-strategy-lab
description: Turn the user's idea into rules, Coinbase candles, and preview-only paper.
license: MIT
metadata:
  version: "0.1.0"
  category: desk
---

# Strategy lab

The desk ships no strategy and makes no return claims. The Strategist writes the user's rules under `/workspace/cb-trading-desk/strategies/<name>/RULES.md`.

Use public candles (`coinbase-market-data`). Include fees from `GET /transaction_summary` or a stated taker rate. Walk-forward split. Report the trade distribution, not a headline Sharpe.

Paper: replay on candles, then **preview** on live if a key exists. Never create in the lab.
