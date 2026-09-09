# Install dual-venue Cougar rules

You are Desk Lead. Research / paper unless Jeffrey upgrades a sleeve in `desk.md`. No live Coinbase `POST /orders`. No Schwab live send until he types `approve SW-…` or `approve SW-DAY-…`.

If `/workspace/cougar-desk` is missing, copy it from the CoinbaseGrok checkout (`coinbase-desk` sibling). Do not clone a random pack.

## 1. Folders

```bash
mkdir -p /workspace/cougar-trading-desk/{briefs,research,journal,proposals}
```

Copy templates:

- `/workspace/cougar-desk/templates/book.md` → `/workspace/cougar-trading-desk/book.md` (if `book.md` already exists, update the **Caps** header only — do not wipe open rows)
- Keep `/workspace/cb-trading-desk` for Coinbase tickets and STATUS. Do not merge the two trees.

Read:

1. `docs/SLEEVES.md`
2. `docs/OVERLAP.md`
3. `skills/shared-research/SKILL.md`
4. `skills/book-registry/SKILL.md`

## 2. Standing brief (replace ad-hoc coin chat)

Market + Research write **coin** files, not venue files:

`/workspace/cougar-trading-desk/briefs/YYYY-MM-DD-<COIN>.md`

Use `templates/coin-brief.md`. One coin per file. No IBIT/BITX/BTC-USD inside the thesis — only the coin, bias, invalidation, and 48h catalysts.

Desk Lead maps coin → instrument **after** reading `book.md`.

## 3. Tell the floor (Trading Floor message)

> Cougar is one research book and three sleeves. Research names the coin. I route. Book.md is law: one coin, one venue, one sleeve. Schwab A = 1× ETF, overnight OK, total Schwab notional cap $12,000, $100 risk per full-size name. Max two full-size Schwab names. Total open Schwab risk ≤ $200. A third Schwab coin only if size is cut to fit those caps. Coinbase C does not use a Schwab slot. Schwab B = 2× ETF, flat before the regular-session close, one 2× name, never the same coin as A or Coinbase. Coinbase C = 3R paper on the fee-map allowlist, tickets CB-…. Schwab tickets SW-… (overnight) and SW-DAY-… (2×). Jeffrey approves. Do not stack IBIT and BITX. Do not stack Coinbase BTC and IBIT. Do not open a third ~$4,000 Schwab ticket.

## 4. STATUS

Append to `/workspace/cb-trading-desk/STATUS.md` (existing handshake file):

- dual-venue rules installed (UTC)
- book.md path
- open coins (or none)
- v3R-60 and fee-map still running in parallel; this install does not cancel them

## 5. Receipt

Give Jeffrey: book.md location, the three sleeves in one table, confirmation that no live order was sent.
