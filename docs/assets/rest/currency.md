---
sidebar_position: 2
---

# Get Currency

Retrieve information for a specific currency.

This endpoint returns detailed information about a currency including deposit and withdrawal availability.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/peatio/public/currencies/:id
```

---

## Path Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| id | true | string | Currency code (for example `btc`, `eth`, `usdt`) |

---
## Response Fields

### currency (object)

| Field | Type | Description |
|------|------|-------------|
| id | string | Currency code (e.g. `btc`) |
| name | string | Currency name |
| price | string | Current price of the currency |
| type | string | Currency type (`coin`, `fiat`) |
| country_id | string | Country identifier (if applicable, may be empty) |
| coin_listing_status | string | Listing status (`enabled`, `disabled`) |
| deposit_enabled | boolean | Whether deposits are allowed |
| withdrawal_enabled | boolean | Whether withdrawals are allowed |
| precision | integer | Decimal precision for the currency |
| position | integer | Display or sorting position |
| swap_min_amount | string/null | Minimum amount required for swap |
| icon_url | string | URL of the currency icon |
| networks | array | Supported blockchain networks (empty if none) |
| swap_fees | string | Swap transaction fee |
| p2p_fees | string | Peer-to-peer transaction fee |
| color | string | Display color (hex code) |
| swap_enabled | boolean | Whether swap functionality is enabled |
| min_redemption_amount | number | Minimum redemption amount |
| deposit_reward_amount | string | Reward amount for deposits |

---

### networks (array object)

| Field | Type | Description |
|------|------|-------------|
| networks | array | List of supported blockchain networks for the currency |
## Example Request

```bash
curl https://wibeex.com/api/v2/peatio/public/currencies/btc
```

---

## Example Response

```json
{
    "id": "btc",
    "name": "Bitcoin",
    "price": "68962.05",
    "type": "coin",
    "country_id": "",
    "coin_listing_status": "enabled",
    "deposit_enabled": true,
    "withdrawal_enabled": true,
    "precision": 3,
    "position": 51,
    "swap_min_amount": null,
    "icon_url": "https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/uploads/document/upload/906/RackMultipart20260327-15-kiolli.gif",
    "networks": [],
    "swap_fees": "0.01",
    "p2p_fees": "0.01",
    "color": "#f57900",
    "swap_enabled": true,
    "min_redemption_amount": 0,
    "deposit_reward_amount": "0.0"
}
```

---

## Notes

- Currency codes are typically lowercase.
- Deposit and withdrawal availability may vary depending on system state.