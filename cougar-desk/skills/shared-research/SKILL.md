---
name: shared-research
description: Coin-level briefs for Cougar. Venue and ticker are Desk Lead's job after book.md.
---

# Shared research

Market Analyst and Research Analyst write **coins**, not tickets.

## Coins in scope

BTC, ETH, SOL, XRP, HYPE, LINK, DOGE, AVAX, SUI. Do not brief a coin that has no row in `allowlists/coins.md`.

## Brief

Path: `/workspace/cougar-trading-desk/briefs/YYYY-MM-DD-<COIN>.md`

Must include:

- bias: long / flat / short (Schwab shorts only if Jeffrey enables them; default **long or flat**)
- invalidation (price or event)
- 48h catalysts (URL + UTC)
- X / news tone vs last week (Research)
- tape: last, 24h range, what would falsify (Market) — Coinbase public data is fine even when the fill will be an ETF
- `not a ticket`

Do **not** name IBIT, BITX, or `BTC-USD` in the thesis. Those are routing.

## Cadence

Same window as the Roh loop: once on the weekday morning, once if a catalyst prints. Desk Lead synthesizes only after the coin file exists.

## Mapping (Lead only)

After the brief and `book.md`:

1. If coin is in the book → skip.
2. If adding a **full-size** Schwab name would make a third $100-risk Schwab row → skip (unless Jeffrey sized it down so total Schwab risk ≤ $200 and notional ≤ $12,000).
3. Coinbase C may be a third coin at $15 risk. It does not use a Schwab slot.
4. If NYSE/Nasdaq regular session and brief says same-day only → sleeve B if a 2× ticker exists.
5. Else if swing / overnight → sleeve A if a 1× ticker exists.
6. Else if Coinbase engagement is paper/preview/live and pair is on the fee-map allowlist → sleeve C.

Write the chosen instrument on the ticket, not in the brief.
