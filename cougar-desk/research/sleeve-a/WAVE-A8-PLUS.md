# Wave A8+ (open 2026-09-10)

Jeffrey asked for the next named families after A3–A7 were burned in one night. Cards live in `sleeve-a/cards/`. Queue law is in `STRATEGY-QUEUE.md`.

## Why these, not another SMA tweak

A1–A7 were mostly the same bet: **overnight long the 1× ETF, 2.5 / 7.5 / ~10 days**, with a trend or stretch filter. Two of them printed a full-sample green (IBIT A1, ETHA A6) and both **died in harden**. A5 almost never fired. A4 / #2 were breakout pokes. Running A3 again with SMA20 = 21 is not a new family.

A8–A14 change **when** the bet is taken or **what** has to be true besides “price near an average”:

| ID | What is new vs the burned pile |
| --- | --- |
| A8 | First session *after* a dated US print — not a research pause |
| A9 | Monday open vs Friday close (weekend crypto gap on the ETF) |
| A10 | IBIT makes the high; ETHA/BSOL/BHYP is the laggard |
| A11 | Narrowest range of 7, then a close through that high (not a 20-day Donchian) |
| A12 | Failed breakdown: close under the 20-day low, then reclaim |
| A13 | RSI(2) washout while still above a slow average |
| A14 | Inverse of A7: buy a pullback *inside* a quiet ATR streak |

## Cadence (do not blast)

- **One ID per weekday.** Card file first, then backtest, then harden. STATUS one line.
- A3–A7 in a single night is what we are not repeating.
- No B1. No Coinbase. No A1–A7 reruns. No lookback shopping to harvest n.

## Gate (same as A6 law, not the weaker WF1-only gate)

All of: n ≥ 30 (n ≥ 20 if that ETF is young), E > 0 at **10 bps** RT, walk-forward first window E > 0, **and** rolling out-of-sample mean E > 0 (same harden that killed ETHA A6). Full-sample green + harden red = FAIL. Do not promote.

## After this wave

Do not invent A15 until A8–A14 each have a card + a pass/fail row in `WAVE-A8-RESULTS.md` (create that file when the first ID finishes).
