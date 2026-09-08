---
name: coinbase-api-reference
description: Compact Coinbase Advanced Trade REST map for the desk.
license: MIT
metadata:
  version: "0.1.0"
  category: coinbase
---

# API reference

Docs: https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/overview

## Public (no key)

| Method | Path |
| --- | --- |
| GET | `/api/v3/brokerage/market/products` |
| GET | `/api/v3/brokerage/market/products/{product_id}` |
| GET | `/api/v3/brokerage/market/product_book` |
| GET | `/api/v3/brokerage/market/products/{product_id}/ticker` |
| GET | `/api/v3/brokerage/market/products/{product_id}/candles` |

## View

| Method | Path |
| --- | --- |
| GET | `/api/v3/brokerage/accounts` |
| GET | `/api/v3/brokerage/portfolios` |
| GET | `/api/v3/brokerage/orders/historical/{order_id}` |
| GET | `/api/v3/brokerage/orders/historical/fills` |
| POST | `/api/v3/brokerage/orders/preview` |

## Trade (Execution only)

| Method | Path |
| --- | --- |
| POST | `/api/v3/brokerage/orders` |
| POST | `/api/v3/brokerage/orders/batch_cancel` |
| POST | `/api/v3/brokerage/orders/edit` |

Auth: CDP API key JWT (ES256). SDK handles signing. Do not roll your own JWT unless the SDK is unavailable and the user has approved that path.

MCP: `https://agents.coinbase.com/mcp` is not the Grok Bot path.
