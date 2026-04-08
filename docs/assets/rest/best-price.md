---
sidebar_position: 3
---

# Best Price Conversion

Retrieve the best price conversion between two currencies.

This endpoint calculates the best available conversion price between two assets.

This is a **public endpoint**.

## HTTP Request

```
POST /api/v2/peatio/public/currencies/best_price
```


## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| from_currency | true | string | Source currency code |
| to_currency | true | string | Target currency code |

## Example Request

```bash
curl -X POST https://wibeex.com/api/v2/peatio/public/currencies/best_price \
  -H "Content-Type: application/json" \
  -d '{
        "from_currency": "btc",
        "to_currency": "usdt"
      }'
```

## Example Response

```json
{
  "price": "62450.25"
}
```

## Notes

- Used to retrieve the best conversion rate between two currencies.
- Useful for estimating asset values across trading pairs.