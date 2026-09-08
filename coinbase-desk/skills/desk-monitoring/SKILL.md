---
name: desk-monitoring
description: Watches and routines for CoinbaseGrok. Reads and alerts only. Never sends.
license: MIT
metadata:
  version: "0.1.0"
  category: desk
---

# Monitoring

Routines may pull public product/book, authenticated open orders, and portfolio balances. They may draft a ticket. They may not create, cancel, or preview-as-a-trick-to-send.

Write watches under `/workspace/cb-trading-desk/watch/`. Each watch names the product, the condition, the source, and what happens if the feed is stale (alert `unavailable`, do not treat silence as "condition false").
