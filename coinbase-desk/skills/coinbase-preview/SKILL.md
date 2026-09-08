---
name: coinbase-preview
description: Dry-run Coinbase Advanced orders. Fees, slippage, fill estimate. No rest on the book.
license: MIT
metadata:
  version: "0.1.0"
  category: coinbase
---

# Preview

`POST /api/v3/brokerage/orders/preview` (View). Required on preview and live tickets before a send.

```bash
python3 /workspace/coinbase-desk/scripts/preview_order.py \
  --product BTC-USD --side BUY --type market --quote-size 250
```

Record the preview JSON under `## preview` in the proposal: commission, slippage, best bid/ask used, errors.

A preview that fails is a REJECT. A preview older than two minutes is stale; run it again.

Sandbox preview is a mock. Label it `sandbox`.
