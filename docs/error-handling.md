---
sidebar_position: 7
---
# Error Handling

Handle responses in the following order:

1. Check the **HTTP status**
2. Parse the response body
3. Handle success or error based on the structure returned

---

## HTTP Responses (REST)

### Step-by-step handling

1. Verify the HTTP **status code**
   - `2xx` → request successful  
   - `4xx / 5xx` → request failed  

2. Parse the JSON response body

3. Handle response:
   - Successful responses return **data**
   - Error responses return **error details**

---

## Success Responses

Successful responses typically return data in the response body.

### Barong API key errors

Authorization failures from Barong often return a JSON body with an **`errors`** array of string codes, for example:

```json
{ "errors": ["authz.invalid_signature"] }
```

Common Barong codes for API key flows:

| Code | Typical cause |
|------|----------------|
| `authz.invalid_api_key_headers` | Missing/blank `X-Auth-*` header. |
| `authz.nonce_not_valid_timestamp` | Nonce not a positive timestamp. |
| `authz.nonce_expired` | Nonce outside `apikey_nonce_lifetime` vs server time. |
| `authz.invalid_signature` | HMAC does not match `APIKeysVerifier`. |
| `authz.unexistent_apikey` | Unknown `kid`. |
| `authz.apikey_not_active` | Key disabled. |
| `authz.apikey_not_approved` | Key pending approval. |
| `authz.ip_not_allowed` | Request IP not on key allowlist. |
| `authz.apikey_scope_not_allowed` | Path not allowed for key scope (check **`Path`** header and `trade` allow list). |
| `authz.disabled_2fa` | Account must enable 2FA for API key use. |

Common HTTP status codes:

| HTTP status | Typical meaning |
|-------------|-----------------|
| 400 | Bad request (invalid parameters). |
| 403 | Forbidden (action not allowed for this key—for example withdraw via API). |
| 404 | Resource not found. |
| 429 | Rate limited. |
| 500 | Server error—retry later. |

---

## WebSocket (WS) Response Processing

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
4. After a successful subscription, the server **pushes** updates; handle each message according to the stream type (see **Spot → WebSocket** in the navbar).

---

## Application error codes

Non-zero `code` values are exchange-specific. Document or log the pair `(code, message)` when integrating. Typical categories include:

- Authentication / signature / timestamp  
- Invalid market or precision  
- Insufficient balance  
- Order rejected or not found  
- Rate limiting

Refer to your server’s latest error catalog if published separately.

---

## Related


- [Rate limits](./rate-limits.md)
