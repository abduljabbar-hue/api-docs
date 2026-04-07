---
sidebar_position: 3
---

# Authentication

## User Guide: HTTP Endpoint Authentication Process

The following is a guide for the authentication process of the HTTP endpoints on the **Wibeex exchange**.

### Step 1: Obtain API key

Before making authenticated requests, you need to create an API key.

1. Sign in to [Wibeex](https://www.wibeex.com/).  
2. Hover on button right next to Deposit button in top bar and a list will apear click on api management .  
3. Create a key, must  label  and   **IP allowlist**.  
4. contact support for **admin approval** using   chat on wibeex in bottom right of screen.
5. Store the **secret** securely; it is shown only once.

:::warning Treat the secret like a password
Anyone with **kid + secret** can sign requests within the key’s scope. Do not commit secrets to source control.
:::


### Step 2: Generate Authentication Parameters

For authenticated HTTP requests, you must generate the following parameters:

* **Nonce**: A unique numeric value (typically a millisecond timestamp).
* **Signature**: An HMAC-SHA256 hash used to verify request integrity.

#### 1. Generate Nonce
The `nonce` must be a unique numeric value for every request. In Wibeex, the nonce is typically the current timestamp in milliseconds, and it must always be **strictly increasing**.

*Example:* `1700490703564`

#### 2. Generate Signature Payload
Construct the payload by concatenating the nonce and the API key as a single string.

*Example:* `1700490703564your_api_key`

#### 3. Generate Signature
Use your **Secret Key** as the signing key and generate an **HMAC-SHA256** signature from the payload string. The result should be formatted as a **lowercase hexadecimal string**.

---

### Step 3: Build Authentication Request

Include the generated values in the following request headers:

| Header | Description |
| :--- | :--- |
| **X-Auth-Apikey** | The API key obtained from API Management |
| **X-Auth-Nonce** | The unique, strictly increasing nonce |
| **X-Auth-Signature** | The HMAC-SHA256 signature (`nonce + apiKey`) |


### JavaScript Example

```javascript
import axios from "axios";

const apiKey = "your_api_key"
const secretKey= "your_secret_key"

import crypto from "crypto";




// generate nonce
const nonce = Date.now().toString();

// create payload
const payload = nonce + apiKey;

// generate signature
const signature = crypto
  .createHmac("sha256", secretKey)
  .update(payload)
  .digest("hex");

console.log(signature)


// ✅ Build URL with correct query params
const baseURL = "https://staging.wibeex.com/api/v2/peatio/account/balances";
const params = new URLSearchParams({
  hide_zero: true,      
  page: "1",
  limit: "10",
  name:"Ethe"
});

const fullURL = `${baseURL}?${params.toString()}`;

console.log("Request URL:", fullURL);


// // send request
async function accountBalances() {
  try {
    const response = await axios.get(
      fullURL,
      {
        headers: {
          "X-Auth-Apikey": apiKey,
          "X-Auth-Nonce": nonce,
          "X-Auth-Signature": signature,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Balances:", response.data[0]);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

accountBalances();

```

### JavaScript Example (Place Order - POST)

```javascript
import crypto from "crypto";
import axios from "axios";

const apiKey = "your_api_key";
const secretKey = "your_secret_key";

// order data
const order = {
  market: "btcusdt",
  side: "buy",
  volume: "0.001",
  ord_type: "limit",
  price: "65000.12"
};

// generate nonce
const nonce = Date.now().toString();

// create payload
const payload = nonce + apiKey;

// generate signature
const signature = crypto
  .createHmac("sha256", secretKey)
  .update(payload)
  .digest("hex");

// send request
async function placeOrder() {
  try {
    const response = await axios.post(
      "https://wibeex.com/api/v2/peatio/market/orders",
      order,
      {
        headers: {
          "X-Auth-Apikey": apiKey,
          "X-Auth-Nonce": nonce,
          "X-Auth-Signature": signature,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Order Placed:", response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

placeOrder();


```
### JavaScript Example (Cancel Order - POST)


```javascript
import axios from "axios";

const apiKey = "your_api_key"
const secretKey= "your_secret_key"

import crypto from "crypto";


//cancel buy orders for btcusdt market
const cancel_order_params = {
  "market": "btcusdt",
  "side": "sell", 
  }

// generate nonce
const nonce = Date.now().toString();

// create payload
const payload = nonce + apiKey;

// generate signature
const signature = crypto
  .createHmac("sha256", secretKey)
  .update(payload)
  .digest("hex");

console.log(signature)
// // send request
async function cancelOrder() {
  try {
    const response = await axios.post(
      "https://staging.wibeex.com/api/v2/peatio/market/orders/cancel",
     cancel_order_params ,
      {
        headers: {
          "X-Auth-Apikey": apiKey,
          "X-Auth-Nonce": nonce,
          "X-Auth-Signature": signature,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Order Placed:", response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

cancelOrder();