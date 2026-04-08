---
sidebar_position: 1
---

# List Currencies

Retrieve a list of all supported currencies on the exchange.

The Currencies API provides detailed information about supported currencies.


## HTTP Request

```
GET /api/v2/peatio/public/currencies
```


## Query Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| type | false | string | Currency type (`fiat`, `coin`, `trading`) |
| swap_enabled | false | boolean | Filter currencies that support swap functionality |
| search.code | false | string | Search by currency code (SQL LIKE) |
| search.name | false | string | Search by currency name (SQL LIKE) |


## Response Fields

### currency (object)

| Parameter | Type | Description |
|----------|------|-------------|
| id | string | Currency code (e.g. `btc`) |
| name | string | Currency name |
| price | string | Current price |
| type | string | Currency type (`coin`, `fiat`) |
| country_id | string | Country identifier (if applicable) |
| coin_listing_status | string | Listing status (`enabled`, `disabled`) |
| deposit_enabled | boolean | Whether deposits are allowed |
| withdrawal_enabled | boolean | Whether withdrawals are allowed |
| precision | integer | Decimal precision |
| position | integer | Sorting position |
| swap_min_amount | string/null | Minimum swap amount |
| icon_url | string | Currency icon URL |
| networks | array | Supported blockchain networks |
| swap_fees | string | Swap fees |
| p2p_fees | string | P2P fees |
| color | string | Display color |
| swap_enabled | boolean | Whether swap is enabled |
| min_redemption_amount | number | Minimum redemption amount |
| deposit_reward_amount | string | Deposit reward amount |


### networks (array object)

| Parameter | Type | Description |
|----------|------|-------------|
| blockchain_key | string | Blockchain identifier |
| currency_id | string | Currency code |
| alchemy_enabled | boolean | Whether Alchemy integration is enabled |
| alchemy_network | string | Alchemy network name |
| deposit_enabled | boolean | Whether deposits are allowed |
| withdrawal_enabled | boolean | Whether withdrawals are allowed |
| deposit_fee | string | Deposit fee |
| internal_deposit_fee | string | Internal deposit fee |
| min_deposit_amount | string | Minimum deposit amount |
| withdraw_fee | string | Withdrawal fee |
| internal_withdraw_fee | string | Internal withdrawal fee |
| min_withdraw_amount | string | Minimum withdrawal amount |
| withdraw_limit_24h | string | 24-hour withdrawal limit |
| withdraw_limit_72h | string | 72-hour withdrawal limit |
| explorer_transaction | string | Transaction explorer URL template |
| explorer_address | string | Address explorer URL template |


## Example Request

```bash
curl https://wibeex.com/api/v2/peatio/public/currencies?type=coin&search[code]=btc&search[name]=eth

   ```
## Example Response

```json
[
  {
        "id": "ens",
        "name": "Ethereum Name Service",
        "price": "5.61",
        "type": "coin",
        "country_id": "",
        "coin_listing_status": "enabled",
        "deposit_enabled": true,
        "withdrawal_enabled": true,
        "precision": 8,
        "position": 8,
        "swap_min_amount": null,
        "icon_url": "https://prod-wibeex.s3.ap-south-1.amazonaws.com/ens-logo.png",
        "networks": [
            {
                "blockchain_key": "eth-mainnet",
                "currency_id": "ens",
                "alchemy_enabled": true,
                "alchemy_network": "ETH",
                "deposit_enabled": true,
                "withdrawal_enabled": true,
                "deposit_fee": "0.0",
                "internal_deposit_fee": "0.0",
                "min_deposit_amount": "0.88105727",
                "withdraw_fee": "0.44052863",
                "internal_withdraw_fee": "0.0",
                "min_withdraw_amount": "1.28095645",
                "withdraw_limit_24h": "352.42290749",
                "withdraw_limit_72h": "1057.26872247",
                "explorer_transaction": "https://etherscan.io/tx/#{txid}",
                "explorer_address": "https://etherscan.io/address/#{address}"
            }
        ],
        "swap_fees": "0.0",
        "p2p_fees": "0.0",
        "color": "",
        "swap_enabled": false,
        "min_redemption_amount": 0,
        "deposit_reward_amount": "0.0"
    },
]
```



## Notes

- Returns all supported currencies on the exchange.
- Currency status may be `enabled`, `idle`, or `disabled`.