---
sidebar_position: 7
---

# Market Ticker

Retrieve ticker information for a specific market.

This endpoint returns the latest trading statistics including price, volume, and price change.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/markets/:market/tickers
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
| last | string | Last traded price |
| high | string | Highest price in the last 24 hours |
| low | string | Lowest price in the last 24 hours |
| volume | string | 24-hour trading volume |
| price_change_percent | string | 24-hour price change percentage |

---

## Example Request

```bash
curl https://api.wibeex.com/api/v2/markets/btcusdt/tickers
```

---

## Example Response

```json
{
  "last": "62450.25",
  "high": "63000.00",
  "low": "61020.10",
  "volume": "128.45",
  "price_change_percent": "2.15"
}
```

---

## Notes

- Returns ticker statistics for the specified market.
- Data reflects **24-hour trading statistics**.
- Prices and volumes are returned as strings to preserve precision.