# Dual-venue paper game plan

Updated: **2026-09-10** (Jeffrey: Schwab-only hunt; Coinbase frozen; A8–A14 open; **do not pause for CPI**)  
Mode: **research / paper only**. No Schwab send. No Coinbase `POST /orders`.

## Goal
Find fee-honest edge on **BTC, ETH, SOL, HYPE** via Schwab ETFs (sleeves A then B). Factory: `STRATEGY-QUEUE.md`.

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
- Coinbase C: **frozen** — no new ideas, no new replays, no PAPER-CB queue

## Experiment queue (paper)

### Wave 1 — Sleeve A 3R (primary)
Backtest **IBIT / ETHA / BSOL / BHYP** (Yahoo proxies OK if Schwab history is short) using **A8–A14** in `STRATEGY-QUEUE.md` and `sleeve-a/cards/`. A1–A7 are burned.
- Stop 2.5% / target 7.5% / time stop 10 trading days unless the card says otherwise
- Fees: Schwab ~$0 commission + documented spread; stress **5 and 10 bps** RT (HYPE also **15–25 bps**)
- Success: fee-adj E > 0 at 10 bps, n ≥ 30 (n ≥ 20 if the ETF is young), walk-forward first window E > 0, **and** rolling OOS mean E > 0

### Wave 2 — Sleeve B 2× day
BITX / ETHT / SOLT: same 2.5%/7.5% on the **2× ticker**, flatten same session; only if Wave 1 shows a coin with edge.

### Wave 3 — Sleeve C (Coinbase)
**Stopped.** Do not reopen. v3R-60 and fee-map stay as autopsy files only.

## Idea → test → report loop
1. Research/Market write **coin** brief (no venue in thesis)
2. Strategist writes explicit rules + backtest
3. Risk sizes from SLEEVES caps (paper)
4. Desk Lead routes to A/B on paper ticket id `PAPER-SW-…` — never asks Jeffrey to approve. No PAPER-CB.
5. Trade Reviewer grades process vs outcome on paper closes
6. COO/Desk Lead weekly digest: what worked, what falsified, org notes

## Reports Jeffrey gets (no approve buttons)
- After each wave: one table + pass/fail
- Weekday brief: open paper ideas + backtest queue status (quiet if nothing new)

## Wave 1 status
- IBIT×A1 (COO EMA50): full-sample PASS @10bps → **harden FAIL**
- Desk Lead ruleset #1 SMA variant: separate; desk truth = COO A1 harden
- Ruleset #2 breakout: **no n-gate clears**
- A3–A7: `WAVE-A3-A7.md` — ETHA A6 full-sample PASS then harden FAIL; **zero promote**
- Next: **A8** (`sleeve-a/cards/A8.md`). One ID per weekday. No B1.

### CPI pause — lifted
Jeffrey: waiting on CPI is the wrong direction. A8 *uses* dated prints as an entry filter; it does not idle the desk.
