---
sidebar_position: 1
---

# API Introduction

Welcome to the **Wibeex Exchange API documentation**.

This documentation provides developers with detailed information on how to integrate and interact with the Wibeex exchange. Using the API, developers can build trading applications, automate trading strategies, and integrate exchange functionality into their systems.

The Wibeex API is designed to be secure, reliable, and flexible for both individual developers and institutional trading platforms.

---

## API Documentation Structure

Our API documentation is organized into the following sections:

**API Introduction**  
Provides an overview of the API and explains how the documentation is structured.

**Integration Guide**  
Explains how developers can start integrating with the API and outlines best practices.

**Authentication**  
Describes how to create an API key and authenticate API requests.

**Rate Limit**  
Provides information about request limits and how to safely interact with the API.

**Error Handling**  
Lists common API error codes and recommended handling methods.

**Enumeration of Definitions**  
Provides definitions and enumeration values used across different API endpoints.

**FAQ**  
Answers frequently asked questions related to API usage and integration.

---

## API Base URL

Wibeex provides services through both **HTTP REST APIs** and **WebSocket APIs**.

### REST API

The base URL for the REST API is:

```
https://api.wibeex.com/v2
```

REST endpoints are used for requests such as retrieving balances, creating orders, and managing account information.

---

### WebSocket API

WebSocket endpoints provide **real-time market updates**.

Example WebSocket endpoints:

```
wss://socket.wibeex.com/v2/spot
wss://socket.wibeex.com/v2/futures
```

WebSocket APIs are recommended for applications that require real-time market data such as trading bots or trading dashboards.

---

## Authentication and Security

To ensure the security of trading operations and account information, authenticated API endpoints require an **API key**.

Before using authenticated APIs, users must create an API key from the exchange dashboard.

### API Key Creation Process

1. Log in to the exchange account.
2. Navigate to the **API Management** section.
3. Create a new API key.
4. Submit the API key request.

For security reasons, API keys are **not activated immediately**.  
Each API key must be **approved by an administrator** before it can be used.

Each user account can create a maximum of:

```
5 API keys
```

---

## Allowed API Endpoints

API keys are restricted to specific endpoints for security purposes.

The following endpoints are allowed when using an API key:

```
/api/v2/peatio/market/orders
/api/v2/peatio/market/orders/cancel
/api/v2/peatio/account/balances
/api/v2/barong/resource/users/me
```

### Endpoint Description

| Endpoint | Description |
|--------|--------|
| `/api/v2/peatio/market/orders` | Create a new order |
| `/api/v2/peatio/market/orders/cancel` | Cancel an existing order |
| `/api/v2/peatio/account/balances` | Retrieve account balances |
| `/api/v2/barong/resource/users/me` | Retrieve authenticated user information |

Requests to endpoints outside this list will be rejected.

---

## Module Grouping

The Wibeex API is grouped according to business modules.

| Module | Description |
|------|------|
| Account | Retrieve account information |
| Assets | Manage balances and asset information |
| Market | Access market data such as tickers and trades |
| Orders | Create and cancel orders |
| WebSocket | Real-time market data streams |

---

## Related Resources

Before integrating with the API, developers may find the following resources useful:

**API Documentation**  
Provides detailed information about each API endpoint including parameters and response structures.

**API Management Console**  
Allows users to generate and manage API keys.

**Sample Code**  
Example implementations demonstrating how to interact with the API.

---

## Support and Feedback

If you encounter any issues while integrating with the API, please contact our **support team**.

We welcome feedback and suggestions that help improve the developer experience and documentation.

Our documentation will continue to evolve alongside the API to ensure it remains accurate and useful.

---

Thank you for using the **Wibeex Exchange API**.  
We look forward to seeing the applications and trading tools you build.