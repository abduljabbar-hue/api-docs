---
sidebar_position: 6
---

# Rate Limits

Wibeex applies rate limits to protect platform stability and fair usage. Limits may differ by **IP address**, **API key**, and **endpoint group**.



## HTTP (REST)

| Category | Scope | Typical limit | Notes |
|----------|--------|----------------|--------|
| Public market endpoints | Per IP | Reasonable burst + steady QPS | Heavy polling should prefer **WebSocket** streams. |
| Private signed endpoints | Per API key | Stricter than public | Includes order placement and balance reads. |
| Error responses | — | `429 Too Many Requests` may include a retry hint | Back off exponentially; do not spin in a tight loop. |

If you receive **HTTP 429**, reduce request frequency, cache responses where possible, and use WebSockets for continuous data.


## WebSocket

- Subscribe only to streams you need.  
- Reconnect with **exponential backoff** if disconnected.  
- Avoid opening a large number of parallel connections from the same IP without approval.


## Best practices

- Prefer **WebSocket** for order book, trades, and tickers instead of REST polling.  
- Cache **static** metadata (markets, currencies) with a reasonable TTL.  
- Use **batch** or **all-markets** endpoints where available (for example global tickers) instead of many per-market calls.


## Contact

If you need higher limits for market making or institutional connectivity, contact support via the chat icon on the website.


## Related

- [Integration guide](./integration-guide.md)  
- [Error handling](./error-handling.md)
