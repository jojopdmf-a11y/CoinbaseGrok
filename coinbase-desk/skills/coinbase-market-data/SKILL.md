---
name: coinbase-market-data
description: Public Coinbase Advanced product, book, ticker, and candles. No key.
license: MIT
metadata:
  version: "0.1.0"
  category: coinbase
---

# Market data

Public, cached ~1s. For tighter books use WebSocket later; REST is enough for briefs.

```bash
curl -sS -A coinbasegrok "https://api.coinbase.com/api/v3/brokerage/market/products/BTC-USD"
curl -sS -A coinbasegrok "https://api.coinbase.com/api/v3/brokerage/market/product_book?product_id=BTC-USD&limit=60"
curl -sS -A coinbasegrok "https://api.coinbase.com/api/v3/brokerage/market/products/BTC-USD/ticker?limit=20"
```

Candles: `GET /api/v3/brokerage/market/products/{product_id}/candles?start=&end=&granularity=`

Opening Bell wraps product + book:

```bash
python3 /workspace/coinbase-desk/scripts/opening_bell.py --product BTC-USD
```

Always quote `product_id`, last, mid, spread_bps, source URL, and UTC time. Depth on this REST page is visible depth, not the whole book.
