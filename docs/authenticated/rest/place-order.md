---
sidebar_position: 1
---

# Place order

Create a **buy** or **sell** order on a spot market.

:::info Authentication

This endpoint **requires** a valid API key — see [Authentication](../../authentication.md) and [Integration guide](../../integration-guide.md).

:::

:::info Rate limits

Private trading endpoints are limited per API key. See [Rate limits](../../rate-limits.md).

:::


## HTTP request

```
POST /api/v2/peatio/market/orders
```


## Request parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| market | **true** | string | Market id (for example `btcusdt`). Use ids from [Markets](../../spot/rest/markets.md). |
| side | **true** | string | Order side: `buy` or `sell`. |
| volume | **true** | string | Order amount in **base currency** units (string decimal). |
| ord_type | **true** | string | Order type: `limit` or `market`. |
| price | false | string | Limit price (quote currency). Required for **`limit`** orders; omit for typical **`market`** orders. |


## Response fields

Successful responses use the unified envelope (`code`, `data`, `message`). The `data` object is an **order** record, for example:

| Field | Type | Description |
|-------|------|-------------|
| id | integer | Order id |
| market | string | Market id |
| side | string | `buy` or `sell` |
| ord_type | string | e.g. `limit`, `market` |
| price | string | Order price (limit) |
| volume | string | Order volume |
| origin_volume | string | Original volume |
| state | string | e.g. `wait`, `done`, `cancel` |
| created_at | string | Creation time (deployment-specific format) |


## Example request
see [place order example](/docs/authentication.md#javascript-example-place-order)


## Example response

```json
{
  "id": 267016,
  "side": "buy",
  "ord_type": "limit",
  "stop_loss_type": "limit",
  "stop_price": "0.0",
  "price": "65000.12",
  "avg_price": "0.0",
  "state": "pending",
  "market": "btcusdt",
  "maker_fee": "0.0015",
  "created_at": "2026-04-07T09:34:58Z",
  "updated_at": "2026-04-07T09:34:58Z",
  "origin_volume": "0.001",
  "remaining_volume": "0.001",
  "executed_volume": "0.0",
  "amount_precision": 5,
  "price_precision": 2,
  "trades_count": 0,
  "bid": "usdt",
  "ask": "btc"
}
 
```

## Notes

- If the request fails, see [Error handling](../../error-handling.md).
