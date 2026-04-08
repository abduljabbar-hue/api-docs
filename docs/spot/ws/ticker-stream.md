---
sidebar_position: 4
---

# Ticker Stream

Receive ticker updates for a specific market.



## Stream Name

```
<market>.ticker
```

Example:

```
btcusdt.ticker
```



## Subscribe Example

```
    wss://wibeex.com/api/v2/ranger/public/?stream=ethusdt.ticker
```



## Example Response

```json
{
    "ethusdt.ticker": {
        "at": 1775548016,
        "avg_price": "2132.163526076346065174933179386637376808",
        "base_unit": "eth",
        "base_unit_icon_url": {
            "url": "https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/eth.png"
        },
        "base_unit_name": "Ethereum",
        "buy": "2102.2",
        "high": "2165.2949",
        "last": "2104.0937",
        "low": "2091.4116",
        "name": "ETH/USDT",
        "open": 2127.85,
        "price_change_percent": "-1.12%",
        "quote_unit": "usdt",
        "quote_unit_icon_url": {
            "url": "https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/usdt_future.png"
        },
        "quote_unit_name": "Tether USDT",
        "sell": "2112.51",
        "total_volume": "341339.08553556",
        "total_volume_base_currency": "160.415013058044505016800996310830180699",
        "usd": null,
        "volume": "160.8978"
    }
}
```


## Notes

- Ticker updates reflect latest price and 24h stats.
- Updates may be published periodically.