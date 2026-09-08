# Desk Hunt

A headhunt dossier of **Grok Bot** trading teams you can actually acquire and deploy.

Grok Bot (SpaceXAI / Cursor, launched 11 Aug 2026) is an always-on teammate with a shared cloud computer. People have been standing up multi-bot trading floors since week one. Most of what you see on X is a screenshot and a PnL claim. This repo is the three options that have a live share link, a public repo, or a full install prompt — checked on 8 Sep 2026.

## The shortlist

| Rank | Desk | How you acquire it |
| --- | --- | --- |
| 1 | **HyperGrok Trading Desk** (Galleon Labs) | [Add to Grok Bot](https://x.ai/bot/PReCwAHq8Vgeex50r883H) · [MIT repo](https://github.com/galleonlabs/hypergrok-trading-desk) |
| 2 | **Trading Floor Chief** (Grok Hub / Игорь) | [Add to Grok Bot](https://x.ai/bot/we_JMJA8IuOvy1eUX6EQz) |
| 3 | **Roundtable Dual Desk** | Paste the two prompts from the dossier (also on [botdirectory](https://botdirectory.ai/bots/alpha-research-desk/)) |

HyperGrok is the only crypto-native seven-agent floor. Floor Chief is the ops seat that never holds keys. Roundtable is the systematic pair that talks about latency, slippage, and partial fills.

**There is no Grok Bot HFT product.** Cloud VM + LLM + human ticket approval is a discretionary or session desk, not a colocated matching engine.

## Run this briefing

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:47261](http://127.0.0.1:47261).

## Deploy a desk (not this site)

1. You need the Grok Bot app and an eligible SuperGrok / Cursor plan.
2. Open the share link (or paste the prompt) from the shortlist.
3. Inspect skills and routines. Enable **Settings → General → Auto-review → Require Approval** for financial actions.
4. Research or paper first. Trade-only API wallets only. Never paste a seed or a main-wallet key.

This site is a briefing. It does not trade, hold keys, or talk to an exchange.

## Stack

Next.js, TypeScript, Tailwind, shadcn/ui.

## License

MIT for this dossier. Third-party templates stay under their authors’ terms (HyperGrok is MIT; Grok Bot share links forbid redistribution without the creator’s permission).
