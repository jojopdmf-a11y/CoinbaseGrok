# Security

This desk can lose money. It cannot be allowed to move money off Coinbase.

## Keys

- Create a **dedicated Advanced portfolio**. Fund it with only what you will risk.
- Create a CDP API key scoped to that portfolio.
- Enable **View** and **Trade**. Never enable **Transfer**. Transfer is not a withdrawal to an external address, but it still moves funds between portfolios. This desk does not transfer.
- Opt out of IP allowlisting only if the Grok Bot cloud computer has no stable egress IP. Prefer allowlisting if Coinbase or Cursor later publish one.
- Put `COINBASE_API_KEY_NAME` and `COINBASE_API_PRIVATE_KEY` in Grok Bot's secure secret store. Never paste them into chat, skills, `desk.md`, or git.
- Scripts read secrets from the environment and never print them.
- Rotate the key if it ever appears in a transcript.

## Shared computer

Every Bot on the account shares one cloud computer. A Bot that is not the Execution Trader can still see files. That is why:

- Secrets stay in the secret store, not `/workspace`.
- Only the Execution Trader is allowed to call write endpoints.
- Grok Bot Auto-review **Require Approval** covers financial actions and any `POST` to `/api/v3/brokerage/orders`.

## What the desk will not do

Withdraw, send onchain, create addresses, enable Transfer, convert as a way to move value off the book, or trade from the Primary portfolio if an isolated agent portfolio exists.

## Incidents

If a send times out: do not resend. Reconcile by `client_order_id`. Follow `desk-incident-response`.
