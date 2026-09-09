# Sleeves

Equity assumed **$10,000** on Schwab (dedicated account). Hunt is **Schwab-only**. Coinbase sleeve C is frozen.

Risk language on Schwab: **$100 risk**, stop **2.5%** of *that instrument*, target **7.5%** (3R).

## Sleeve A — Schwab 1× overnight

- Instruments: **IBIT** (BTC), **ETHA** (ETH), **BSOL** (SOL), **BHYP** (HYPE; else THYP / HYPG). Other allowlist names only if Jeffrey adds them back.
- Hold through the close and overnight is allowed.
- Limit orders. Ticket: `SW-YYYYMMDD-NN`.
- Notional per name: **$100 ÷ 0.025 ≈ $4,000**. Do not widen the ticket because margin exists.
- **Borrow cap:** total Schwab notional (A + B) ≤ **$12,000** (1.2× the $10k). That is “a bit” of IBIT margin, not 2× the account.
- House margin can jump; if Schwab would force leverage above 1.2× or issue a call, flatten to cash. Do not average down.
- Max **two full-size** Schwab names ($100 risk each). A third Schwab coin only if total open Schwab risk stays ≤ $200 and notional ≤ $12,000. Different coins only. See `OVERLAP.md`.

## Sleeve B — Schwab 2× day

- Instruments: **BITX** (BTC), **ETHT** (ETH), **SOLT** (SOL) only. No other 2× until Jeffrey adds them.
- **Flat before the regular-session close.** No overnight BITX/ETHT/SOLT. If the target is not hit, exit at the close (or the last limit that still fills).
- Stop **2.5%** and target **7.5%** on the **2× ticker** (≈ 1.25% / 3.75% on the coin).
- Same **$100** risk → **~$4,000 of the 2× ETF**, not $100 of it.
- **One** 2× name at a time.
- Ticket: `SW-DAY-YYYYMMDD-NN`.
- Never open B in a coin that already has A or C.

## Sleeve C — Coinbase 3R (**frozen**)

- Do not open CB- or PAPER-CB tickets. Do not design new Coinbase rules.
- Autopsy only: `research/v3R-60.md`, `research/fee-map.md`.
- Same coin rule still applies if a leftover Coinbase row exists in `book.md`: that coin is taken.

## Session router

| Clock (America/New_York) | Default |
| --- | --- |
| Regular 9:30–15:45 | A or B allowed if coin is free. Prefer B only when the brief says “needs same-day, flatten OK”. |
| After 15:45 | No new B. Flatten B. A may stay. |
| Weekend / holiday | No new Schwab. Coinbase stays frozen. |

Extended-hours A entries are optional and must use limits; B is regular session only.

## Approval

Jeffrey types the exact ticket id. “Yes” is not approval. No Bot types `approve`.
