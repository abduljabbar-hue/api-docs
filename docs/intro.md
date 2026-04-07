---
sidebar_position: 1
---

# API introduction

Welcome to the **Wibeex API documentation**. 

This documentation aims to provide developers with detailed information on how to integrate and interact with the **Wibeex** exchange.

Wibeex offers user  public apis anyone can access about spot and listed currencies and markets and authencated apis to place spot order and cancel it and get user profile details on wibeex to build trading applications to run on wibeex.

## API Documentation structure
Our API documentation is organized according to the following structures:

| Section | Description |
|---------|-------------|
| **API introduction** |Provides an overall introduction to the API, document organization, and related materials (including demo). |
| **Integration guide** | Describes how to proceed with the entire access process to integrate a wibeex api in you application . |
| **Create API key** | Guides to create an api key on wibeex require parameteres and process to an api key. |
| **Rate limits** |Provides detailed information on the function, usage and sample code of each API endpoint. |
| **Error handling** | Lists common error codes and corresponding error handling methods. |


## API Base URL

Wibeex provides services through **HTTP protocol** and **WebSockets protocol**.  
The base URLs for accessing these services are as follows:

> ℹ️ **INFO**

- **HTTP Base URL**  
  https://wibeex.com/api/v2/peatio  
  https://wibeex.com/api/v2/barong  

- **WebSocket Base URL**  
  wss://wibeex.com/api/v2/peatio/public


## Module grouping
Wibeex API is grouped in public apis and authenticated apis specific grouping is as follows. 

### 1. Public API Reference

<table>
  <thead>
    <tr>
      <th>Module</th>
      <th>Submodule</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- Spot -->
    <tr>
      <td rowspan="9"><b>Spot</b></td>
      <td>Market Ticker</td>
      <td>Latest market ticker data</td>
    </tr>
    <tr>
      <td>Order Book</td>
      <td>Order book depth</td>
    </tr>
    <tr>
      <td>Recent Trades</td>
      <td>Latest trades</td>
    </tr>
    <tr>
      <td>Markets</td>
      <td>Market list</td>
    </tr>
    <tr>
      <td>Market Depth</td>
      <td>Aggregated depth data</td>
    </tr>
    <tr>
      <td>K-Line (OHLC)</td>
      <td>Candlestick data</td>
    </tr>
    <tr>
      <td>Market Summary</td>
      <td>24h market summary</td>
    </tr>
    <tr>
      <td>Ticker</td>
      <td>All market tickers</td>
    </tr>
    <tr>
      <td>WebSocket</td>
      <td>Real-time public streams</td>
    </tr>

    <!-- Assets -->
    <tr>
      <td rowspan="6"><b>Assets</b></td>
      <td>List Currencies</td>
      <td>Currency list</td>
    </tr>
    <tr>
      <td>Assets</td>
      <td>Asset details</td>
    </tr>
    <tr>
      <td>Coin Listings</td>
      <td>Listed coins</td>
    </tr>
    <tr>
      <td>Best Price Conversion</td>
      <td>Price conversion</td>
    </tr>
    <tr>
      <td>Blockchain Networks</td>
      <td>Supported networks</td>
    </tr>
    <tr>
      <td>Get Currency</td>
      <td>Currency details</td>
    </tr>

    <!-- Accounts -->
    <tr>
      <td rowspan="1"><b>Accounts</b></td>
      <td>Member Levels</td>
      <td>User level based on trading activity</td>
    </tr>
  </tbody>
</table>

### 2.  Authenticated API 

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

Before using the Wibeex Exchange API, you may need to be familiar with the following resources:

- **API Documentation**  
  Provides detailed information about each API endpoint, including request methods, parameters, and response results.

- **API Management Console**  
  Offers functionality to generate, manage, and set permissions for API keys.  
  Access it here: https://wibeex.com/api-management

- **Code Examples**  
  JavaScript examples for quick integration.  
  [Place Order Example](/docs/authentication#javascript-example-place-order---post)

  [Get Request Example](/docs/authentication.md#javascript-example)

  [Cancel Order Example](/docs/authentication.md#javascript-example-cancel-order---post)
## Support and Feedback

If you encounter any issues or need further assistance while using the API, feel free to contact the Wibeex Support Team. We are always ready to assist you and provide guidance throughout your development process.

We highly value your feedback. If you have any suggestions or ideas for improving the API documentation, please let us know. We continuously enhance and update our documentation to keep it aligned with the API and your needs.

Thank you for choosing **Wibeex API services**.  
We look forward to seeing you build powerful applications and integrations with our exchange. 

