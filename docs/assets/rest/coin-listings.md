---
sidebar_position: 5
---

# Coin Listings

Retrieve a list of available coin listings on the exchange.

This endpoint returns information about coins that are visible and available on the platform.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/coin_listings/listing
```

---

## Query Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| platform | false | string | Filter listings by platform |
| network | false | string | Filter listings by blockchain network |
| page | false | integer | Page number for paginated results |
| limit | false | integer | Number of records per page |

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| id | integer | Listing identifier |
| name | string | Coin name |
| symbol | string | Coin symbol |
| network | string | Blockchain network |
| state | string | Listing status |
| created_at | integer | Listing creation timestamp |

---

## Example Request

```bash
curl "https://api.wibeex.com/api/v2/coin_listings/listing"
```

---

## Example Response

```json
[
  {
    "id": 12,
    "name": "Bitcoin",
    "symbol": "BTC",
    "network": "bitcoin",
    "state": "enabled",
    "created_at": 1710000000
  },
  {
    "id": 13,
    "name": "Ethereum",
    "symbol": "ETH",
    "network": "ethereum",
    "state": "enabled",
    "created_at": 1710000100
  }
]
```

---

## Notes

- Only **visible listings** are returned.
- Listings with states `offline`, `rejected`, `pending`, or `cancelled` are excluded.
- Pagination parameters can be used to control the number of results returned.
- Results are ordered by **latest listings first**.