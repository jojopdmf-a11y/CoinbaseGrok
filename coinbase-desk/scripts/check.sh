#!/usr/bin/env bash
# Offline structural check. No network. No secrets.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

missing=0
expect=(
  SETUP.md README.md LICENSE ATTRIBUTION.md SECURITY.md
  agents/desk-lead.md agents/market-analyst.md agents/research-analyst.md
  agents/strategist.md agents/risk-manager.md agents/execution-trader.md
  agents/trade-reviewer.md
  skills/coinbasegrok-bootstrap/SKILL.md
  skills/coinbase-setup/SKILL.md
  skills/coinbase-market-data/SKILL.md
  skills/coinbase-account/SKILL.md
  skills/coinbase-orders/SKILL.md
  skills/coinbase-preview/SKILL.md
  skills/coinbase-sandbox/SKILL.md
  skills/coinbase-api-reference/SKILL.md
  skills/desk-operating-model/SKILL.md
  skills/desk-trade-lifecycle/SKILL.md
  skills/desk-risk-limits/SKILL.md
  skills/desk-execution-protocol/SKILL.md
  skills/desk-monitoring/SKILL.md
  skills/desk-post-trade-review/SKILL.md
  skills/desk-incident-response/SKILL.md
  skills/desk-strategy-lab/SKILL.md
  scripts/opening_bell.py
  scripts/desk_doctor.py
)
for path in "${expect[@]}"; do
  if [[ ! -f "$path" ]]; then
    echo "MISSING $path"
    missing=1
  fi
done

if grep -R --line-number --exclude=check.sh -E "HYPERLIQUID_PRIVATE_KEY|api.hyperliquid.xyz/exchange" agents skills scripts >/dev/null 2>&1; then
  echo "FAIL: Hyperliquid write-path leftovers in venue files"
  missing=1
fi

if [[ "$missing" -eq 0 ]]; then
  echo "check.sh PASS — CoinbaseGrok tree is intact"
  exit 0
fi
echo "check.sh FAIL"
exit 1
