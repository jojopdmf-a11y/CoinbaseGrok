# Sleeve A Wave 1 backtest (COO)
Updated: 2026-09-09T18:51Z approx
Fees primary 10 bps RT; notional ~$4000; stop 2.5% / target 7.5% / time 10d.

## A1 Daily trend pullback (EMA50 + EMA20 band)
| Product | n | WR | E @10bps | MaxDD | Verdict |
|---------|---|----|----------|-------|--------|
| IBIT | 36 | 33.3% | +$10.64 | -$1014.95 | PASS |
| ETHA | (see full sheet) | | | | |
| BSOL | (see full sheet) | | | | |

IBIT×A1 is the only clear full-sample PASS @10bps among primary ETF runs.
A2 variants and proxies documented in private desk scripts; this PR carries the headline result.

Headline: IBIT×A1 PASS full-sample @10bps → later harden FAIL → iterate not promote.
