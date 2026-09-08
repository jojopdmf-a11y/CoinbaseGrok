# CoinbaseGrok

**Turn your Grok Bot into a 7-agent Coinbase Advanced trading desk.**

Same floor as [HyperGrok](https://github.com/galleonlabs/hypergrok-trading-desk): research, risk, one writer, your approval by ticket id. Different venue. This pack talks to Coinbase Advanced Trade — not Hyperliquid.

Paste this repository into [Grok Bot](https://x.ai/bot) and tell any Bot:

> Set up the CoinbaseGrok trading desk from `/workspace/coinbase-desk/SETUP.md`. Follow that file from top to bottom, create the seven Bots and the Trading Floor group chat, install the skills, and finish with the receipt it asks for.

Fifteen minutes later you have a research-mode floor. Opening Bell hits Coinbase public market data. No key. No order.

## Why this exists

HyperGrok cannot be pointed at Coinbase. Its skills, tickets, and secret card are Hyperliquid agent wallets and `/exchange`. Coinbase Advanced uses CDP API keys (JWT), product ids like `BTC-USD`, official order preview, and a static sandbox. This pack is the venue adapter plus the same constitution.

## The floor

| Bot | Job | Writes the book |
| --- | --- | --- |
| Desk Lead | Routes the lifecycle | no |
| Market Analyst | Public and authenticated Coinbase books, trades, candles | no |
| Research Analyst | News, catalysts, Coinbase status, counter-evidence | no |
| Strategist | Rules, candle backtests, preview-only paper | no |
| Risk Manager | Written limits, live portfolio sizing, veto | no |
| Execution Trader | The only Bot that `POST`s `/orders` | **yes** |
| Trade Reviewer | Journal and grade, off-floor by DM | no |

Six sit on **Trading Floor**. The reviewer works by DM. Every trade:

```
idea → evidence → risk sign-off → approve CB-YYYYMMDD-NN → one send → reconcile → review
```

## Engagement levels

Recorded in `/workspace/cb-trading-desk/desk.md`. The desk never promotes itself.

1. **Research** — public `/market/*` only. Opening Bell. No key.
2. **Sandbox** — `https://api-sandbox.coinbase.com` static mocks, no auth. Rehearse order JSON and incidents.
3. **Preview** — live CDP key, `POST /orders/preview` only. Fees, slippage, and fill estimate. Nothing rests on the book.
4. **Live** — isolated Advanced portfolio, View + Trade, no Transfer. One send per approval.

## A day on the desk

**"Brief me on BTC-USD."** Market Analyst pulls last, mid, spread, 24h volume, and depth from public product + book endpoints, with UTC timestamps.

**"Buy $250 of BTC-USD, stop 4% under."** Desk Lead opens `CB-20260908-01`. Risk reads the isolated portfolio, sizes against `risk-limits.md`, and posts a ticket. You type `approve CB-20260908-01`. Execution runs preview, then one create with a fresh `client_order_id`, then reconciles from `GET /orders/historical/{id}` and fills. Reviewer journals it.

## What you need

- Grok Bot (eligible SuperGrok / Cursor plan)
- This repository on the shared computer
- For preview or live: a [CDP API key](https://portal.cdp.coinbase.com/) scoped to a **dedicated portfolio**, View + Trade, Transfer off
- Settings → General → Auto-review → Require Approval for financial actions and `POST /api/v3/brokerage/orders`

## Safety

- You approve every live send by ticket id. Auto-review is the gate; the chat phrase is the record.
- Secrets live in Grok Bot's secret store, never in chat.
- The desk does not withdraw, transfer between portfolios, or send onchain.
- Coinbase's sandbox is static and mocked. It proves the JSON shape, not your edge.
- Not financial advice. Spot and derivatives can lose the portfolio.

## Also in Cursor / Grok Build

Open this folder and treat `agents/` + `skills/` as the plugin. Run `/desk-operating-model`. The approval model does not change.

## Attribution

Operating model adapted from HyperGrok (Galleon Labs), MIT. See [ATTRIBUTION.md](ATTRIBUTION.md).
