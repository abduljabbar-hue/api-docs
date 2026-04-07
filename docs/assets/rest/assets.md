---
sidebar_position: 1
---

# Assets

Retrieve information about all tradable assets on the exchange.

This endpoint returns asset metadata including deposit and withdrawal availability, withdrawal limits, and supported smart contract addresses.


---

## HTTP Request

```
GET /api/v2/peatio/public/assets
```

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| name | string | Full name of the asset |
| can_deposit | boolean | Indicates whether deposits are enabled |
| can_withdraw | boolean | Indicates whether withdrawals are enabled |
| min_withdraw | string | Minimum withdrawal amount |
| max_withdraw | string | Maximum withdrawal amount |
| contractAddress | array | List of supported smart contract addresses |

---

## Example Request

```bash
curl https://wibeex.com/api/v2/peatio/public/assets
```

---

## Example Response

```json
{
  "BTC": {
    "name": "Bitcoin",
    "can_deposit": "true",
    "can_withdraw": "true",
    "min_withdraw": "0.001",
    "max_withdraw": "100",
    "contractAddress": []
  },
  "USDT": {
    "name": "Tether",
    "can_deposit": "true",
    "can_withdraw": "true",
    "min_withdraw": "10",
    "max_withdraw": "100000",
    "contractAddress": [
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj"
    ]
  }
}
```

---

## Notes

- The response contains **tradable assets only**, meaning assets used in enabled markets.
- Contract addresses may include **ERC20, BEP20, or TRC20 tokens**.
- If an asset does not use smart contracts (for example BTC), the `contractAddress` array will be empty.
- Withdrawal limits may vary depending on exchange configuration.