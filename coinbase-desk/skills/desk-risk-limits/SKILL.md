---
name: desk-risk-limits
description: Interview the user and write risk-limits.md. Size Coinbase Advanced tickets from live balances and stops.
license: MIT
metadata:
  version: "0.1.0"
  category: desk
---

# Risk limits

`/workspace/cb-trading-desk/risk-limits.md` changes only when the user says so in chat. The Risk Manager drafts; the user confirms.

## Interview

Ask and write:

- Isolated portfolio uuid or name
- Quote currency (`USD` or `USDC`)
- Max risk per trade as % of that portfolio's quote equity
- Max total open risk
- Max concurrent products
- Allowed product ids (start with `BTC-USD`, `ETH-USD`)
- Allowed order types (default: limit + market IOC)
- Whether US futures / intx perps are allowed (default: **no**)
- Daily loss stop after which the desk proposes nothing new
- Stops mandatory? (default: yes)
- Hard ceiling the desk will not let the user loosen past in a single message (recommend 2% per trade, 6% book)

## Sizing

For a long / buy with a stop:

```
risk_budget = equity * max_risk_pct
stop_distance = |entry - stop|
stressed = stop_distance + slippage_allowance + estimated_fees
size_quote = risk_budget * entry / stressed    # for a quote-sized market buy, convert carefully
```

Show the arithmetic. Use live `GET /accounts` or `portfolios` when a key exists. In research mode, use the hypothetical equity the user stated and label it hypothetical.

Round to `base_increment` / `quote_increment`. Reject under `base_min_size`.

## Hard refusals

- Transfer, withdraw, or send
- Product not on the allow list
- Futures/intx unless explicitly allowed
- Engagement below the action (no live create in preview mode)
- Missing stop when stops are mandatory
- Size that breaches a ceiling even if the user asks to "just this once" without first editing the limits file
