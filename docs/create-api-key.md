---
sidebar_position: 4
---

# Create API key

Before you request an API key, you need a **Wibeex account**. Register at [Wibeex](https://www.wibeex.com/).

API keys are intended for developers who run **trading bots** or other automation. Barong validates keys on each request.


## Where to create a key

1. Sign in to [Wibeex](https://www.wibeex.com/).  
2. Hover on button right next to Deposit button in top bar and a list will apear click on api management .  
3. Create a key, must  label  and   **IP allowlist**.  
4. contact support for **admin approval** using   chat on wibeex in bottom right of screen.
5. Store the **secret** securely; it is shown only once.

:::warning Treat the secret like a password
Anyone with **kid + secret** can sign requests within the key’s scope. Do not commit secrets to source control.
:::

For bots use only documented trading endpoints.


## Rotating and revoking keys

- Revoke compromised keys in **API Management**.  
- Inactive keys return `authz.apikey_not_active`.
