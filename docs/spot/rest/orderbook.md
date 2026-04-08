---
sidebar_position: 2
---

# Order Book

Retrieve the current order book for a specific market.

The order book contains lists of active **buy (bids)** and **sell (asks)** orders available in the market.

This endpoint allows applications to view the current market depth and liquidity.





## HTTP Request

```
GET /api/v2/peatio/public/markets/:market/order-book
```


## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| market | true | string | Market identifier (example: `btcusdt`) |
| asks_limit | false | integer | Limit the number of returned sell orders. Range `1-200`. Default `20`. |
| bids_limit | false | integer | Limit the number of returned buy orders. Range `1-200`. Default `20`. |



## Response Fields

| Field | Type | Description |
|------|------|-------------|
| asks | array | List of sell orders |
| bids | array | List of buy orders |



## Example Request

```bash
curl "https://wibeex.com/api/v2/peatio/public/markets/btcusdt/order-book?bids_limit=1&asks_limit=1"
```


## Example Response

```json
{
    "asks": [
        {
            "id": 212477,
            "side": "sell",
            "ord_type": "market",
            "stop_loss_type": "market",
            "stop_price": "0.0",
            "price": null,
            "avg_price": "0.0",
            "state": "wait",
            "market": "btcusdt",
            "maker_fee": "0.0015",
            "created_at": "2026-04-06T13:55:06Z",
            "updated_at": "2026-04-06T13:55:06Z",
            "origin_volume": "0.00108",
            "remaining_volume": "0.00108",
            "executed_volume": "0.0",
            "amount_precision": 5,
            "price_precision": 2,
            "trades_count": 0,
            "bid": "usdt",
            "ask": "btc"
        }
    ],
    "bids": [
        {
            "id": 212477,
            "side": "sell",
            "ord_type": "market",
            "stop_loss_type": "market",
            "stop_price": "0.0",
            "price": null,
            "avg_price": "0.0",
            "state": "wait",
            "market": "btcusdt",
            "maker_fee": "0.0015",
            "created_at": "2026-04-06T13:55:06Z",
            "updated_at": "2026-04-06T13:55:06Z",
            "origin_volume": "0.00108",
            "remaining_volume": "0.00108",
            "executed_volume": "0.0",
            "amount_precision": 5,
            "price_precision": 2,
            "trades_count": 0,
            "bid": "usdt",
            "ask": "btc"
        }
    ]
}
```


## Notes

- `asks` represent **sell orders**, sorted from **lowest price to highest price**.
- `bids` represent **buy orders**, sorted from **highest price to lowest price**.
- The number of returned orders depends on the `asks_limit` and `bids_limit` parameters.
- Prices and volumes are returned as **strings** to preserve decimal precision.
- The order book represents a **snapshot of the market at the time of the request**.