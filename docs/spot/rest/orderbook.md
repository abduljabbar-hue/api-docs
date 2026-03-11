---
sidebar_position: 2
---

# Order Book

Retrieve the current order book for a specific market.

The order book contains lists of active **buy (bids)** and **sell (asks)** orders available in the market.

This endpoint allows applications to view the current market depth and liquidity.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/markets/:market/order-book
```

---

## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| market | true | string | Market identifier (example: `btcusdt`) |
| asks_limit | false | integer | Limit the number of returned sell orders. Range `1-200`. Default `20`. |
| bids_limit | false | integer | Limit the number of returned buy orders. Range `1-200`. Default `20`. |

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| asks | array | List of sell orders |
| bids | array | List of buy orders |
| asks[].price | string | Sell order price |
| asks[].volume | string | Sell order amount |
| bids[].price | string | Buy order price |
| bids[].volume | string | Buy order amount |

---

## Example Request

```bash
curl "https://api.wibeex.com/api/v2/markets/btcusdt/order-book"
```

---

## Example Response

```json
{
  "asks": [
    ["62450.10", "0.35"],
    ["62460.00", "0.50"]
  ],
  "bids": [
    ["62440.50", "1.20"],
    ["62430.00", "0.80"]
  ]
}
```

---

## Notes

- `asks` represent **sell orders**, sorted from **lowest price to highest price**.
- `bids` represent **buy orders**, sorted from **highest price to lowest price**.
- The number of returned orders depends on the `asks_limit` and `bids_limit` parameters.
- Prices and volumes are returned as **strings** to preserve decimal precision.
- The order book represents a **snapshot of the market at the time of the request**.