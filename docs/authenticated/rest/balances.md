---
sidebar_position: 3
---

# Account balances

Retrieve **spot** account balances for the authenticated user.

:::info Authentication

**Requires** signed requests . See [Authentication](../../authentication.md) and [Integration guide](../../integration-guide.md).

:::

:::info Rate limits

Private endpoints—see [Rate limits](../../rate-limits.md).

:::


## HTTP request

```
GET /api/v2/peatio/account/balances
```

## Query parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| hide_zero | false | string / boolean | If set, omit currencies with zero **available + locked** balance. |
| name | string | String| Partial match on currency name (case-insensitive, e.g. `Ethe` → Ethereum) |
| currency_code | false | string | Filter by currency **code** (`id`), e.g. `btc`. |
| type | false | string | Currency type filter (deployment / Ransack; e.g. coin vs fiat). |




> Note: `name` uses partial matching (`LIKE %value%`).  
> Multiple filters are combined using **AND** logic.


## Response fields

| Field | Type | Description |
|-------|------|-------------|
| currency | string | Currency code (e.g. `aave`) |
| balance | string | Available balance |
| locked | string | Amount locked in open orders |
| account_type | string | Account type (e.g. `spot`) |
| currency_name | string | Full name of the currency |
| currency_type | string | Type of asset (`coin`, `fiat`, etc.) |
| currency_icon | string | URL of the currency icon |
| currency_usdt | string | Estimated value in USDT |
| net_inflow | number | Net inflow of funds for the currency |
| nonzero | boolean | Indicates if balance is non-zero |
| exchange_rate | string \| null | Exchange rate if applicable |
| exchange_currency_id | string \| null | Exchange currency reference |
| alchemy_currency | string \| null | External integration reference (if applicable) |


## Example request

see code example to [get user account balance](/docs//authentication.md#javascript-example)


## Example response

```json
[
  {
    "currency": "aave",
    "balance": "1999.999925",
    "locked": "0.0",
    "account_type": "spot",
    "currency_name": "Aave",
    "currency_type": "coin",
    "currency_icon": "https://.../aave-logo.png",
    "currency_usdt": "87.63861511",
    "net_inflow": 0,
    "nonzero": false,
    "prev_pnl": {
      "aval_balance": "2000.0",
      "currency_price": "185.87"
    },
    "deposit_address": {
      "blockchain_key": "eth-testnet",
      "address": "0x733a12...",
      "state": "active"
    },
    "deposit_addresses": [
      {
        "blockchain_key": "eth-testnet",
        "address": "0x733a12...",
        "state": "active"
      },
      {
        "blockchain_key": "bsc-testnet",
        "address": "0x733a12...",
        "state": "active"
      }
    ]
  }
]

```

