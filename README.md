# Desk Hunt + CoinbaseGrok

Two things live here:

1. A briefing site of Grok Bot trading desks you can acquire.
2. **CoinbaseGrok** — a HyperGrok-style seven-agent pack that trades **Coinbase Advanced Trade** from Grok Bot.
3. **Cougar dual-venue** — coin-level research routed to Coinbase 3R and/or Schwab ETFs (1× overnight + 2× flat-by-close) with a single open book so positions do not overlap.

HyperGrok cannot be configured for Coinbase. The Coinbase pack is the venue adapter: CDP API keys, official order preview, a static sandbox, and `approve CB-…`. Schwab fills (when live) use the Trader API and `approve SW-…` / `approve SW-DAY-…`.

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

## Cougar dual-venue (Coinbase + Schwab)

```
cougar-desk/
  INSTALL.md        what Desk Lead follows
  DESK-LEAD-PROMPT.md
  docs/SLEEVES.md   A = 1× overnight, B = 2× day, C = Coinbase 3R
  docs/OVERLAP.md   one coin, one place
  allowlists/       coin → IBIT/BITX/…
```

On the Grok Bot computer, after CoinbaseGrok exists:

```text
Install Cougar dual-venue rules from /workspace/cougar-desk/INSTALL.md.
```

Or paste `cougar-desk/DESK-LEAD-PROMPT.md`. Research briefs a **coin**; Desk Lead reads `book.md` and picks at most one instrument. Working files: `/workspace/cougar-trading-desk` (private).

## Briefing site

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:47261](http://127.0.0.1:47261).

## License

MIT for this repo. HyperGrok's operating model is MIT © Galleon Labs — see `coinbase-desk/ATTRIBUTION.md`. Third-party Grok Bot share links stay under their authors' terms.
