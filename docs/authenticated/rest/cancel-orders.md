---
sidebar_position: 2
---

# Cancel orders

Cancel **open** orders on a market. 

:::info Authentication

This endpoint **requires** API key signing . See [Authentication](../../authentication.md) and [Integration guide](../../integration-guide.md).

:::

:::info Rate limits

Applies per API key. See [Rate limits](../../rate-limits.md).

:::


## HTTP request

```
POST /api/v2/peatio/market/orders/cancel
```


## Request parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| market | **true** | string | Market id (for example `btcusdt`). |
| side | false | string | If set, cancels only `buy` or `sell` orders. |


## Response 

Returns an **array of order objects**:

- If orders are found → returns matching orders  
- If no orders → returns an empty array `[]`

> ⚠️ Cancellation is **asynchronous**.  
> Orders may still appear with `state: "wait"` immediately after the request.  
> The final state will update shortly once processed by the matching engine.

## Example request


see code example to [cancel order](/docs/authentication.md#javascript-example-cancel-order---post)


## Example response

```json
[
  {
    "id": 267016,
    "market": "btcusdt",
    "side": "buy",
    "state": "wait",
    "price": "65000.12",
    "origin_volume": "0.001",
    "remaining_volume": "0.001",
    "executed_volume": "0.0"
  }
]
```


## Notes

- Errors such as `market.order.cancel_error` may appear when the engine rejects the operation—see [Error handling](../../error-handling.md).
