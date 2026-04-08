---
sidebar_position: 1
---

# Markets

Retrieve all available trading markets.

This endpoint returns markets that are currently enabled for trading as well as markets that are scheduled to launch in the future.


## HTTP Request

```
GET /api/v2/peatio/public/markets
```


## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| page | false | integer | Page number for pagination |
| limit | false | integer | Number of records per page |



## Response Fields

| Field | Type | Description |
|------|------|-------------|
| id | string | Market identifier (e.g., `btcusdt`) |
| name | string | Market name (e.g., `BTC/USDT`) |
| base_unit | string | Base currency |
| quote_unit | string | Quote currency |
| min_price | string | Minimum order price |
| max_price | string | Maximum order price |
| min_amount | string | Minimum order amount |
| min_total | string | Minimum order total value |
| amount_precision | integer | Amount decimal precision |
| price_precision | integer | Price decimal precision |
| total_precision | integer | Total value precision |
| state | string | Market status (e.g., `enabled`) |
| trading_enabled | boolean | Whether trading is currently enabled |
| launch_status | string | Market launch status (e.g., `live`, `upcoming`) |
| launch_time | integer/null | Scheduled launch timestamp |
| binance_engine | boolean | Indicates if market uses external engine |
| temporary_stop | boolean | Indicates if trading is temporarily halted |
| st_designation | boolean | Special treatment designation flag |
| st_enabled_at | integer/null | Timestamp when ST was enabled |
| aggregator_data | object | Additional external data info |



## Example Request

```bash
curl https://wibeex.com/api/v2/peatio/public/markets?limit=1&page=3
```



## Example Response

```json
[
    {
        "id": "asterusdt",
        "name": "ASTER/USDT",
        "base_unit": "aster",
        "temporary_stop": false,
        "quote_unit": "usdt",
        "min_price": "0.33",
        "max_price": "2.32",
        "min_amount": "0.01",
        "min_total": "5.0",
        "amount_precision": 2,
        "price_precision": 2,
        "total_precision": 5,
        "state": "enabled",
        "trading_enabled": true,
        "launch_status": "live",
        "launch_time": null,
        "aggregator_data": {
            "binance_engine": false
        },
        "st_designation": false,
        "st_enabled_at": null
    }
]
```


## Notes

- This endpoint returns all **enabled markets**.
- Markets scheduled for launch may also appear if their launch time is in the future.
- Pagination parameters may be used to control the number of results returned.