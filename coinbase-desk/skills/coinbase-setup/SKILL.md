---
name: coinbase-setup
description: Hosts, pip, secret names, engagement levels, and isolated portfolios for Coinbase Advanced.
license: MIT
metadata:
  version: "0.1.0"
  category: coinbase
---

# Coinbase setup

## Hosts

| Use | Host |
| --- | --- |
| Public market | `https://api.coinbase.com/api/v3/brokerage/market/` |
| Live authenticated | `https://api.coinbase.com/api/v3/brokerage/` |
| Sandbox (static mocks) | `https://api-sandbox.coinbase.com/api/v3/brokerage/` |

## Python

```bash
python3 -m pip install --user coinbase-advanced-py
```

Official SDK: [coinbase-advanced-py](https://github.com/coinbase/coinbase-advanced-py).

## Secrets (preview and live only)

Ask the user to create a CDP API key at https://portal.cdp.coinbase.com/

1. New Advanced portfolio named `grok-desk` (or similar). Fund only what they will risk.
2. API key scoped to that portfolio.
3. Permissions: **View** and **Trade**. **Transfer off**.
4. Download the JSON once. Put into Grok Bot secret store as:

- `COINBASE_API_KEY_NAME` — `organizations/{org}/apiKeys/{id}`
- `COINBASE_API_PRIVATE_KEY` — EC PEM, newlines preserved
- `COINBASE_PORTFOLIO_UUID` — the isolated portfolio

Never accept a key pasted in chat. Never enable Transfer "just in case".

## Engagement

Record in `desk.md`. Research needs nothing from this skill beyond hosts. Sandbox needs no key. Preview needs the key but only `scripts/preview_order.py`. Live needs the key plus `desk.md` engagement `live`.
