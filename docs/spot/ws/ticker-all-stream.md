---
sidebar_position: 5
---

# Global Tickers Stream

Receive ticker updates for all markets.

---

## Stream Name

```
global.tickers
```

---

## Subscribe Example

```
{
  "event": "subscribe",
  "streams": ["global.tickers"]
}
```

---

## Example Response

```json
{
  "stream": "global.tickers",
  "data": {
    "btcusdt": {
      "last": "62450.25",
      "volume": "128.45"
    },
    "ethusdt": {
      "last": "3450.75",
      "volume": "540.12"
    }
  }
}
```

---

## Notes

- Provides ticker data for all markets.
- Useful for dashboards or market overviews.