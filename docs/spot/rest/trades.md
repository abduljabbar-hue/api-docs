---
sidebar_position: 3
---

# Recent Trades

Retrieve recent trades executed on a specific market.

Each trade is returned only once and results are sorted by creation time.  
By default, trades are returned in **descending order (latest first)**.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/markets/:market/trades
```

---

## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| market | true | string | Market identifier (example: `btcusdt`) |
| limit | false | integer | Number of trades to return. Range `1-1000`. Default `100`. |
| page | false | integer | Page number for paginated results. Must be greater than `0`. Default `1`. |
| timestamp | false | integer | Unix timestamp (seconds). If set, only trades executed **before this time** will be returned. |
| order_by | false | string | Sorting order. Allowed values: `asc`, `desc`. Default `desc`. |

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| id | integer | Trade identifier |
| price | string | Trade price |
| amount | string | Trade amount |
| total | string | Total trade value |
| taker_type | string | Trade side (`buy` or `sell`) |
| created_at | integer | Trade timestamp |

---

## Example Request

```bash
curl "https://api.wibeex.com/api/v2/markets/btcusdt/trades?limit=50&page=1"
```

---

## Example Response

```json
[
  {
    "id": 984321,
    "price": "62450.10",
    "amount": "0.25",
    "total": "15612.52",
    "taker_type": "buy",
    "created_at": 1710000000
  },
  {
    "id": 984320,
    "price": "62440.00",
    "amount": "0.50",
    "total": "31220.00",
    "taker_type": "sell",
    "created_at": 1709999988
  }
]
```

---

## Notes

- Trades are sorted by **creation time**.
- Default sorting is **descending (`desc`)**, meaning the **latest trades appear first**.
- Pagination can be controlled using the `page` parameter.
- Use the `timestamp` parameter to fetch trades **before a specific time**.