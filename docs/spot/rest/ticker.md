---
sidebar_position: 7
---

# Market Ticker

Retrieve ticker information for a specific market.

This endpoint returns the latest trading statistics including price, volume, and price change.




## HTTP Request

```
GET /api/v2/peatio/public/markets/:market/tickers
```

---

## Path Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| market | true | string | Market identifier (example: `btcusdt`) |

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| buy | string | Best bid price |
| sell | string | Best ask price |
| low | string | Lowest price in the last 24 hours |
| high | string | Highest price in the last 24 hours |
| open | number | Opening price (24h) |
| last | string | Last traded price |
| volume | string | 24h trading volume |
| total_volume | string | Total traded volume (quote currency) |
| total_volume_base_currency | string | Total traded volume (base currency) |
| vol | string | Alias of volume |
| avg_price | string | Average price |
| price_change_percent | string | 24h price change percentage |
---

## Example Request

```bash
curl https://wibeex.com/api/v2/peatio/public/markets/btcusdt/tickers
```

---

## Example Response

```json
{
    "at": 1775483384,
    "ticker": {
        "buy": "69345.21",
        "sell": "69421.53",
        "low": "68922.39",
        "high": "69491.17",
        "open": 67832.98,
        "last": "69400.74",
        "volume": "0.0801",
        "total_volume": "8034.3630354",
        "total_volume_base_currency": "0.118443315263460340383099784205264165",
        "vol": "0.0801",
        "avg_price": "69371.459499022917036773849706875",
        "price_change_percent": "+2.31%"
    }
}
```

---

## Notes

- Returns ticker statistics for the specified market.
- Data reflects **24-hour trading statistics**.
- Prices and volumes are returned as strings to preserve precision.