# A1 reconcile — Strategist ruleset #1 vs COO Wave 1 sheet

**Purpose:** Explain IBIT **n=60** (Strategist) vs **n=36** (COO). Paper only.

## Strategist — ruleset #1 (n=60 IBIT)
**File:** `RULES.md`, `ruleset1_results.md`, `ruleset1_backtest.py`  
**Label:** *not* the same as COO **A1** (different indicators).

### Exact rule text
- Indicators: **SMA20**, **SMA10** of Close; warmup ≥20 bars
- Bias day t: `Close[t] > SMA20[t]`
- Pullback in window t-2..t: at least one session `Low ≤ SMA10` of that session AND `Close[t] ≥ SMA20[t]`
- Signal: bias + pullback + `Close[t] > Open[t]` (green reclaim)
- Entry: `Open[t+1]`; max 1 open per product
- Exits: stop −2.5% / target +7.5% / time stop 10 trading days; same-bar → stop first
- Fees: primary **5 bps** RT (also stress 10); commission $0; notional $4000
- Gate: full-sample E@5bps > 0 and n≥30 (BSOL n≥20)

### Date window (IBIT)
- CSV: `IBIT_daily.csv` **2024-01-11 → 2026-09-09** (667 data rows + header)
- Results note: 667 bars; IS/OOS split at **2025-11-19** (70/30); n_IS=41, n_OOS=19
- IBIT verdict @5bps: n=60, E=$29.70, OOS E=$2.98 (thin)

## COO — A1 Daily trend pullback (n=36 IBIT)
**File:** `sleeve-a-backtest.md`  

### Exact rule text
- Long only when `close > EMA50` **and** same-day pullback toward EMA20: `low ≤ EMA20×1.01` and `close ≥ EMA20×0.99`
- Enter next open; stop 2.5% / target 7.5% / time stop 10d; same-bar stop-first
- Fees: primary report **10 bps** RT; commission $0; notional ≈ $4000
- Gate: E/trade > 0 at **10 bps** RT and n≥30 (short history n≥20)

### Date window (IBIT)
- Sheet: IBIT ETF **2024-02-09 → 2026-09-09**, 647 bars post warm-up
- Result: n=36, WR 33.3%, E@$10bps **+$10.64**, MaxDD −$1014.95 → **PASS**

## Why n differs (not a bug)
1. **Different signal:** SMA20/SMA10 + 3-day pullback + green reclaim vs EMA50 + same-day EMA20 band pullback → fewer COO signals.
2. **Fee gate column:** Strategist primary 5 bps; COO primary 10 bps.
3. **Warm-up / start:** Strategist CSV from 2024-01-11; COO table starts 2024-02-09 post warm-up.
4. Desk truth for “Wave 1 PASS” = **COO IBIT×A1 @10bps**. Strategist SMA table is a separate experiment (keep labeled ruleset1).

## Next
- Ruleset #2 and A3–A7 are closed. Next work is **A8+** (`sleeve-a/cards/`), not another A1 reconcile.
