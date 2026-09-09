# Dual-venue paper game plan

Updated: **2026-09-09T18:45:58Z**  
Mode: **research / paper only**. Jeffrey is **not** approving. No Schwab send. No Coinbase `POST /orders`.

## Goal
Prove (or falsify) whether sleeves **A/B** under OVERLAP/SLEEVES can show fee-honest positive expectancy, and keep **C** as a small paper lab only.

## What already failed (do not reopen)
- Coinbase Intro 1 VWAP-fade family (v6–v23): FEE_WALL @ 1.2% RT
- Coinbase v3R-60 (v9 entry + 3R on $600): FAIL @ 1.2% (n=23, E −$7.40)
- Product fee shopping: no cheaper pair than Intro 1 schedule

## Rules in force
- `cougar-desk/docs/OVERLAP.md` + `SLEEVES.md`
- `book.md` is law (empty until paper tickets are marked pending/paper)
- One coin → one venue → one sleeve
- Schwab full-size: $100 risk, 2.5% stop, 7.5% T1 (~$4k notional)
- Max 2 full-size Schwab; total Schwab risk ≤ $200; notional ≤ $12k
- Coinbase C: $15 risk / ~$500–600; paper only

## Experiment queue (paper)

### Wave 1 — Sleeve A 3R (primary)
Backtest IBIT / ETHA / BSOL (or Yahoo proxies) with:
- Entry: simple, explicit rule set #1 (daily bias + pullback) then #2 (breakout)
- Stop 2.5% / target 7.5% / time stop 10 trading days
- Fees: assume Schwab ~$0 commission + modest spread (document assumption; stress 5–10 bps RT)
- Success: fee-adj E > 0, n ≥ 30 (or n ≥ 20 if ETF history short), report WR, avg win/loss, max DD, # trades/year

### Wave 2 — Sleeve B 2× day
BITX / ETHT / SOLT: same 2.5%/7.5% on the **2× ticker**, flatten same session; only if Wave 1 shows a coin with edge.

### Wave 3 — Sleeve C (Coinbase) maintenance only
No new VWAP variants. Optional: maker-only constraint study later. Not the main hunt.

## Idea → test → report loop
1. Research/Market write **coin** brief (no venue in thesis)
2. Strategist writes explicit rules + backtest
3. Risk sizes from SLEEVES caps (paper)
4. Desk Lead routes to A/B/C on paper ticket id `PAPER-SW-…` / `PAPER-CB-…` — never asks Jeffrey to approve
5. Trade Reviewer grades process vs outcome on paper closes
6. COO/Desk Lead weekly digest: what worked, what falsified, org notes

## Reports Jeffrey gets (no approve buttons)
- After each wave: one table + pass/fail
- Weekday brief: open paper ideas + backtest queue status (quiet if nothing new)

## Wave 1 status (2026-09-09T18:53:37Z)
- IBIT×A1 (COO EMA50): full-sample PASS @10bps → **harden FAIL** (H1 E negative)
- Desk Lead ruleset #1 SMA variant: separate; desk truth = COO A1 harden
- Ruleset #2 breakout: **no n-gate clears** (IBIT 25 / ETHA 18 / BSOL 7)
- Flat coin briefs → no PAPER-SW
- Next: iterate or pause for catalyst week — no promote

### Pause (2026-09-09T18:53:59Z)
Desk Lead + COO: **no new Sleeve A rulesets** until post-CPI week; then refresh coin briefs from live tape. Strategist idle on new rules.
