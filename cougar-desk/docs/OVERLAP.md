# One coin, one place

`/workspace/cougar-trading-desk/book.md` is the only open-position truth. Chat agreement is not a book.

## Forbidden stacks

| If this is open | Do not open |
| --- | --- |
| Coinbase `BTC-USD` or `BTC-USDC` | IBIT, BITX, any other BTC ETF |
| IBIT (sleeve A) | BITX, Coinbase BTC |
| BITX (sleeve B) | IBIT, Coinbase BTC |
| ETHA | ETHT, Coinbase ETH |
| ETHT | ETHA, Coinbase ETH |
| BSOL | SOLT, Coinbase SOL |
| SOLT | BSOL, Coinbase SOL |
| Any XRP ETF | another XRP ETF or Coinbase XRP |
| BHYP / THYP / HYPG | a second HYPE product or Coinbase HYPE |

Same rule for every row in `allowlists/coins.md`: **one instrument family per coin**.

## Also forbidden

- Two Schwab names that are the same coin (IBIT + FBTC).
- Sleeve B plus sleeve A in the same coin (“stealth 3×”).
- Raising notional above ~$4,000 on a **full-size** name while keeping a 2.5% stop (that raises dollar risk above $100).
- A third **full-size** Schwab ticket (~$4,000 / $100 risk). That is 3% risk and no cash.

## Position count (not “two coins firm-wide”)

Law is **risk and notional**, not a hard two-ticker firm.

- Max **two full-size Schwab names** ($100 risk each, ~$4,000 notional).
- Coinbase C does **not** count as a Schwab name. IBIT + ETHA plus a Coinbase SOL 3R ($15 risk) is allowed.
- A third **Schwab** coin is allowed only if you **cut size** so:
  - total open Schwab risk (sum of dollar stops) ≤ **$200** (2% of $10,000)
  - total Schwab notional (A + B, open + pending) ≤ **$12,000**
- Examples: two $4k names (risk $200, notional $8k) and stop. Or two $4k + one ~$2k satellite (risk $250) — **reject**. Or one $4k + two ~$2k (risk $200, notional $8k) — **ok** if coins differ and none are stacked.

Pending rows count toward both caps.

## Skip

If the coin is taken, Desk Lead journals a skip: coin, who holds it, ticket id. Research does not rewrite the brief to force a second venue.
