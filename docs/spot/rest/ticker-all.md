---
sidebar_position: 2
---

# Ticker

Retrieve **24-hour ticker statistics for all trading markets**.

This endpoint returns the latest price, best bid/ask prices, volume information, and other market statistics for each available market.

This is a **public endpoint** and does **not require authentication**.

---

## HTTP Request

```
GET /api/v2/tickers
```

---

## Request Parameters

This endpoint does not require any parameters.

---

## Response Fields

| Parameter | Type | Description |
|----------|------|-------------|
| last | string | Latest traded price |
| open | string | Opening price for the 24h period |
| buy | string | Current best bid price |
| sell | string | Current best ask price |
| volume | string | Trading volume in the last 24 hours |
| total_volume | string | Total traded value |
| total_volume_base_currency | string | Volume converted to base currency |
| avg_price | string | Average price during the 24h period |
| price_change_percent | string | Percentage price change over 24h |
| base_unit | string | Base currency of the market |
| quote_unit | string | Quote currency of the market |
| usd | string | Quote currency price converted to USD |
| at | integer | Timestamp of ticker data |

---

## Response Example

```json
{
  "btcusdt": {
    "ticker": {
      "last": "62450.25",
      "open": "61800.00",
      "buy": "62440.10",
      "sell": "62460.50",
      "volume": "125.542",
      "total_volume": "7800000.23",
      "total_volume_base_currency": "125.54",
      "avg_price": "62120.50",
      "price_change_percent": "1.05",
      "usd": "62450.25",
      "at": 1710000000,
      "base_unit": "btc",
      "quote_unit": "usdt"
    }
  }
}
```

---

## Example Request

```bash
curl https://api.wibeex.com/api/v2/tickers
```

---

## Notes

- The response returns ticker information for **all enabled markets**.
- Market identifiers follow the format:

```
BASEQUOTE
```

Example:

```
btcusdt
ethusdt
xrpusdt
```

- The `price_change_percent` field represents the percentage change between the current price and the opening price of the 24-hour period.

---

## Related Endpoints

| Endpoint | Description |
|--------|--------|
| `/api/v2/markets` | Retrieve available markets |
| `/api/v2/trades` | Retrieve recent trades |
| `/api/v2/orderbook` | Retrieve market order book |