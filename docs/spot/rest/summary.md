---
sidebar_position: 1
---

# Market Summary

Retrieve summary information for all trading markets.

This endpoint returns aggregated market data including price, volume, and 24-hour statistics for each trading pair.

This is a **public endpoint**.

---

## HTTP Request

```
GET /api/v2/summary
```

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| trading_pairs | string | Market trading pair identifier |
| last_price | string | Last traded price |
| lowest_ask | string | Lowest ask price currently available |
| highest_bid | string | Highest bid price currently available |
| base_volume | string | 24-hour trading volume in base currency |
| quote_volume | string | 24-hour trading volume in quote currency |
| price_change_percent_24h | string | Percentage price change in the last 24 hours |
| highest_price_24h | string | Highest price during the last 24 hours |
| lowest_price_24h | string | Lowest price during the last 24 hours |

---

## Example Request

```bash
curl https://api.wibeex.com/api/v2/summary
```

---

## Example Response

```json
[
  {
    "trading_pairs": "btc_usdt",
    "last_price": "62450.25",
    "lowest_ask": "62460.00",
    "highest_bid": "62440.50",
    "base_volume": "128.45",
    "quote_volume": "8012456.32",
    "price_change_percent_24h": "2.15",
    "highest_price_24h": "63000.00",
    "lowest_price_24h": "61020.10"
  },
  {
    "trading_pairs": "eth_usdt",
    "last_price": "3450.75",
    "lowest_ask": "3455.00",
    "highest_bid": "3448.10",
    "base_volume": "540.12",
    "quote_volume": "1867450.55",
    "price_change_percent_24h": "-0.85",
    "highest_price_24h": "3500.00",
    "lowest_price_24h": "3380.20"
  }
]
```

---

## Notes

- The endpoint returns **summary statistics for all enabled markets**.
- Volume data represents **24-hour trading activity**.
- Prices and volumes are returned as **strings to preserve precision**.
- Some values may return `"0"` if data is not available.