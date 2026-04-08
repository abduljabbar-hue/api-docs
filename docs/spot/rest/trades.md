---
sidebar_position: 3
---

# Recent Trades

Retrieve recent trades executed on a specific market.

Each trade is returned only once and results are sorted by creation time.  
By default, trades are returned in **descending order (latest first)**.



## HTTP Request

```
GET /api/v2/peatio/public/markets/:market/trades
```


## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| market | true | string | Market identifier (example: `btcusdt`) |
| page | false | integer | Page number for paginated results. Must be greater than `0`. Default `1`. |


## Response Fields

| Field | Type | Description |
|------|------|-------------|
| id | integer | Unique trade identifier |
| price | string | Trade price |
| amount | string | Trade quantity |
| total | object/null | Total trade value (currently not populated) |
| fee_currency | object/null | Fee currency (currently not populated) |
| fee_amount | object/null | Fee amount (currently not populated) |
| market | string | Market identifier (e.g. `ethusdt`) |
| created_at | integer | Trade timestamp (Unix epoch seconds) |
| order_id | object/null | Order identifier (currently not populated) |
| is_buyer | boolean/null | Indicates if buyer side (currently not populated) |
| side | string | Trade side (`buy` or `sell`) |


## Example Request

```bash
curl "https://wibeex.com/api/v2/peatio/public/markets/btcusdt/trades?page=1"
```

## Example Response

```json
[
    {
        "id": 3907297419,
        "price": "2098.54000000",
        "amount": "0.14200000",
        "total": {},
        "fee_currency": {},
        "fee_amount": {},
        "market": "ethusdt",
        "created_at": 1775544150,
        "order_id": {},
        "is_buyer": null,
        "side": "sell"
    },
    {
        "id": 3907297418,
        "price": "2098.55000000",
        "amount": "0.04900000",
        "total": {},
        "fee_currency": {},
        "fee_amount": {},
        "market": "ethusdt",
        "created_at": 1775544148,
        "order_id": {},
        "is_buyer": null,
        "side": "buy"
    }
]
```


## Notes

- Trades are sorted by **creation time**.
- Default sorting is **descending (`desc`)**, meaning the **latest trades appear first**.
- Pagination can be controlled using the `page` parameter.
