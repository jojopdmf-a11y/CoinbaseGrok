# Schwab strategy factory (paper)

Updated: **2026-09-09**  
Jeffrey: **full pause on Coinbase ideas.** Do **not** wait for CPI. Hunt rules for **BTC, ETH, SOL, HYPE** expressed as Schwab ETFs.

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

## Queue (run in order, paper, all four coins unless noted)

Each row is a **new named ruleset**. Same 3R money sheet unless the card says otherwise. Gate: n≥30 (n≥20 if the ETF is young), E>0 at **10 bps**, **and** walk-forward first window E>0.

| ID | Family | Plain entry (Strategist must write the exact bars) |
| --- | --- | --- |
| A3 | Trend pullback v2 | Close above SMA50, pullback that **holds** SMA20 (not a same-day tag), enter next open. Different from burned A1. |
| A4 | Donchian break | Close breaks 20-day high, SMA50 up. Enter next open. Wider than the failed #2 if #2 was a 1-day poke. |
| A5 | Stretch fade | Close ≥ 2×ATR below SMA20, SMA50 still up or flat; fade toward SMA20, still 2.5/7.5. Mean-reversion, not VWAP. |
| A6 | Momentum | 10-day return in top quartile of last 60 days; enter next open; skip if already 2 names. |
| A7 | Vol expansion | ATR(14) crosses above ATR(14) 20-day median after a quiet week; trade the **direction of that day’s close**. |
| B1 | 2× same-day (BTC/ETH/SOL only) | Only after **one** A-family shows a coin with harden-PASS. Open-drive or first-hour range break on BITX/ETHT/SOLT; flat at close. |

Do **not** skip to B1 because A3–A7 are unfinished. Do **not** add A8 until A3–A7 each have a one-page card and a pass/fail table.

## Sentiment — how to use it (if at all)

Add as **A3s / A4s** (same rule + sentiment filter), not as a new family:

- Log `sent_score` daily in the metrics board (−1, 0, +1) with three cited posts or a mention-count z-score.
- Replay: take the A3 trade **only if** yesterday’s score ≥ 0.
- If the filter does not lift walk-forward E, **drop sentiment**. Do not hire a specialist.

## Metrics — how to use them

Market updates the board every weekday. Strategist uses it to **pick which queued family to run next** (e.g. stretched → A5; quiet ATR → A7). Metrics are not a live “buy now” unless they are already in a written rule card.

## Cadence

- Every weekday: metrics board + four coin briefs (BTC ETH SOL HYPE). Flat is allowed.
- Every weekday: Strategist finishes **one** queued ID or explains blocked (missing data).
- Desk Lead: paper tickets only (`PAPER-SW-…`). No approve ping. No Coinbase queue.
- After each ID: table + PASS / FAIL / n-fail in `cougar-desk/research/sleeve-a/` and a STATUS line.

## CPI and other events

Catalysts go in the brief. They do **not** pause the factory. A8+ may be an event-hold family later. Not this week’s excuse to idle.
