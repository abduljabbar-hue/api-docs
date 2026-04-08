---
sidebar_position: 2
---

# Ticker

Retrieve **24-hour ticker statistics for all trading markets**.

This endpoint returns the latest price, best bid/ask prices, volume information, and other market statistics for each available market.




## HTTP Request

```
GET /api/v2/peatio/public/markets/tickers
```



## Request Parameters

This endpoint does not require any parameters.


## Response Fields

The response is a key-value map where each key is a **market identifier** (e.g. `btcusdt`, `aaveusdt`). Each value contains market data for that market.

| Field | Type | Description |
|------|------|-------------|
| `<market_id>` | object | Market identifier as key (e.g. `btcusdt`, `aaveusdt`) |
| at | integer | Timestamp of ticker data (Unix seconds) |
| ticker | object | Contains ticker statistics for the market |
| ticker.last | string | Latest traded price |
| ticker.open | string/number | Opening price for the 24h period |
| ticker.buy | string | Current best bid price |
| ticker.sell | string | Current best ask price |
| ticker.low | string | Lowest price in the last 24h |
| ticker.high | string | Highest price in the last 24h |
| ticker.volume | string | Trading volume in the last 24h |
| ticker.vol | string | Same as `volume` (duplicate field) |
| ticker.total_volume | string | Total traded value (quote currency) |
| ticker.total_volume_base_currency | string | Total traded volume in base currency |
| ticker.avg_price | string | Average price during the 24h period |
| ticker.price_change_percent | string | Percentage price change over 24h |
| ticker.base_unit | string | Base currency (e.g. `btc`) |
| ticker.quote_unit | string | Quote currency (e.g. `usdt`) |
## Example Request

```bash
curl https://wibeex.com/api/v2/peatio/public/markets/tickers
```



## Response Example

```json
{
    "aaveusdt": {
        "at": 1775547135,
        "ticker": {
            "buy": "91.56",
            "sell": "91.72",
            "low": "91.53",
            "high": "97.78",
            "open": 95.6,
            "last": "91.72",
            "volume": "1975.148",
            "avg_price": "94.757659287040174800592784417660120074",
            "price_change_percent": "-4.06%",
            "total_volume": "186276.929493",
            "total_volume_base_currency": "1948.503446579497907949790794979079497908",
            "vol": "1975.148",
            "base_unit": "aave",
            "quote_unit": "usdt"
        }
    }
}   
```



## Notes

- The response returns ticker information for **all enabled markets**.
- Market identifiers follow the format:
- The `price_change_percent` field represents the percentage change between the current price and the opening price of the 24-hour period.