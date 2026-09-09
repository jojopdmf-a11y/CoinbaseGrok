---
name: metrics-board
description: Daily replayable numbers for BTC ETH SOL HYPE ETFs. Not a live buy signal.
---

# Metrics board

Market Analyst. Weekday. One file:

`/workspace/cougar-trading-desk/briefs/metrics-YYYY-MM-DD.md`

For **IBIT, ETHA, BSOL, BHYP** (or THYP if BHYP does not quote):

- last, session change %
- SMA20, SMA50, close minus each (in %)
- ATR(14) and ATR vs its 20-day median
- % below 20-day high / above 20-day low
- volume / 20-day average volume
- bid-ask spread in **bps** (Schwab quote if available; else “unavailable”)
- HYPE: note if $4k would be > ~2% of 20-day dollar volume → size warning

Research may append one line per coin: `sent_score -1|0|+1` and the evidence. No score = treat as 0.

Copy `templates/metrics-board.md` if starting a blank day.

End with `not a ticket`. Optional last line: which queued family the tape fits (A3–A7). That is a factory hint, not a buy.
