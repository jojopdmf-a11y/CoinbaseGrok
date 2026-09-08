export type AcquireMethod = "one-click" | "paste-in" | "repo";

export type Seat = {
  name: string;
  job: string;
  writesExchange: boolean;
};

export type Desk = {
  slug: string;
  rank: 1 | 2 | 3 | 4;
  callsign: string;
  name: string;
  creator: string;
  creatorHandle?: string;
  verdict: string;
  summary: string;
  whyCracked: string[];
  limits: string[];
  seats: Seat[];
  venue: string;
  crypto: "native" | "pointable" | "no";
  hftFit: string;
  acquireMethod: AcquireMethod;
  acquireLabel: string;
  acquireUrl?: string;
  fallback?: string;
  license: string;
  cost: string;
  deployMinutes: string;
  sources: { label: string; href: string }[];
  runbook: string[];
  firstMessage: string;
};

export const desks: Desk[] = [
  {
    slug: "coinbasegrok",
    rank: 1,
    callsign: "OURS",
    name: "CoinbaseGrok Trading Desk",
    creator: "This repo — HyperGrok model, Coinbase Advanced venue",
    verdict:
      "The adapter we are building. Same seven seats and ticket gate as HyperGrok. The writer talks to Coinbase Advanced Trade, not Hyperliquid.",
    summary:
      "Paste coinbase-desk/ into Grok Bot and follow SETUP.md. Research mode rings Opening Bell on public BTC-USD. Sandbox rehearses mocked orders. Preview uses a live CDP key without resting on the book. Live is an isolated portfolio, View+Trade, Transfer off, one send per approve CB-…",
    whyCracked: [
      "HyperGrok cannot be configured for Coinbase. This pack replaces the venue layer instead of lying about a switch.",
      "Four engagement levels: research, static sandbox, official order preview, then live.",
      "Opening Bell and desk doctor are zero-key and were checked against live public Coinbase market data.",
      "create_order.py refuses unless desk.md says live and you pass --i-understand-this-is-live.",
      "Tickets are CB-YYYYMMDD-NN. Auto-review on POST /orders is the gate.",
    ],
    limits: [
      "v0.1 — first slice. No public x.ai share link yet. You paste SETUP.md into Grok Bot.",
      "Coinbase remote MCP is not the supported Grok Bot path (allowlist is ChatGPT/Claude today).",
      "Sandbox fills are mocks. Preview is the real rehearsal on live books.",
      "Spot-first. US futures / intx stay off unless you edit risk-limits.md.",
    ],
    seats: [
      { name: "Desk Lead", job: "Routes the Coinbase floor", writesExchange: false },
      { name: "Market Analyst", job: "Public product, book, candles", writesExchange: false },
      { name: "Research Analyst", job: "News, catalysts, counter-evidence", writesExchange: false },
      { name: "Strategist", job: "Rules, candles, preview paper", writesExchange: false },
      { name: "Risk Manager", job: "Isolated portfolio sizing and veto", writesExchange: false },
      { name: "Execution Trader", job: "Only writer. Preview, one create, reconcile", writesExchange: true },
      { name: "Trade Reviewer", job: "Journal, off-floor", writesExchange: false },
    ],
    venue: "Coinbase Advanced Trade (spot first)",
    crypto: "native",
    hftFit:
      "Same honesty as HyperGrok: session desk, not colocated HFT. Coinbase preview + IOC market orders are the fast primitives.",
    acquireMethod: "repo",
    acquireLabel: "Open the Grok Bot runbook",
    license: "MIT (HyperGrok operating model attributed)",
    cost: "Free pack. Needs Grok Bot plus a CDP key for preview/live.",
    deployMinutes: "About 15 minutes to a research-mode floor",
    sources: [
      { label: "Pack in this repo", href: "/desks/coinbasegrok" },
      { label: "SETUP.md", href: "https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/overview" },
      { label: "Coinbase Advanced Trade docs", href: "https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/overview" },
      { label: "HyperGrok (model source)", href: "https://github.com/galleonlabs/hypergrok-trading-desk" },
    ],
    runbook: [
      "Copy coinbase-desk/ onto the Grok Bot computer as /workspace/coinbase-desk.",
      "Tell any Bot to follow /workspace/coinbase-desk/SETUP.md from top to bottom.",
      "Watch Opening Bell on BTC-USD. Confirm it says read-only and not a signal.",
      "Set Auto-review Require Approval for financial actions and POST /api/v3/brokerage/orders.",
      "Stay in research. Then sandbox (mocked JSON). Then a View+Trade CDP key scoped to an isolated portfolio, Transfer off, preview only.",
      "Write risk-limits.md with the Risk Manager before any live create.",
      "Live: type approve CB-… after a current preview. One client_order_id. No blind retry.",
    ],
    firstMessage:
      "Set up the CoinbaseGrok trading desk from /workspace/coinbase-desk/SETUP.md. Follow that file from top to bottom, create the seven Bots and the Trading Floor group chat, install the skills, and finish with the receipt it asks for. Stay read-only: no CDP key, no order.",
  },
  {
    slug: "hypergrok",
    rank: 2,
    callsign: "ALPHA",
    name: "HyperGrok Trading Desk",
    creator: "Andrew Wilkinson / Galleon Labs",
    creatorHandle: "galleonlabs",
    verdict:
      "The only complete crypto trading team you can acquire today. Seven named seats, seventeen reviewed skills, a ticketed lifecycle, and a live Hyperliquid wire.",
    summary:
      "Paste one share link into Grok Bot, send “Start the desk,” and you get research, risk, execution, and review as separate Bots on a Hyperliquid floor. Closest thing the Grok Bot scene has built to a prop desk — and the only one that is both crypto-native and MIT-licensed.",
    whyCracked: [
      "Seven specialist Bots with written job cards, not one Bot pretending to be a desk.",
      "Seventeen version-pinned skills: Hyperliquid market data, account, IOC/limit/TP-SL, TWAP, dead-man’s switch, WebSocket watches, incident playbooks.",
      "Every send is one approved ticket (approve HG-YYYYMMDD-NN). The enforcing gate is Grok Bot Auto-review, not a chat vibe.",
      "Trade-only API wallet in the secret store. It can trade. It cannot withdraw.",
      "Research → testnet → mainnet. Opening Bell and desk doctor are read-only public /info checks.",
      "Same pack installs as a Cursor / Grok Build / Claude Code plugin if you want the skills without the Grok Bot roster.",
    ],
    limits: [
      "This is a discretionary perp desk with human approval, not a colocated matching-engine HFT stack.",
      "Grok Bot group chats hold six Bots; Trade Reviewer sits off-floor by DM.",
      "Ideas come from you. The Strategist tests them. The desk does not invent a profitable strategy.",
      "Third-party template. SpaceXAI does not endorse it. Review skills before any mainnet key.",
    ],
    seats: [
      { name: "Desk Lead", job: "Routes the floor and keeps the lifecycle honest", writesExchange: false },
      { name: "Market Analyst", job: "Live mid, depth, funding, OI, candles — timestamped", writesExchange: false },
      { name: "Research Analyst", job: "Fundamentals, news, catalysts, onchain and social", writesExchange: false },
      { name: "Strategist", job: "Rules, Hyperliquid backtests, testnet paper", writesExchange: false },
      { name: "Risk Manager", job: "Written limits, live sizing, veto", writesExchange: false },
      { name: "Execution Trader", job: "Only writer. One send per approval. Reconciles by cloid", writesExchange: true },
      { name: "Trade Reviewer", job: "Journal and grade process vs outcome, off-floor", writesExchange: false },
    ],
    venue: "Hyperliquid perps (and spot)",
    crypto: "native",
    hftFit:
      "Fast discretionary, not HFT. Has IOC, TWAP, WebSocket watches, depth-aware sizing, and a dead-man’s switch — the execution primitives of a modern crypto desk. LLM + cloud VM latency and a human ticket gate make microsecond HFT impossible.",
    acquireMethod: "one-click",
    acquireLabel: "Add HyperGrok Desk Lead",
    acquireUrl: "https://x.ai/bot/PReCwAHq8Vgeex50r883H",
    fallback:
      "If the share page is down, tell any Bot: Set up the HyperGrok trading desk from https://github.com/galleonlabs/hypergrok-trading-desk/blob/v1.4.3/skills/hypergrok-bootstrap/SKILL.md",
    license: "MIT (retain copyright notice)",
    cost: "Free template. Needs an eligible Grok Bot / Cursor plan. Hyperliquid testnet faucet before mainnet.",
    deployMinutes: "About 15 minutes to a research-mode floor",
    sources: [
      { label: "Public Grok Bot template", href: "https://x.ai/bot/PReCwAHq8Vgeex50r883H" },
      { label: "GitHub — galleonlabs/hypergrok-trading-desk", href: "https://github.com/galleonlabs/hypergrok-trading-desk" },
      { label: "SETUP.md runbook", href: "https://github.com/galleonlabs/hypergrok-trading-desk/blob/main/SETUP.md" },
      { label: "FAQ", href: "https://github.com/galleonlabs/hypergrok-trading-desk/blob/main/docs/FAQ.md" },
      { label: "botdirectory listing", href: "https://botdirectory.ai/bots/hypergrok-trading-desk/" },
    ],
    runbook: [
      "Open the official share page and press Add to Grok Bot. Inspect skills and routines before confirming.",
      "Send HyperGrok Desk Lead exactly: Start the desk.",
      "Watch Opening Bell (ETH by default) and desk doctor. Both are read-only public /info. No wallet yet.",
      "Set Settings → General → Auto-review: Require Approval for financial actions and any Hyperliquid /exchange call.",
      "Stay in research mode until you like the briefs. Then add a testnet API wallet through the secret store.",
      "Write risk-limits.md with the Risk Manager (max risk per trade, book risk, leverage, daily loss stop, allowed markets).",
      "Rehearse one full ticket on testnet: idea → evidence → PASS → approve HG-… → one send → reconcile → review.",
      "Only then consider a mainnet trade-only agent wallet. Never paste a main-wallet key or a seed.",
    ],
    firstMessage: "Start the desk.",
  },
  {
    slug: "floor-chief",
    rank: 3,
    callsign: "FLOOR",
    name: "Trading Floor Chief",
    creator: "Игорь / Grok Hub",
    creatorHandle: "Grok_Hub_IO",
    verdict:
      "The community’s trading-floor operating system. One-click Chief of Staff that routes a six-agent pit and wakes you only for decisions. It does not trade.",
    summary:
      "Shared by Grok Hub on 30 Aug 2026, days after template sharing shipped. This is the seat the serious multi-bot people use when they already have specialists — or when they want the Chief to spawn them. Pair it with HyperGrok seats if you want crypto writes. Alone, it is a floor, not a book.",
    whyCracked: [
      "One-click x.ai share. Preview is live. Adding creates an independent copy on your account.",
      "Written mandate: route work to six agents, check handoffs, wake the desk owner only for decisions.",
      "Hard rule printed on the template: Does not trade. That is a feature. The Chief never holds keys.",
      "Matches how cracked Grok Bot users actually work — one front door, specialists on the shared computer, files not chat as the handoff.",
      "You can point the six seats at crypto (scanner, whale, research, risk, exec, review) without inheriting someone else’s strategy.",
    ],
    limits: [
      "The public template is the Chief only. The six agents are not bundled as six extra share links.",
      "No Hyperliquid skills, no broker adapter, no ticket format out of the box.",
      "You must write or import specialist Bots (HyperGrok agents are the obvious crypto pack).",
      "Third-party. Review the configuration. Shared-computer risk still applies.",
    ],
    seats: [
      { name: "Trading Floor Chief", job: "Front door, routing, handoff QA, human escalation", writesExchange: false },
      { name: "Seat 2–7 (you staff)", job: "Chief expects a six-agent floor; you name the specialists", writesExchange: false },
    ],
    venue: "Venue-agnostic. Staff it for Hyperliquid, CEX, or research-only.",
    crypto: "pointable",
    hftFit:
      "None by itself. It is an ops layer. If you staff an Execution Trader underneath, you still have Grok Bot latency and should keep a human gate.",
    acquireMethod: "one-click",
    acquireLabel: "Add Trading Floor Chief",
    acquireUrl: "https://x.ai/bot/we_JMJA8IuOvy1eUX6EQz",
    license: "Third-party Grok Bot template (no redistribution without creator permission)",
    cost: "Free template. Your Grok Bot usage only.",
    deployMinutes: "Two minutes to add the Chief; an afternoon to staff the floor",
    sources: [
      { label: "Public Grok Bot template", href: "https://x.ai/bot/we_JMJA8IuOvy1eUX6EQz" },
      { label: "botdirectory listing", href: "https://botdirectory.ai/bots/trading-floor-chief/" },
      { label: "Source post — @Grok_Hub_IO", href: "https://x.com/Grok_Hub_IO/status/2093839282452693297" },
    ],
    runbook: [
      "Open https://x.ai/bot/we_JMJA8IuOvy1eUX6EQz and read the preview. Confirm it still says it does not trade.",
      "Add to Grok Bot. Review skills, routines, and memories inside the app before enabling anything scheduled.",
      "Tell the Chief the six seats you want. For crypto, reuse HyperGrok’s job cards: Market, Research, Strategist, Risk, Execution, Reviewer.",
      "Create a group chat named Trading Floor with the Chief plus five specialists (six-Bot cap). Keep the reviewer off-floor.",
      "Write a one-page operating model in /workspace/trading-desk/desk.md: who owns research, who may propose, who may write the exchange.",
      "Do not give this Bot exchange credentials. Keys live only on the Execution Trader, in the secret store.",
    ],
    firstMessage:
      "You run my trading floor. Do not trade. Staff six specialist seats from the HyperGrok job cards if I have that repo, otherwise ask me for names and mandates. Wake me only for decisions.",
  },
  {
    slug: "roundtable",
    rank: 4,
    callsign: "TAPE",
    name: "Roundtable Dual Desk",
    creator: "RoundtableSpace",
    creatorHandle: "RoundtableSpace",
    verdict:
      "The most HFT-shaped pair on the public boards: a morning research factory and a session execution desk that gates on latency, slippage, and partial fills.",
    summary:
      "Not a share link — a two-prompt pack published 28 Aug 2026. Alpha Research Desk ranks signals by 6 AM ET. Trade Execution and Risk Desk reads that tape during market hours and will not touch the book until you see the full risk check. Point the broker question at Hyperliquid or any crypto venue. This is the systematic lane.",
    whyCracked: [
      "Two Bots, clean seam: research writes a ranked tape to Google Drive; execution only reads that tape.",
      "Execution prompt names the things HFT desks actually argue about: liquidity, concentration, slippage, latency, partial fills.",
      "Walk-forward and regime-robustness checks are in the research mandate, not a vibes backtest.",
      "Paper-trading dry run is required before live. Orders stay held for explicit approval until you say otherwise.",
      "Full prompts are public on botdirectory.ai. No mystery binary. You can audit every line before paste.",
      "Venue-agnostic — the only acquirable pack that will talk to a crypto book without being Hyperliquid-only.",
    ],
    limits: [
      "Prompt-style, not a packaged Grok Bot template. You paste into Create Bot / Edit Profile.",
      "No Hyperliquid SDK, no ticket IDs, no reviewed skill hashes. You bring the broker connection.",
      "Google Drive is the handoff. If you refuse Drive, rewrite the seam to /workspace files.",
      "X source post is the provenance. Treat it as community, not a vendor SLA.",
    ],
    seats: [
      { name: "Alpha Research Desk", job: "Universe, strategies, walk-forward, ranked tape by 6 AM ET", writesExchange: false },
      { name: "Trade Execution and Risk Desk", job: "Session orders, latency/slippage/partial-fill gates", writesExchange: true },
    ],
    venue: "You name the broker. Crypto-capable if you connect a crypto venue.",
    crypto: "pointable",
    hftFit:
      "Language is the closest to an HFT / systematic execution desk. Still not colocated HFT. Use it for session-scale crypto (minutes to hours), never for queue-priority games.",
    acquireMethod: "paste-in",
    acquireLabel: "Copy both install prompts",
    license: "Public prompt listing on botdirectory.ai",
    cost: "Free prompts. Google Drive (or rewrite to files). Broker of your choice.",
    deployMinutes: "Ten minutes to stand both Bots; a week to trust the tape",
    sources: [
      { label: "Alpha Research Desk", href: "https://botdirectory.ai/bots/alpha-research-desk/" },
      { label: "Trade Execution and Risk Desk", href: "https://botdirectory.ai/bots/trade-execution-and-risk-desk/" },
      { label: "Source post — @RoundtableSpace", href: "https://x.com/RoundtableSpace/status/2093175487699066994" },
    ],
    runbook: [
      "Create Bot #1. Name it Alpha Research Desk. Paste the research prompt from this dossier. Connect X and Google Drive (or say you will use /workspace/tape instead).",
      "Answer its interview: assets, markets, holding periods, data sources, risk constraints, metrics. For crypto, start with a short perp universe (ETH, BTC, SOL) and 4h–1d holds.",
      "Watch the first research run. Do not schedule 6 AM until you have seen one ranked tape with assumptions and validation, not a headline Sharpe.",
      "Create Bot #2. Name it Trade Execution and Risk Desk. Paste the execution prompt. Point the broker question at Hyperliquid testnet or your paper venue.",
      "First session is a paper dry run. It must show every proposed order plus the complete risk check (limits, liquidity, concentration, slippage, latency, partial fills).",
      "Keep Auto-review Require Approval on every financial action. Do not tell it “until I say otherwise” until you have a week of clean paper.",
    ],
    firstMessage:
      "Handle a daily research run when I ask, in your own dedicated chat. Walk me through connecting X and Google Drive, then configure it: monitor the investment universe and relevant macro and company information, generate and explain candidate strategies, backtest them, run walk-forward and regime-robustness checks, and save a ranked list of trade signals with assumptions, risks, and validation results to Google Drive by 6 AM ET each trading day. Ask me which assets, markets, holding periods, data sources, risk constraints, and evaluation metrics matter, do the first research run with me watching, then save it.",
  },
];

export const executionPrompt = `Review and execute approved trade signals during market hours, in your own dedicated chat. Walk me through connecting Google Drive and my broker connection, then configure it: read the latest ranked signals, check position limits, liquidity, concentration, exposure, slippage, latency, and partial-fill scenarios, prepare an order plan, and track fills and risk against the approved plan. Show me every proposed order and the complete risk check before it touches the market, and hold all orders for my explicit approval until I say otherwise. Ask me which broker, instruments, sizing rules, maximum loss, trading hours, and emergency stop conditions to use, perform the first session as a paper-trading dry run with me watching, then save it.`;

export const runnersUp = [
  {
    name: "Trading — Travis Weathers",
    href: "https://x.ai/bot/XW2DibYh5BRunhH_f373u",
    note: "One-click. News-driven day trader for a live brokerage book. One liquid large/mid-cap at a time. Equities, single Bot, not a team. Early-community template (30 Aug 2026).",
  },
  {
    name: "Fenrir — Shantanu Goel",
    href: "https://x.ai/bot/FReKiR82_-lF359lhshpR",
    note: "One-click paper pit. NSE or NASDAQ, live session room, optional public board. Rehearsal theater, not crypto, not live capital.",
  },
  {
    name: "Grok Research — jaredtrichard",
    href: "https://github.com/jaredtrichard/grok-research",
    note: "MIT paste-in equity research factory. Firstmate + persistent sector/name researchers, sqlite book. No live trades. Tell a Bot: follow https://github.com/jaredtrichard/grok-research/blob/main/GROK_RESEARCH.md",
  },
  {
    name: "eToro strategy swarm — yoniassia",
    href: "https://botdirectory.ai/bots/asset-allocator/",
    note: "Prompt pair: Asset Allocator (capital/risk budgets, kill switches) + eToro Trading Bot. Multi-strategy ops, not crypto-native.",
  },
];

export const huntNotes = {
  scanned: [
    "botdirectory.ai trading/crypto/hyperliquid indexes (9 trading listings, 4 crypto listings)",
    "galleonlabs/hypergrok-trading-desk v1.4.3 README, SETUP, FAQ — live share https://x.ai/bot/PReCwAHq8Vgeex50r883H",
    "grokbottemplates.dev money category (24 listings)",
    "majiayu000/awesome-grok-bot and RongleCat/awesome-grok-bot",
    "usegrokbot.com research/use-case writeups of 5-agent and 10-bot desks",
    "x.ai public previews for HyperGrok, Floor Chief, Travis Trading, Fenrir",
    "Whales Market and AI Builder Club template mechanics",
  ],
  notFound:
    "No Grok Bot template offers colocated or microsecond HFT. Viral “six agents trading while you sleep” posts and 68.4% win-rate PDFs are unverified; Crypto Briefing flagged fabricated screenshots on a related Claude PDF. Memecoin “RUG CHECK / SNIPER / WHALE WATCH / EXIT DESK” writeups exist as anecdotes, not acquirable share links.",
};

export function getDesk(slug: string) {
  return desks.find((d) => d.slug === slug);
}

export const builtDesk = desks.find((desk) => desk.slug === "coinbasegrok");
export const communityDesks = desks.filter((desk) => desk.slug !== "coinbasegrok");
