---
name: coinbase-orders
description: Create, get, list, cancel, and fill Coinbase Advanced orders. Writes only by Execution Trader.
license: MIT
metadata:
  version: "0.1.0"
  category: coinbase
---

# Orders

Live writes follow `desk-execution-protocol`. This skill is the API mechanics.

## Shape

`client_order_id` (UUID you generated), `product_id`, `side`, `order_configuration`:

Market buy:

```json
{ "market_market_ioc": { "quote_size": "250" } }
```

Market sell:

```json
{ "market_market_ioc": { "base_size": "0.01" } }
```

Limit GTC:

```json
{ "limit_limit_gtc": { "base_size": "0.01", "limit_price": "70000", "post_only": false } }
```

Stop-limit and attached brackets: use Coinbase's current `order_configuration` names from the SDK `--template` / docs. If you are unsure, preview first and do not guess a futures contract.

## Scripts

Create (live, gated): `scripts/create_order.py`

Get / fills: SDK `get_order`, `list_orders`, `get_fills`, `cancel_orders`.

Cancel is a write. It needs a ticket unless the user granted a standing approval for cancels of **this desk's** resting orders.

## Never

Retry with a new client_order_id after an unknown result. Withdraw. Transfer.
