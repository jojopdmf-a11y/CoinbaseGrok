# FAQ

**What do I get?**
Seven Bots, one Trading Floor, sixteen skills, a zero-key Opening Bell against Coinbase public market data, and a written way of working.

**Is this HyperGrok with a config flag?**
No. HyperGrok cannot trade Coinbase. This is the same operating model with a Coinbase Advanced venue layer.

**What do I need to start?**
Follow `SETUP.md`. Research mode needs no key.

**How does the desk trade?**
Through a CDP API key you create in the Coinbase Developer Portal, scoped to an isolated Advanced portfolio, View + Trade, Transfer off. The key is handed in through Grok Bot's secret store. Execution previews, then creates one order with a `client_order_id`, then reconciles from the exchange record.

**How do I approve?**
Type `approve CB-20260908-01` after seeing that exact ticket. Auto-review is the gate that actually holds.

**Can I use Coinbase MCP?**
Not as the supported path. Coinbase's remote MCP allowlists ChatGPT and Claude today, not Grok Bot. Use REST on the desk computer.

**Is the sandbox real play money?**
No. Coinbase Advanced sandbox is static mocked JSON. Use it to rehearse request shape and incident headers. Use **preview** on live keys before **live**.

**Can it withdraw?**
No. Transfer stays off. Withdrawals stay in the Coinbase app, with you.

**Does it work outside Grok Bot?**
Yes. Same agents and skills in Cursor or Grok Build. Approval model unchanged.

**Is this financial advice?**
No. You can lose the isolated portfolio.
