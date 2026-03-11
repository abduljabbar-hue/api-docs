---
sidebar_position: 1
---

# Markets

Retrieve all available trading markets.

This endpoint returns markets that are currently enabled for trading as well as markets that are scheduled to launch in the future.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/markets
```

---

## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| page | false | integer | Page number for pagination |
| limit | false | integer | Number of records per page |

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| id | string | Market identifier |
| name | string | Market name |
| base_unit | string | Base currency |
| quote_unit | string | Quote currency |
| min_price | string | Minimum order price |
| max_price | string | Maximum order price |
| min_amount | string | Minimum order amount |
| amount_precision | integer | Amount decimal precision |
| price_precision | integer | Price decimal precision |
| state | string | Market status |

---

## Example Request

```bash
curl https://api.wibeex.com/api/v2/markets
```

---

## Example Response

```json
[
  {
    "id": "btcusdt",
    "name": "BTC/USDT",
    "base_unit": "btc",
    "quote_unit": "usdt",
    "min_price": "0.01",
    "max_price": "1000000",
    "min_amount": "0.0001",
    "amount_precision": 6,
    "price_precision": 2,
    "state": "enabled"
  }
]
```

---

## Notes

- This endpoint returns all **enabled markets**.
- Markets scheduled for launch may also appear if their launch time is in the future.
- Pagination parameters may be used to control the number of results returned.