---
sidebar_position: 5
---

# K-Line (OHLC)

Retrieve OHLC (Open, High, Low, Close) candlestick data for a specific market.

K-Line data is commonly used for **technical analysis and charting**.  
Each data point represents market activity within a specific time interval.



## HTTP Request

```
GET /api/v2/peatio/public/markets/:market/k-line
```

## Request Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| market | true | string | Market identifier (example: `btcusdt`) |
| period | false | integer | Time interval of the candlestick. Default `1`. Available values depend on supported K-line periods. |
| time_from | false | integer | Unix timestamp (seconds). If set, only K-line data **after this time** will be returned. |
| time_to | false | integer | Unix timestamp (seconds). If set, only K-line data **before this time** will be returned. |
| limit | false | integer | Maximum number of returned data points. Default `30`.Range `1–10000`. Ignored if `time_from` and `time_to` are provided. |


## Response Fields

| Field | Type | Description |
|------|------|-------------|
| timestamp | integer | Start time of the candlestick interval |
| open | string | Opening price |
| high | string | Highest price during the interval |
| low | string | Lowest price during the interval |
| close | string | Closing price |
| volume | string | Trading volume during the interval |


## Example Request

```bash
curl "https://wibeex.com/api/v2/peatio/public/markets/btcusdt/k-line?period=1&time_from=1775543820&time_to=1775544120"
```


**Note**: When time_from and time_to are provided, limit is ignored.

## Example Response

```json
[
    [
        1775543820,
        68503.39,
        68528.0,
        68503.39,
        68508.02,
        3.9024
    ],
    [
        1775543880,
        68508.02,
        68567.2,
        68508.02,
        68567.2,
        3.5341
    ]
]    
```

## Notes

- Each record represents **one candlestick interval**.
- The `period` parameter determines the **time duration of each candle**.
- `time_from` and `time_to` can be used to retrieve historical candlestick data within a specific time range.
- If `limit` is used without timestamps, the latest K-line data points will be returned.