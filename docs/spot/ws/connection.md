---
sidebar_position: 1
---

# WebSocket Connection

The WebSocket API provides real-time market updates.

Public streams allow clients to subscribe to market data such as trades, order book updates, and tickers.

---

## WebSocket Endpoint

```
ws://api.wibeex.com:8081
```

---

## Subscribe

Clients must send a subscribe message after connecting.

```
{
  "event": "subscribe",
  "streams": ["btcusdt.update"]
}
```

---

## Unsubscribe

```
{
  "event": "unsubscribe",
  "streams": ["btcusdt.update"]
}
```

---

## Response Format

All messages follow the same structure.

```
{
  "stream": "btcusdt.update",
  "data": {...}
}
```

---

## Notes

- Replace `btcusdt` with the market identifier.
- Multiple streams can be subscribed simultaneously.
- Data is pushed automatically once subscribed.