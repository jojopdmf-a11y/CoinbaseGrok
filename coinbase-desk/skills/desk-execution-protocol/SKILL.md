---
name: desk-execution-protocol
description: Pre-send checklist and one-send discipline for Coinbase Advanced. Execution Trader only.
license: MIT
metadata:
  version: "0.1.0"
  category: desk
---

# Execution protocol

This is the only skill that ends in `POST /api/v3/brokerage/orders` on live, and only the Execution Trader uses it.

## Required before send

1. Proposal file with Risk PASS and exact ticket fields.
2. User approval line by id, after the ticket was shown, inside expiry.
3. `desk.md` engagement level is **live**.
4. Auto-review Require Approval is believed to be on (ask if unknown).
5. CDP key is in the secret store; Transfer is off.
6. Isolated portfolio uuid in the ticket matches the key scope.
7. A **current** preview (`coinbase-preview`) matches the ticket within slippage tolerance.
8. Fresh `client_order_id` (UUID) written into the proposal **before** the send.
9. One action. Entry plus attached stop is still one approved ticket; a second action type needs a second ticket.

## Send

```bash
python3 /workspace/coinbase-desk/scripts/create_order.py \
  --i-understand-this-is-live \
  --client-order-id "<uuid>" \
  --product BTC-USD --side BUY --type market --quote-size 250 \
  --desk-root /workspace/cb-trading-desk
```

Never invent a second client_order_id and retry. Timeout → `desk-incident-response`.

## After

Read create response. Then `GET /orders/historical/{order_id}` and fills. Report exchange numbers. DM Trade Reviewer.
