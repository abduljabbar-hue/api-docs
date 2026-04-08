---
sidebar_position: 2
---

# WebSocket Streams

The Wibeex WebSocket API allows clients to subscribe to real-time market and global data streams.

It provides low-latency updates for trades, tickers, order books, and global market data.


## Base URL
wss://staging.wibeex.com/api/v2/ranger/public


## Subscription

Connect using the `stream` query parameter:

wss://staging.wibeex.com/api/v2/ranger/public/?stream=stream_name

You can subscribe to one stream per connection.


## Market Streams

These streams provide real-time data for a specific trading pair.

| Stream | Description |
|--------|------------|
| `market.kline-15m` | 15-minute candlestick (kline) data |
| `market.trades` | Real-time trade updates |
| `market.update` | Order book updates |



## Global Streams

These streams provide aggregated or platform-wide data.

| Stream | Description |
|--------|------------|
| `global.currencies_data` | General currency information |
| `global.currencies_movers` | Top gaining and losing currencies |
| `global.currencies_prices` | Latest prices for all currencies |
| `global.tickers` | Ticker data for all markets |

## Message Format
All messages are sent in JSON format. The structure depends on the subscribed stream.

### Example (Trades)

```json
{
  "type": "trade",
  "market": "btcusdt",
  "data": {
    "price": "65000.12",
    "amount": "0.002",
    "timestamp": 1710000000
  }
}

