---
name: shared-research
description: Coin-level briefs for Cougar. Venue and ticker are Desk Lead's job after book.md.
---

# Shared research

Market Analyst and Research Analyst write **coins**, not tickets.

## Coins in scope

**Primary (every weekday):** BTC, ETH, SOL, HYPE.  
XRP / LINK / DOGE / AVAX / SUI only if Jeffrey adds them back. Do not brief Coinbase pairs as trade ideas.

## Brief

Path: `/workspace/cougar-trading-desk/briefs/YYYY-MM-DD-<COIN>.md`

Must include:

- bias: long / flat / short (Schwab shorts only if Jeffrey enables them; default **long or flat**)
- invalidation (price or event)
- 48h catalysts (URL + UTC)
- X / news tone vs last week (Research); optional `sent_score` (−1/0/+1) with evidence
- tape: last, 24h range, what would falsify (Market) — public coin prints are fine even when the fill will be an ETF
- Market also writes the metrics board (`skills/metrics-board`)
- `not a ticket`

Do **not** name IBIT, BITX, or `BTC-USD` in the thesis. Those are routing.

## Cadence

Same window as the Roh loop: once on the weekday morning, once if a catalyst prints. Desk Lead synthesizes only after the coin file exists.

## Mapping (Lead only)

After the brief and `book.md`:

1. If coin is in the book → skip.
2. If adding a **full-size** Schwab name would make a third $100-risk Schwab row → skip (unless Jeffrey sized it down so total Schwab risk ≤ $200 and notional ≤ $12,000).
3. Coinbase C is frozen. Do not route there.
4. If NYSE/Nasdaq regular session and brief says same-day only → sleeve B if a 2× ticker exists (BTC/ETH/SOL only).
5. Else if swing / overnight → sleeve A if a 1× ticker exists.

Write the chosen instrument on the ticket, not in the brief.
