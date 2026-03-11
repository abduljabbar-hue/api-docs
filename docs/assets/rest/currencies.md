---
sidebar_position: 1
---

# List Currencies

Retrieve a list of all supported currencies on the exchange.

The Currencies API provides information about supported currencies including currency details and status.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/currencies
```

---

## Query Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| type | false | string | Currency type (`fiat`, `coin`, `trading`) |
| swap_enabled | false | boolean | Filter currencies that support swap functionality |
| search.code | false | string | Search by currency code |
| search.name | false | string | Search by currency name |

---

## Example Request

```bash
curl https://api.wibeex.com/api/v2/currencies
```

---

## Example Response

```json
[
  {
    "id": "btc",
    "name": "Bitcoin",
    "type": "coin",
    "status": "enabled"
  },
  {
    "id": "usdt",
    "name": "Tether",
    "type": "coin",
    "status": "enabled"
  }
]
```

---

## Notes

- Returns all supported currencies on the exchange.
- Currency status may be `enabled`, `idle`, or `disabled`.