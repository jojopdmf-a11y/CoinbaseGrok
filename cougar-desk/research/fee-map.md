# Coinbase Advanced fee map (research only)

Updated: **2026-09-09T18:33:24Z**  
Engagement: research / local paper — **no** `POST /orders`.  
Sources: Advanced Trade fee UI (J.j.); authenticated `get_transaction_summary` + `orders/preview` via CDP View key.

## Account snapshot (API `transaction_summary`)

| Field | Value |
|-------|-------|
| pricing_tier | **Intro 1** |
| maker_fee_rate | **0.006** (0.600%) |
| taker_fee_rate | **0.012** (1.200%) |
| total_balance | **$1,004.03** |
| advanced_trade_only_volume (30d) | **0** |
| advanced_trade_only_fees | **0** |
| next tier | **Intro 2** at **$10,000** 30d volume (maker 0.4% / taker 0.8%) |
| has_promo_fee | false |

UI screenshot matched API. Paper **maker+maker RT = 1.20%**. Taker+taker RT = **2.40%**.

## Product preview table ($350 notional)

Method: limit GTC near mid; **BUY + SELL** preview each. Fee = `commission_total` from preview.  
Implied RT % = (buy_fee + sell_fee) / 350 × 100.

### A) Non-post-only limits (`post_only=false`) — taker-priced

| product | buy fee $ | sell fee $ | implied RT % | keep/drop |
|---------|----------:|-----------:|-------------:|-----------|
| BTC-USD | 4.1958 | 4.2042 | **2.4000** | keep |
| BTC-USDC | 4.1958 | 4.2042 | **2.4000** | keep |
| ETH-USD | 4.1958 | 4.2042 | **2.4000** | keep |
| ETH-USDC | 4.1958 | 4.2042 | **2.4000** | keep |
| SOL-USD | 4.1955 | 4.2041 | **2.3999** | keep |
| USDC-USD | — | — | — | **drop** (404) |

### B) Post-only limits (`post_only=true`) — maker-priced

| product | buy fee $ | sell fee $ | implied RT % | keep/drop |
|---------|----------:|-----------:|-------------:|-----------|
| BTC-USD | 2.0895 | 2.1105 | **1.2000** | keep |
| BTC-USDC | 2.0895 | 2.1105 | **1.2000** | keep |
| ETH-USD | 2.0895 | 2.1105 | **1.2000** | keep |
| ETH-USDC | 2.0895 | 2.1105 | **1.2000** | keep |
| SOL-USD | 2.0895 | 2.1103 | **1.1999** | keep |
| USDC-USD | — | — | — | **drop** |

## Allowlist
**Cheapest bucket = post-only / maker path ≈ 1.20% RT:** `BTC-USD`, `BTC-USDC`, `ETH-USD`, `ETH-USDC`, `SOL-USD`

- **No product is cheaper than another** at Intro 1. **Do not invent a BTC discount.**
- Overnight v19 @ 0.4% RT diagnostic is **not** this account.
- v3R-60 FAIL @ 1.2% stands under API-confirmed Intro 1 maker+maker.
