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
GET /api/v2/currencies/:id
```

---

## Path Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| id | true | string | Currency code (for example `btc`, `eth`, `usdt`) |

---

## Example Request

```bash
curl https://api.wibeex.com/api/v2/currencies/btc
```

---

## Example Response

```json
{
  "id": "btc",
  "name": "Bitcoin",
  "type": "coin",
  "status": "enabled",
  "deposit_enabled": true,
  "withdrawal_enabled": true
}
```

---

## Notes

- Currency codes are typically lowercase.
- Deposit and withdrawal availability may vary depending on system state.