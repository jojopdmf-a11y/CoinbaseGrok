# Org assessment vs dual-venue plan

Updated: **2026-09-09T18:45:58Z**  
Question: is the current Crypto roster efficient under Cougar dual-venue rules, or should we lean out?

## Current Crypto seats (8 + floor)
| Seat | Dual-venue fit |
|------|----------------|
| Desk Lead | **Keep** — router, book.md law, synthesizes |
| Market Analyst | **Keep** — coin tape for briefs |
| Research Analyst | **Keep** — catalysts / news for briefs |
| Strategist | **Keep** — rules + backtests (main engine now) |
| Risk Manager | **Keep** — Schwab $100 / CB $15 caps, overlap checks |
| Trade Reviewer | **Keep (lighter)** — paper journal grades |
| Execution Trader | **Park / idle** — no live Coinbase sends; Schwab not automated here |
| Trading Floor | **Keep as channel** — not a worker; status board |

## Verdict (lean, not a purge)
For a **paper / prove-it** phase you do **not** need 8 active workers every day.

**Core loop (4):** Desk Lead · Strategist · Market · Research  
**On call (2):** Risk (size/caps) · Reviewer (end-of-week grades)  
**Idle until live:** Execution Trader  

Do **not** invent new bots for Schwab yet. Prefer one Strategist backtest skill + Desk Lead routing over a “Schwab Execution” seat.

**Do not hire a Sentiment Finder.** Research logs an optional `sent_score` on the metrics board. Market owns the daily board (`skills/metrics-board`). Active learning = walk `STRATEGY-QUEUE.md`, not a new seat watching the tape.

## Efficiency risks
- Fan-out to all 7 specialists for every idea = noise while Jeffrey wants reports not approvals
- Execution Trader waking on paper marks wastes compute
- Holding COO should stay orchestrator + reports, not a second Desk Lead

## Recommended operating mode (now)
1. COO sets game plan + weekly report
2. Desk Lead owns queue; only pings Strategist + Market/Research as needed
3. No approve requests to Jeffrey until a sleeve shows E>0 with honest fees and he asks to go live
