---
sidebar_position: 1
---

# Member Levels

Retrieve the minimum member level required for deposit, withdrawal, and trading actions.

This endpoint allows applications to determine the required account verification level before performing specific operations.

This is a **public endpoint**.

---

## HTTP Request

```
GET api/v2/peatio/public/member-levels
```

---

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| deposit.minimum_level | integer | Minimum member level required to deposit |
| withdraw.minimum_level | integer | Minimum member level required to withdraw |
| trading.minimum_level | integer | Minimum member level required to trade |

---

## Example Request

```bash
curl https://wibeex.com/api/v2/peatio/public/member-levels
```

---

## Example Response

```json
{
  "deposit": {
    "minimum_level": 1
  },
  "withdraw": {
    "minimum_level": 3
  },
  "trading": {
    "minimum_level": 3
  }
}
```

---

## Notes

- Member levels correspond to the user's account verification or KYC level.
- Some operations may require higher levels depending on exchange policy.