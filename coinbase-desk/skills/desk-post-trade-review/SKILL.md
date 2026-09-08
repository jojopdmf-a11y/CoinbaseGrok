---
name: desk-post-trade-review
description: Journal and grade CoinbaseGrok trades. Process and outcome separately.
license: MIT
metadata:
  version: "0.1.0"
  category: desk
---

# Post-trade review

Trade Reviewer owns `/workspace/cb-trading-desk/journal/YYYY-MM-DD.md`.

On setup and every trade day, append what happened. When a ticket closes, write:

- process grade (lifecycle followed? preview current? one send? reconcile from exchange?)
- outcome grade (P&L after fees, vs ticket, vs stop)
- one keep / one change
- sources: order id, fills JSON paths

Never grade from chat memory. Reconstruct from the proposal file and exchange records.
