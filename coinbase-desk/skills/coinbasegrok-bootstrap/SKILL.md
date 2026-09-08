---
name: coinbasegrok-bootstrap
description: Stand up CoinbaseGrok from SETUP.md. Opening Bell first. Read-only.
license: MIT
metadata:
  version: "0.1.0"
  category: bootstrap
---

# Bootstrap

Follow `/workspace/coinbase-desk/SETUP.md` from top to bottom.

First useful output is Opening Bell, not a form:

```bash
python3 /workspace/coinbase-desk/scripts/opening_bell.py --product ETH-USD
python3 /workspace/coinbase-desk/scripts/desk_doctor.py --desk-root /workspace/cb-trading-desk
```

Finish with the receipt SETUP.md asks for. Distinguish what you did from what the user must still do (Auto-review, CDP key, isolated portfolio).
