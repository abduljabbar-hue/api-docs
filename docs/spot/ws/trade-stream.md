---
sidebar_position: 3
---

# Trades Stream

Receive real-time trade updates for a specific market.

---

## Stream Name

```
<market>.trades
```

Example:

```
btcusdt.trades
```

---

## Subscribe Example

```
{
  "event": "subscribe",
  "streams": ["btcusdt.trades"]
}
```

---

## Example Response

```json
{
  "stream": "btcusdt.trades",
  "data": {
    "price": "62450.10",
    "amount": "0.25",
    "side": "buy",
    "timestamp": 1710000000
  }
}
```

---

## Notes

- Trades are pushed instantly when executed.
- Each message represents a single trade event.