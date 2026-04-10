---
sidebar_position: 1
---
# API Introduction

Welcome to the Wibeex API documentation.

This guide helps you understand how to connect and work with the Wibeex exchange.

Wibeex provides simple and flexible APIs, so you can build trading apps, automate strategies, or create your own tools easily.

## Documentation structure
The API documentation is organized into the following structure:

| Section | Description |
|---------|-------------|
| **API Introduction** | Provides the documentation structure, an overall introduction to the API, and related materials (including [code examples](/docs/authentication.md#javascript-example-get-balances)). |
| **Integration Guide** | Explains how to connect and start using the Wibeex API step by step. |
| **Authentication** | Describes how to generate an API key and authenticate. |
| **Rate Limits** | Explains usage limits and how often you can call each API. |
| **Error Handling** | Lists common errors and how to handle them. |

## API Base URL

Wibeex provides services through **HTTP protocol** and **WebSockets protocol**. Base URLs are as follows:

:::info

Base URLs for REST API requests:

- `https://wibeex.com/api/v2/peatio  `

- `https://wibeex.com/api/v2/barong`
  

Base URL for WebSocket streams:
- Public: `wss://wibeex.com/api/v2/ranger/public`

:::


## Module grouping
Wibeex APIs are grouped into public APIs and authenticated APIs as follows:

### 1. Public APIs

<table>
  <thead>
    <tr>
      <th>Module</th>
      <th>Submodule</th>
      <th>Description</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <!-- Spot -->
    <tr>
      <td rowspan="9"><b>Spot</b></td>
      <td>Market Ticker</td>
      <td>Latest market ticker data</td>
      <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Order Book</td>
      <td>Order book depth</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Recent Trades</td>
      <td>Latest trades</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Markets</td>
      <td>Market list</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Market Depth</td>
      <td>Aggregated depth data</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>K-Line (OHLC)</td>
      <td>Candlestick data</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>

    
    <tr>
      <td>Market Summary</td>
      <td>24h market summary</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Ticker</td>
      <td>All market tickers</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>WebSocket</td>
      <td>Real-time public streams</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>

    <!-- Assets -->
    <tr>
      <td rowspan="6"><b>Assets</b></td>
      <td>List Currencies</td>
      <td>Currency list</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Assets</td>
      <td>Asset details</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Coin Listings</td>
      <td>Listed coins</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Best Price Conversion</td>
      <td>Price conversion</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Blockchain Networks</td>
      <td>Supported networks</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
    <tr>
      <td>Get Currency</td>
      <td>Currency details</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>

    <!-- Accounts -->
    <tr>
      <td rowspan="1"><b>Accounts</b></td>
      <td>Member Levels</td>
      <td>User verification level (e.g., KYC verification, 2FA enabled).</td>
        <td>[View details](/docs/spot/rest/ticker.md)</td>
    </tr>
  </tbody>
</table>

### 2. Authenticated APIs 

<table>
  <thead>
    <tr>
      <th>Module</th>
      <th>Submodule</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><b>Authenticated</b></td>
      <td>Place Order</td>
      <td>Create buy/sell order</td>
    </tr>
    <tr>
      <td>Cancel Orders</td>
      <td>Cancel existing orders</td>
    </tr>
    <tr>
      <td>Account Balances</td>
      <td>User balances</td>
    </tr>
    <tr>
      <td>User Profile (/me)</td>
      <td>User information</td>
    </tr>
  </tbody>
</table>



## Related Resources

Before using the Wibeex Exchange API, you may want to review the following resources:

- [**API Documentation**](/docs/intro.md) 
  : Detailed information about API endpoints, including request methods, parameters, and responses.

- [**API Management Console**](https://wibeex.com/api-management) 
  : Create and manage your API keys and permissions.  

- [**Code Examples**](/docs/authentication.md#javascript-example-get-balances) 
  : Simple JavaScript examples to help you get started quickly:  
  - [Place Order](/docs/authentication#javascript-example-place-order)  
  - [Get Balances](/docs/authentication#javascript-example-get-balances)  
  - [Cancel Order](/docs/authentication#javascript-example-cancel-order)



## Support and Feedback

If you encounter any issues or need further assistance while using the API, feel free to contact the Wibeex Support Team. We are always ready to assist you and provide guidance throughout your development process.

We highly value your feedback. If you have any suggestions or ideas for improving the API documentation, please let us know. We continuously enhance and update our documentation to keep it aligned with the API and your needs.

Thank you for choosing **Wibeex API services**.  
We look forward to seeing you build powerful applications and integrations with our exchange. 

