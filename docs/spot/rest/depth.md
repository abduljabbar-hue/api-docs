---
sidebar_position: 4
---

# Market Depth

Retrieve the aggregated depth for a specific market.

This endpoint returns lists of **ask (sell)** and **bid (buy)** price levels from the order book.

- **Asks** are sorted from **lowest price to highest price**  
- **Bids** are sorted from **highest price to lowest price**



---

## HTTP Request

```
GET /api/v2/peatio/public/markets/:market/depth
```

---

## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| market | true | string | Market identifier (example: `btcusdt`) |
| limit | false | integer | Maximum number of price levels to return. Range `1-1000`. Default `800`. |

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| timestamp | integer | Unix timestamp of the response |
| asks | array | List of sell price levels `[price, volume]` |
| bids | array | List of buy price levels `[price, volume]` |
---

## Example Request

```bash
curl https://wibeex.com/api/v2/peatio/public/markets/btcusdt/depth?limit=2
```

---

## Example Response

```json
{
  "timestamp": 1710000000,
  "asks": [
    ["62450.10", "1.25"],
    ["62460.00", "0.80"]
  ],
  "bids": [
    ["62440.50", "2.10"],
    ["62430.00", "1.50"]
  ]
}
```

---

## Notes

- `asks` represent **sell orders** at different price levels.
- `bids` represent **buy orders** at different price levels.
- The `limit` parameter controls the number of returned price levels.
- Depth data represents an **aggregated snapshot of the order book**.