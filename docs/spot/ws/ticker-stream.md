---
sidebar_position: 4
---

# Ticker Stream

Receive ticker updates for a specific market.

---

## Stream Name

```
<market>.ticker
```

Example:

```
btcusdt.ticker
```

---

## Subscribe Example

```
{
  "event": "subscribe",
  "streams": ["btcusdt.ticker"]
}
```

---

## Example Response

```json
{
  "stream": "btcusdt.ticker",
  "data": {
    "last": "62450.25",
    "high": "63000.00",
    "low": "61020.10",
    "volume": "128.45"
  }
}
```

---

## Notes

- Ticker updates reflect latest price and 24h stats.
- Updates may be published periodically.