---
sidebar_position: 4
---

# Market Depth

Retrieve the aggregated depth for a specific market.

The depth endpoint returns lists of **bid and ask price levels** in the order book.  
Both asks and bids are sorted from **highest price to lowest price**.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/markets/:market/depth
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
| asks | array | List of sell price levels |
| bids | array | List of buy price levels |
| asks[].price | string | Sell order price |
| asks[].volume | string | Total sell volume at that price level |
| bids[].price | string | Buy order price |
| bids[].volume | string | Total buy volume at that price level |

---

## Example Request

```bash
curl https://api.wibeex.com/api/v2/markets/btcusdt/depth
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