# Desk Hunt + CoinbaseGrok

Two things live here:

1. A briefing site of Grok Bot trading desks you can acquire.
2. **CoinbaseGrok** — a HyperGrok-style seven-agent pack that trades **Coinbase Advanced Trade** from Grok Bot.

HyperGrok cannot be configured for Coinbase. This pack is the venue adapter: CDP API keys, official order preview, a static sandbox, and `approve CB-…`.

## CoinbaseGrok (the desk)

```
coinbase-desk/
  SETUP.md          what Grok Bot follows
  agents/           seven profile cards + system prompts
  skills/           sixteen skills (coinbase-* and desk-*)
  scripts/          Opening Bell, desk doctor, gated preview/create
```

On the Grok Bot computer:

```text
Set up the CoinbaseGrok trading desk from /workspace/coinbase-desk/SETUP.md.
Follow that file from top to bottom, create the seven Bots and the Trading Floor
group chat, install the skills, and finish with the receipt it asks for.
```

Engagement: **research** (public market, no key) → **sandbox** (mocked JSON) → **preview** (live key, no rest) → **live** (isolated portfolio, View+Trade, Transfer off).

Read `coinbase-desk/SECURITY.md` before any key.

## Briefing site

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:47261](http://127.0.0.1:47261).

## License

MIT for this repo. HyperGrok's operating model is MIT © Galleon Labs — see `coinbase-desk/ATTRIBUTION.md`. Third-party Grok Bot share links stay under their authors' terms.
