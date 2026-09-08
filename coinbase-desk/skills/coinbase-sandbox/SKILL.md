---
name: coinbase-sandbox
description: Coinbase Advanced static sandbox. Mocked accounts and orders. No auth. Not play money.
license: MIT
metadata:
  version: "0.1.0"
  category: coinbase
---

# Sandbox

Host: `https://api-sandbox.coinbase.com/api/v3/brokerage/`

No authentication. Responses are static. Public market data is **not** on this host — keep using production `/market/*` for briefs.

Available (see Coinbase sandbox docs): accounts, orders create/cancel/edit/preview/list/fills, portfolios, some intx mocks.

Error drills via header:

- `X-Sandbox: PostOrder_insufficient_fund`
- `X-Sandbox: CancelOrders_failure`
- `X-Sandbox: PreviewOrder_insufficient_fund`

Use these before live so Execution and Risk have seen a reject path.

Never copy sandbox order ids into a live ticket. Never tell the user sandbox PnL is real.
