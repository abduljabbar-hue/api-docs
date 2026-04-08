---
sidebar_position: 2
---

# Integration Guide

This guide helps you quickly get started with the Wibeex API.


## Get API Key

Before applying for an API key, you need to create an account at Wibeex. If you need assistance, you can contact support using the chat icon available at the bottom-right corner of the Wibeex website.

Once you have your account ready, you can generate the API key in [Developer console](https://wibeex.com/login?redirect=/api-management) to ensure that you have the necessary permissions.

For more details, see [./authentication.md](/docs/authentication.md).


## Prepare for API Calls

Depending on your requirements, select the appropriate API endpoint and refer to the corresponding API documentation to understand the request methods, parameters, and response results.

For details, you can explore the [Module Grouping](/docs/intro.md#module-grouping), and find the corresponding module and its corresponding API endpoint.

## Build Requests

Use the programming language of your choice to construct a request that meets the API requirements, including setting the request method, URL, request headers and parameters, etc.



 :::info

 The base URL of HTTP is:

`https://wibeex.com`

The base URL for public REST, private Peatio, Barong, and WebSocket are different, as follows:

- Public REST:  `https://wibeex.com/api/v2/peatio/public` 
- Private Peatio (signed):  `https://wibeex.com/api/v2/peatio` 
- Barong (signed):  `https://wibeex.com/api/v2/barong` 
- WebSocket (public):  `wss://wibeex.com/api/v2/ranger/public/?stream=...` 

:::

## Authentication parameters

:::info

 HTTP endpoints that require authentication must include the following HTTP header parameters.  
 For detailed usage, refer to the [Authentication](./authentication) section.

- `X-Auth-Apikey` — Your API key  
- `X-Auth-Nonce` — A unique increasing timestamp (in milliseconds)  
- `X-Auth-Signature` — HMAC-SHA256 signature generated using your secret key  

:::

:::info


The server validates each request using the provided nonce.

- The `X-Auth-Nonce` must be **unique and strictly increasing**  
 - Reused or outdated nonce values will result in request rejection  
 - Ensure your system time is synchronized  

:::

:::info

Time-related parameters and response fields follow these formats:

 - Authentication uses **milliseconds (nonce)**  
 - Public API parameters (e.g. `timestamp`) use **seconds**  

:::
## Response Processing


After receiving a response from the API, parse the returned data and handle it accordingly.


### HTTP Response Processing

First, check the HTTP status code:

- `200` → Request successful  
- Other → Request failed  

If the status code is `200`, the response body will usually contain the requested data directly.

Example:

```json
[
  {
    "id": 123,
    "price": "65000",
    "volume": "0.1"
  }
]

```


For detailed error descriptions, please refer to Error Handling [./error-handling.md](/docs/error-handling.md).

### WebSocket Response Processing

When using WebSocket APIs, you should first handle the response to your subscription request.

After sending a subscription request, the server returns a confirmation message:

```json
{
  "success": {
    "message": "subscribed",
    "streams": ["btcusdt.trades"]
  }
}

```

After a successful subscription, the server will push the data when it is updated, and the pushed data can be processed according to your needs.

For specific error explanations, please refer to Error Handling [./error-handling.md](/docs/error-handling.md).



## Security Considerations

:::warning

 Ensure that HTTPS protocol is used for data transmission in API calls. Additionally, securely manage your API keys to prevent any leakage. The importance of API keys is equivalent to that of your account password. To ensure your account and asset security, please manage and regularly update your keys appropriately. Once you lose your secret key, please go to Wibeex to remove the secret key in time. Enable 2FA on your account when required by Barong (otherwise you may encounter `authz.disabled_2fa` errors).

:::
