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
- Raising notional above ~$4,000 because “we have margin” while keeping a 2.5% stop (that raises dollar risk above $100).
- A third coin while two coins are already open (firm-wide max **two coins**).

## Skip

If the coin is taken, Desk Lead journals a skip: coin, who holds it, ticket id. Research does not rewrite the brief to force a second venue.
