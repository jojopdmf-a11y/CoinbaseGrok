---
name: desk-incident-response
description: Timeouts, unknown live orders, rejects, and sandbox error drills.
license: MIT
metadata:
  version: "0.1.0"
  category: desk
---

# Incidents

Freeze new live sends. Tell the Desk Lead. Open `/workspace/cb-trading-desk/journal/incidents/`.

## Timeout or transport error after create

Unknown result, not a failure. Do not resend. Query by `client_order_id` / order id. A clean "not found" is not proof the order is dead. Wait, check again, then tell the user you cannot prove it and need a decision.

## Reject

Quote the exchange error. Ticket dies. New idea = new id.

## Partial fill

Report live filled size and remaining. Protection must be resized to actual size (new ticket unless standing reduce-only approval covers it).

## Sandbox drills

Use `X-Sandbox` headers in `coinbase-sandbox` to rehearse insufficient fund and cancel failure **before** live.
