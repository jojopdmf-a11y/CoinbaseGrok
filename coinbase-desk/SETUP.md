# Set up the CoinbaseGrok trading desk

You are a Grok Bot building the user's **Coinbase Advanced** trading desk from this repository. Follow this file top to bottom. When you finish, the user has seven specialist Bots (six on a **Trading Floor** group chat, one reviewer by DM), sixteen shared skills, a prepared desk computer, and a written desk record. Setup is read-only: no CDP key requested, no order created.

If this repository is already on the computer at `/workspace/coinbase-desk`, use it. Do not clone HyperGrok. HyperGrok is a different venue.

## 1. Confirm the pack is on the computer

```bash
ls /workspace/coinbase-desk/agents /workspace/coinbase-desk/skills
bash /workspace/coinbase-desk/scripts/check.sh
```

If the tree is missing, copy this repository to `/workspace/coinbase-desk` from the conversation attachment or the user's git remote. Do not unpack an unverified random tarball and call it a desk.

Record `git rev-parse HEAD` if this folder is a git checkout. It goes into `desk.md` as `instructions commit`.

## 2. Read the desk

Read these before creating anything:

1. `docs/ARCHITECTURE.md`
2. `skills/desk-operating-model/SKILL.md` and `skills/coinbasegrok-bootstrap/SKILL.md`
3. All seven files in `agents/`
4. `skills/README.md`
5. `SECURITY.md`

## 3. Prepare the computer (read-only)

```bash
mkdir -p /workspace/cb-trading-desk/{proposals,briefs,research,strategies,data,journal/incidents,watch}
cd /workspace/coinbase-desk
python3 scripts/opening_bell.py --product BTC-USD
python3 scripts/desk_doctor.py --desk-root /workspace/cb-trading-desk
```

Show Opening Bell to the user. It must say it is not a trading signal. A missing `desk.md` warning from the doctor is expected until section 8.

## 4. Create the Bots

| File | Name | Job |
| --- | --- | --- |
| `agents/desk-lead.md` | Desk Lead | Head of the Coinbase Advanced trading desk |
| `agents/market-analyst.md` | Market Analyst | Coinbase Advanced market data and microstructure |
| `agents/research-analyst.md` | Research Analyst | Fundamentals, news and catalyst research |
| `agents/strategist.md` | Strategist | Strategy design and testing partner |
| `agents/risk-manager.md` | Risk Manager | Risk limits, position sizing and book oversight |
| `agents/execution-trader.md` | Execution Trader | Order execution on Coinbase Advanced |
| `agents/trade-reviewer.md` | Trade Reviewer | Desk journal and post-trade review |

For each Bot: Name, Job, and Description from the profile card, verbatim. Then send the System prompt as the first message, prefixed with: "These are your standing instructions. Confirm you have read them and state your job in one sentence." Tell it to re-read `/workspace/coinbase-desk/agents/<file>.md` when unsure.

If you cannot create Bots, give the user the seven profile cards as copy-paste blocks and wait until they exist. Seven Bots, not one.

## 5. Install the skills

Skills are shared across the account. Do not duplicate a matching skill.

Install these sixteen names:

- Bootstrap: `coinbasegrok-bootstrap`
- Coinbase: `coinbase-setup`, `coinbase-market-data`, `coinbase-account`, `coinbase-orders`, `coinbase-preview`, `coinbase-sandbox`, `coinbase-api-reference`
- Desk: `desk-operating-model`, `desk-trade-lifecycle`, `desk-risk-limits`, `desk-execution-protocol`, `desk-monitoring`, `desk-post-trade-review`, `desk-incident-response`, `desk-strategy-lab`

Any Bot may read any skill. Only the Execution Trader acts on write paths in `coinbase-orders`.

## 6. Create the Trading Floor

Group chat **Trading Floor** with: Desk Lead, Market Analyst, Research Analyst, Strategist, Risk Manager, Execution Trader. Trade Reviewer stays off-floor.

First message:

> Welcome to the Trading Floor. This desk trades Coinbase Advanced Trade only. Desk Lead routes; Market and Research bring evidence; Strategist tests the user's ideas; Risk sizes and can refuse; Execution Trader is the one Bot that posts orders, on a ticket the user approved by id. Rules: `/workspace/coinbase-desk/skills/desk-operating-model/SKILL.md`. Today is setup: nothing goes to Coinbase.

## 7. Approvals

Ask the user to open **Settings → General → Auto-review** and add **Require Approval** for financial actions and for any command that `POST`s `https://api.coinbase.com/api/v3/brokerage/orders` or the sandbox host. Require Approval wins over Always Allow.

Then ask: **may the desk place a reduce-only protective stop on an unprotected position without waiting for a new approval?** Record the answer under `standing approvals` in `desk.md`. Default recommendation: yes for reduce-only protection, never for opens.

## 8. Write the desk record

Ask:

1. Engagement level: **research**, **sandbox**, **preview**, or **live** (research unless they insist).
2. If preview or live: isolated portfolio name/uuid they will scope the CDP key to, or `none` yet.

Write `/workspace/cb-trading-desk/desk.md`:

```markdown
# Desk record

- created: <UTC>
- instructions commit: <sha or "working tree">
- venue: coinbase-advanced
- engagement level: research
- portfolio: none
- bots: Desk Lead, Market Analyst, Research Analyst, Strategist, Risk Manager, Execution Trader, Trade Reviewer
- group chats: Trading Floor (6)
- risk limits: not yet written
- standing approvals: none
- unprotected position deadline: 15m
- status: research-only until a View+Trade CDP key is provisioned in the secret store
```

Hand Risk Manager the `desk-risk-limits` interview.

## 9. Verify (read-only)

```bash
cd /workspace/coinbase-desk
python3 scripts/desk_doctor.py --desk-root /workspace/cb-trading-desk
python3 scripts/opening_bell.py --product ETH-USD
```

Then:

1. "@Market Analyst brief us on BTC-USD." Timestamped public sources.
2. "@Risk Manager assuming 10,000 USD quote and current limits, size a hypothetical BTC-USD buy with a 2% stop." PASS or REJECT, nothing sent.
3. "@Execution Trader what would you need before sending that ticket?" Pre-send checklist; refusal without `approve CB-…`.
4. DM Trade Reviewer: "Open today's journal and record that the Coinbase desk was set up."
5. Ask Research Analyst for one sourced fact about Coinbase Advanced Trade API (preview vs create).

## 10. Receipt

Give the user: the seven Bots, skill install method, Trading Floor members, desk record, doctor + Opening Bell, the five checks, and confirmation that setup stayed read-only.

Then: "The desk is ready. Ask the Desk Lead for a BTC-USD brief. When you want to rehearse order JSON, say 'set up sandbox'. When you want live preview, say 'set up a CDP key for preview'."
