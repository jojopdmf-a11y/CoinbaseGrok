"""Thin Coinbase Advanced REST helper.

Secrets come from the environment. This module never prints them.
Install: python3 -m pip install coinbase-advanced-py
"""

from __future__ import annotations

import os
from typing import Any


REQUIRED = ("COINBASE_API_KEY_NAME", "COINBASE_API_PRIVATE_KEY")


def env_ready() -> tuple[bool, str]:
    missing = [name for name in REQUIRED if not os.environ.get(name)]
    if missing:
        return False, "missing " + ", ".join(missing) + " in the secret store / environment"
    return True, "key name present"


def client():
    ready, detail = env_ready()
    if not ready:
        raise RuntimeError(detail)
    try:
        from coinbase.rest import RESTClient
    except ImportError as exc:
        raise RuntimeError(
            "coinbase-advanced-py is not installed. "
            "Run: python3 -m pip install coinbase-advanced-py"
        ) from exc
    return RESTClient(
        api_key=os.environ["COINBASE_API_KEY_NAME"],
        api_secret=os.environ["COINBASE_API_PRIVATE_KEY"],
    )


def as_dict(payload: Any) -> dict:
    if hasattr(payload, "to_dict"):
        return payload.to_dict()
    if isinstance(payload, dict):
        return payload
    return {"repr": repr(payload)}
