---
sidebar_position: 4
---

# User Profile Details

Return the **current user**.

:::info Authentication

**Requires** signing. See [Authentication](../../authentication.md) and [Integration guide](../../integration-guide.md).

:::

:::info Rate limits

Private endpoint—see [Rate limits](../../rate-limits.md).

:::



## HTTP request

```
GET /api/v2/barong/resource/users/me
```


## Request parameters

No query parameters required for **`/me`** route.


## Response fields


| Field | Type | Description |
|-------|------|-------------|
| email | string | User email address |
| uid | string | Unique user identifier |
| role | string | User role (e.g. `admin`, `superadmin`) |
| state | string | Account status (`active`, etc.) |
| level | integer | Verification / access level |
| otp | boolean | Indicates if 2FA is enabled |
| account_type | string | Account type (e.g. `individual`) |
| language | string | User language |
| mode | string | UI mode (`light`, `dark`) |
| referral_uid | string | Referral identifier |
| buy_sell | boolean | Trading enabled flag |
| labels | array | Verification & status labels (e.g. KYC, email, OTP) |
| phones | array | User phone numbers |
| profiles | array | Profile / KYC details |
| sumsub_applicants | array | External KYC provider records |
| created_at | string | Account creation timestamp |
| updated_at | string | Last update timestamp |
| resend_blocked_time | string | OTP resend restriction time |

## Example request

```bash
curl -L "https://wibeex.com/api/v2/barong/resource/users/me" \
  -H "X-Auth-Apikey: YOUR_KID" \
  -H "X-Auth-Nonce: 1730000000000" \
  -H "X-Auth-Signature: YOUR_HEX_SIGNATURE" \
 
```


## Example response

```json
{
  "email": "abduljabbar@alasoft.co",
  "uid": "ID852B549F6C",
  "role": "superadmin",
  "level": 3,
  "otp": true,
  "state": "active",
  "admin_role": "superadmin",
  "account_type": "individual",
  "language": "en",
  "mode": "dark",
  "referral_uid": "ID7435813450",
  "buy_sell": true,
  "data": null,
  "labels": [
    {
      "key": "basic-kyc-level",
      "value": "verified",
      "scope": "private",
      "description": null,
      "created_at": "2025-10-01T07:49:51Z",
      "updated_at": "2025-10-01T10:05:34Z"
    },
    {
      "key": "email",
      "value": "verified",
      "scope": "private",
      "description": null,
      "created_at": "2025-10-01T07:11:24Z",
      "updated_at": "2025-10-01T07:11:24Z"
    },
    {
      "key": "otp",
      "value": "enabled",
      "scope": "private",
      "description": null,
      "created_at": "2026-02-27T05:11:31Z",
      "updated_at": "2026-02-27T05:11:31Z"
    },
    {
      "key": "phone",
      "value": "verified",
      "scope": "private",
      "description": null,
      "created_at": "2025-10-01T07:19:25Z",
      "updated_at": "2025-10-01T07:19:25Z"
    }
  ],
  "phones": [
    {
      "country": "PK",
      "number": "923187684002",
      "validated_at": "2025-10-01T07:19:25.000Z"
    }
  ],
  "profiles": [
    {
      "first_name": "abdul",
      "last_name": "jabar",
      "dob": null,
      "address": "north karachi",
      "gender": null,
      "postcode": "45677",
      "city": "karachi",
      "country": "PK",
      "country_state": "sindh",
      "state": "drafted",
      "metadata": {},
      "created_at": "2025-10-01T07:11:07Z",
      "updated_at": "2025-10-01T07:49:42Z"
    }
  ],
  "sumsub_applicants": [
    {
      "id": "68dcdd1ec1f47de44df47c9b",
      "level": "basic-kyc-level",
      "external_identifier_id": "ID852B549F6C-basic-kyc-level",
      "created_at": "2025-10-01T07:49:51Z",
      "updated_at": "2025-10-01T07:49:51Z"
    }
  ],
  "created_at": "2025-10-01T07:11:06Z",
  "updated_at": "2026-04-07T09:12:34Z",
  "resend_blocked_time": "2026-04-07T09:12:34.644+00:00"
}
```

