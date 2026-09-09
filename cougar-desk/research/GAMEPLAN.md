# Dual-venue paper game plan
Updated: 2026-09-09T18:45:58Z
Mode: research / paper only. No Schwab send. No Coinbase POST /orders.

## Goal
Prove or falsify sleeves A/B fee-honest positive expectancy; keep C as small paper lab.

## Already failed (do not reopen)
- Coinbase Intro 1 VWAP-fade v6–v23: FEE_WALL @ 1.2% RT
- Coinbase v3R-60: FAIL @ 1.2% (n=23, E -$7.40)
- No cheaper product than Intro 1 schedule

## Caps
- One coin → one venue → one sleeve
- Schwab full-size: $100 risk, 2.5% stop, 7.5% T1 (~$4k notional)
- Max 2 full-size Schwab; risk ≤ $200; notional ≤ $12k
- Coinbase C: $15 risk / ~$500–600; paper only

## Wave 1 status (2026-09-09)
- IBIT×A1 (COO EMA50): full-sample PASS @10bps → harden FAIL (H1 E negative) → iterate, not promote
- Desk Lead ruleset #1 SMA ≠ COO A1; desk truth = COO harden
- Ruleset #2 breakout: no n-gate clears (IBIT 25 / ETHA 18 / BSOL 7)
- Pause: no new Sleeve A rules until post-CPI week; then refresh coin briefs
