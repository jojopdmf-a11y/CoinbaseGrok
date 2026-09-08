# How the desk works

CoinbaseGrok runs inside one Grok Bot workspace: your Bots, one shared cloud computer, your conversations. This repository is the blueprint.

```
you
 |
 v
Trading Floor (6 Bots)                              DM
  Desk Lead --------------------------------------> Trade Reviewer
   |     |     |     |     |                        journal
   |     |     |     |     +-- Execution Trader --> POST /api/v3/brokerage/orders
   |     |     |     +-------- Risk Manager ------> GET accounts, portfolios, preview
   |     |     +-------------- Strategist --------> candles, preview paper
   |     +-------------------- Research Analyst --> browser, public pages
   +-------------------------- Market Analyst ----> GET /market/products, /market/product_book

computer:  /workspace/coinbase-desk     (this pack)
           /workspace/cb-trading-desk   (working files)
secret:    COINBASE_API_KEY_NAME
           COINBASE_API_PRIVATE_KEY     (EC PEM, secret store only)
           COINBASE_PORTFOLIO_UUID      (isolated Advanced portfolio)
```

## Trust boundaries

**Read plane.** Public `/api/v3/brokerage/market/*` needs no key. Authenticated reads (accounts, fills, preview) use the CDP key with View.

**Write plane.** One Bot. `POST /orders` only after Risk PASS + `approve CB-…` + preview that still matches the ticket + Auto-review.

**Key.** View + Trade. Transfer off. Isolated portfolio. Never printed.

**Evidence.** Exchange JSON and public endpoints are facts. Chat agreement is not.

**Unknown results.** A timeout is not a failure. Reconcile by `client_order_id`. Do not resend.

## One trade, seven stages

```
idea → evidence → risk → approve CB-YYYYMMDD-NN → one send → reconcile → review
```

Adjust, add, reduce, and close are trades too. New ticket, same path.

## Coinbase-specific facts the desk must not forget

- Product ids are `BASE-QUOTE` (`BTC-USD`, `ETH-USDC`). Not `BTC-PERP` unless the user is on a listed futures/intx product and the limits file allows it.
- Market **buys** use `quote_size`. Market **sells** use `base_size`.
- Preview (`POST /orders/preview`) is a first-class stage. Live sends without a current preview are a defect.
- Sandbox responses are static mocks. Never treat sandbox fills as evidence about live markets.
- Coinbase MCP (`https://agents.coinbase.com/mcp`) is not on Grok Bot's allowlist as of this writing. The desk uses REST from the shared computer, not MCP.

## Why seven

The person who wants the trade is not the one who sizes it, not the one who sends it, and not the one who grades it.
