---
name: desk-trade-lifecycle
description: Seven-stage CoinbaseGrok ticket. Idea, evidence, risk, approval, one send, reconcile, review.
license: MIT
metadata:
  version: "0.1.0"
  category: desk
---

# Trade lifecycle

Every position change uses these stages in order. Skipping one is a defect.

Ticket id: `CB-YYYYMMDD-NN` (NN increments that UTC day). File: `/workspace/cb-trading-desk/proposals/CB-YYYYMMDD-NN.md`.

## 1. Idea — Desk Lead

Open the file. Record the user's ask, product id, side, rough size or risk, and why.

## 2. Evidence — Market Analyst, Research when relevant

Timestamped book, last, spread, 24h volume, product increments. Research adds catalysts and the bear case. Write under `## evidence`.

## 3. Risk — Risk Manager

Read `risk-limits.md` and live portfolio (or stated hypothetical equity in research mode). Size from stop distance and risk budget. `PASS` or `REJECT` with exact ticket fields under `## risk`.

Required ticket fields on PASS:

- product_id (e.g. `BTC-USD`)
- side (`BUY` / `SELL`)
- order type (`market` / `limit`)
- quote_size or base_size (Coinbase rules: market buy = quote_size)
- limit_price if limit
- stop / protection if required by limits
- risk USD and % of portfolio
- engagement level
- ticket expiry UTC
- preview summary if engagement is preview or live

## 4. Approval — user

Desk Lead posts the full ticket and asks for `approve CB-…`. "Yes" is not approval. Record the exact line and timestamp under `## approval`.

## 5. Execution — Execution Trader

Pre-send checklist in `desk-execution-protocol`. Preview first on live. One `create_order` with a new `client_order_id` recorded before the send. Write `## execution`.

## 6. Reconciliation — Execution Trader

`GET /orders/historical/{order_id}` and fills. Exchange numbers, not intent. `## reconciliation`.

## 7. Review — Trade Reviewer

Journal the day it happens. Grade process and outcome separately when it closes. Set `status: closed`.
