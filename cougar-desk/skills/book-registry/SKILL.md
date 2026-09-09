---
name: book-registry
description: Open-coin ledger. One coin, one sleeve. Update on fill, flatten, and skip.
---

# Book registry

File: `/workspace/cougar-trading-desk/book.md`

Update when:

- Risk PASSes a ticket (reserved row: `pending`)
- Execution reports a fill (`open`)
- Position is flat (`closed` — move to journal, delete the open row)
- A skip happens (append under Skips today)

Pending counts as **taken**. Two pending BTC tickets are a defect.

Desk Lead is the only editor. Execution reports fills; Lead writes the row.

Schwab `open` + `pending` A/B rows: notional sum ≤ **12000**, dollar-risk sum ≤ **200**, at most **two** rows with ~100 risk. Coinbase notionals do not count toward those caps but **do** occupy the coin (one coin, one place).
