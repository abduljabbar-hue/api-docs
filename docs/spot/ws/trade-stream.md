---
sidebar_position: 3
---

# Trades Stream

Receive real-time trade updates for a specific market.

---

## Stream Name

```
<market>.trades
```

Example:

```
btcusdt.trades
```

---

## Subscribe Example

```
wss://wibeex.com/api/v2/ranger/public/?stream=btcusdt.trades
```

---

## Example Response

```json
{
    "btcusdt.trades": {
        "trades": [
            {
                "amount": "0.00049",
                "date": 1775548452,
                "price": "68603.41",
                "taker_type": "sell",
                "tid": 5875
            }
        ]
    }
}
```

---

## Notes

- Trades are pushed instantly when executed.
- Each message represents a single trade event.