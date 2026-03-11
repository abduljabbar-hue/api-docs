---
sidebar_position: 4
---

# Blockchain Networks

Retrieve all supported blockchain networks on the exchange.

This endpoint returns a list of blockchain networks supported for deposits and withdrawals.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/blockchain/networks
```

---

## Example Request

```bash
curl https://api.wibeex.com/api/v2/blockchain/networks
```

---

## Example Response

```json
[
  "bitcoin",
  "ethereum",
  "tron",
  "polygon"
]
```

---

## Notes

- Blockchain networks represent supported deposit and withdrawal networks.
- Some currencies may support multiple networks.