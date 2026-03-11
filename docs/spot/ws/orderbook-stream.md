---
sidebar_position: 2
---

# Order Book Incremental Stream

Receive incremental updates for the order book of a market.

---

## Stream Name

```
<market>.ob-inc
```

Example:

```
btcusdt.ob-inc
```

---

## Subscribe Example

```
{
  "event": "subscribe",
  "streams": ["btcusdt.ob-inc"]
}
```

---

## Example Response

```json
{
  "stream": "btcusdt.ob-inc",
  "data": {
    "asks": [["62450.10", "0.35"]],
    "bids": [["62440.50", "1.20"]]
  }
}
```

---

## Notes

- Updates contain only changed price levels.
- Clients should maintain a local order book state.
- Periodic snapshots ensure consistency.