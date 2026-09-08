---
name: coinbase-account
description: Authenticated Coinbase accounts, portfolios, balances, and fee tier. View permission.
license: MIT
metadata:
  version: "0.1.0"
  category: coinbase
---

# Account

Needs CDP key in the environment. Never print the key.

Use `coinbase-advanced-py` `RESTClient`:

- `get_accounts()`
- `get_portfolios()`
- `get_portfolio_breakdown(portfolio_uuid)`
- `get_transaction_summary()` for fee tier

Prefer the isolated `COINBASE_PORTFOLIO_UUID`. If the key can see Primary and the isolated book, **size from the isolated book only** and say so.

Equity for spot: sum of quote currency available (`USD` or `USDC`) plus marked base inventory the limits file treats as tradable. State which.

This skill does not transfer, convert, or create portfolios unless the user is sitting on the Coinbase site doing it themselves. The desk does not call Transfer APIs.
