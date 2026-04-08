---
sidebar_position: 7
---

# Error Handling

Handle responses in the following order:

1. Check the **HTTP status**
2. Parse the response body
3. Handle success or error based on the structure returned

## HTTP Responses

| Status | Meaning |
|--------|--------|
| 200 | Success |
| 400 | Invalid request parameters |
| 401 | Authentication failed |
| 403 | Forbidden |
| 404 | Resource not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |


## Response Format

Error responses are returned in the following format:

```json
{
  "errors": ["error.code"]
}

```

## 🔐 Authentication Errors

These errors occur when API key authentication fails.

Authentication errors must be resolved before the request can succeed.


### Common Authentication Errors

| Error | Description |
|------|-------------|
| `authz.unexistent_apikey` | API key is invalid, does not exist, or is not approved |
| `authz.invalid_signature` | Request signature is incorrect (wrong secret key or signing logic) |


### Additional Authentication Errors

These may occur depending on request configuration and API key settings:

| Error | Description |
|------|-------------|
| `authz.invalid_api_key_headers` | Required authentication headers are missing or invalid |
| `authz.nonce_not_valid_timestamp` | Nonce is not a valid timestamp |
| `authz.nonce_expired` | Nonce is too old or outside allowed time window |
| `authz.apikey_not_active` | API key is disabled |
| `authz.apikey_not_approved` | API key is not yet approved |
| `authz.ip_not_allowed` | Request IP is not allowed for this API key |
| `authz.apikey_scope_not_allowed` | API key does not have permission for this action |
| `authz.disabled_2fa` | 2FA must be enabled to use API key features |


### Example

```json
{ "errors": ["authz.invalid_signature"] }

```


## API Errors

These errors occur after authentication succeeds.


## Account & Balance

| Error                          | Description                     |
|--------------------------------|---------------------------------|
| `account.insufficient_balance` | Account balance is insufficient |
| `account.missing_currency`     | Currency parameter is missing   |


## Orders (Place / Cancel)

| Error                                 | Description                                |
|---------------------------------------|--------------------------------------------|
| `order.insufficient_balance`          | Not enough balance to place an order       |
| `order.invalid_volume_or_price`       | Order price or volume is invalid           |
| `order.insufficient_market_liquidity` | Not enough liquidity in the market         |
| `order.create_error`                  | Failed to create order                     |
| `order.cancel_error`                  | Failed to cancel order                     |
| `order.invalid_state`                 | Order cannot be processed in current state |

---

## Public APIs

| Error                       | Description                |
|-----------------------------|----------------------------|
| `public.market.not_found`   | Market does not exist      |
| `public.currency.not_found` | Currency does not exist    |
| `public.invalid_limit`      | Limit parameter is invalid |


## WebSocket (WS)

After subscribing:

```json
{
  "success": {
    "message": "subscribed",
    "streams": ["btcusdt.trades"]
  }
}


```

If the subscription fails, an error message will be returned instead.
## Related


- [Rate limits](./rate-limits.md)
