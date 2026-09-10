# Schwab strategy factory (paper)

Updated: **2026-09-10**  
Jeffrey: **full pause on Coinbase ideas.** Do **not** wait for CPI. Hunt rules for **BTC, ETH, SOL, HYPE** expressed as Schwab ETFs.

**Current wave: A8–A14.** Cards: `sleeve-a/cards/`. Cover: `sleeve-a/WAVE-A8-PLUS.md`. A3–A7 are closed.

## What we need that we did not have

Not another Bot. Three **files** plus a queue:

1. **Metrics board** (Market, daily) — numbers that can be replayed: close vs SMA20/50, ATR(14), % from 20-day high/low, volume vs 20-day avg, ETF spread bps. Path: `cougar-trading-desk/briefs/metrics-YYYY-MM-DD.md`
2. **Sentiment score** (Research, daily, optional filter) — a **number with a timestamp**, not a vibe. Example: X mention volume vs 30-day mean for that coin, or +1/0/−1 from a written rubric. If it cannot be written down the day *before* a backtest bar, it is not a rule. Do **not** create a Sentiment Finder Bot.
3. **Rule card** (Strategist) — one family, one page: entry, stop 2.5%, target 7.5% (or documented exception), time stop, fee assumption (5 and 10 bps RT), products. Then backtest. Then **walk-forward**. Full-sample green + first-half red = FAIL (same as IBIT A1).

Active learning = **walk the queue below**. It is not an LLM staring at the live tape and “feeling” an entry.

## Products

| Coin | Sleeve A (overnight 1×) | Sleeve B (2×, flatten same day) |
| --- | --- | --- |
| BTC | IBIT | BITX |
| ETH | ETHA | ETHT |
| SOL | BSOL | SOLT |
| HYPE | BHYP (else THYP / HYPG) | — (no 2× until Jeffrey adds one) |

HYPE books are thinner: stress **15–25 bps** RT as well as 10. If ADV is too low to fill ~$4k, cut size or skip.

## Already burned (do not rerun as the main idea)

- Coinbase anything (VWAP fades, v3R-60, fee shopping)
- COO IBIT A1 (EMA50 + EMA20 band) — full-sample pass, harden fail
- Strategist SMA20/10 reclaim — separate, not desk truth
- Breakout ruleset #2 — failed n-gate as written
- **A3–A7** — `sleeve-a/WAVE-A3-A7.md`. ETHA A6 full-sample PASS then rolling-OOS harden FAIL. Zero promote.

## Queue (run in order, paper)

Each row is a **new named ruleset**. Exact bars are in `sleeve-a/cards/A#.md` — do not rewrite the entry in chat. Same 3R money sheet unless the card says otherwise.

Gate (A6 law): n≥30 (n≥20 if the ETF is young), E>0 at **10 bps**, walk-forward first window E>0, **and** rolling OOS mean E>0.

| ID | Family | One line |
| --- | --- | --- |
| A8 | Post-print digest | First ETF session after CPI / FOMC / NFP; close > prior high and SMA50; next open. Calendar file required. |
| A9 | Monday weekend gap | Friday close > SMA50; Monday open ≤ Fri close − 0.75×ATR; buy that open. |
| A10 | IBIT-lead laggard | IBIT 10-day close high; buy ETHA/BSOL/BHYP that did not make its own high and sits under SMA20. |
| A11 | NR7 close-through | Narrowest range of 7, SMA50 flat/up; next day **closes** above that high; enter following open. |
| A12 | Failed breakdown | Close under prior 20-day low, next close reclaims that level; enter following open. |
| A13 | RSI(2) washout | Close > SMA100 (or SMA50 if young); RSI2 < 15; next open. |
| A14 | Compression pullback | ATR below its 20-day median five days in a row; close > SMA50 and lowest close of those five; next open. |
| B1 | 2× same-day | Still locked. Needs **one** A-family harden-PASS first. |

Do **not** skip to B1. Do **not** add A15 until A8–A14 each have a card (already written) **and** a pass/fail row. Do **not** rerun A1–A7.

## Sentiment — how to use it (if at all)

Add as **A8s / A9s** (same rule + sentiment filter) only after that base ID has a table, not as a new family:

- Log `sent_score` daily in the metrics board (−1, 0, +1) with three cited posts or a mention-count z-score.
- Replay: take the trade **only if** yesterday’s score ≥ 0.
- If the filter does not lift walk-forward E, **drop sentiment**. Do not hire a specialist.

## Metrics — how to use them

Market updates the board every weekday. Strategist uses it to **pick which queued family to run next** only if that ID is still open (e.g. quiet ATR streak → A14, not a rerun of A7). Metrics are not a live “buy now” unless they are already in a written rule card.

## Cadence

- Every weekday: metrics board + four coin briefs (BTC ETH SOL HYPE). Flat is allowed.
- Every weekday: Strategist finishes **one** queued ID (card already in `sleeve-a/cards/`) or explains blocked (missing data / missing A8 calendar).
- **Do not run A8–A14 in one night.** That is how A3–A7 got a thin autopsy instead of a real wave.
- Desk Lead: paper tickets only (`PAPER-SW-…`). No approve ping. No Coinbase queue.
- After each ID: append a row to `sleeve-a/WAVE-A8-RESULTS.md` (create on first finish) and a STATUS line.

## CPI and other events

Catalysts go in the brief. They do **not** pause the factory. A8 is a dated entry rule, not permission to idle until the next print.
