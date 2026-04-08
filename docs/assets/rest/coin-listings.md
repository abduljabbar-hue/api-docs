---
sidebar_position: 5
---

# Coin Listings

Retrieve a list of available coin listings on the exchange.

This endpoint returns information about coins that are visible and available on the platform.


## HTTP Request

```
GET /api/v2/peatio/public/coin_listings/listing
```

## Query Parameters

| Parameter | Required | Type | Description |
|----------|----------|------|-------------|
| network | false | string | Filter listings by blockchain network |
| page | false | integer | Page number for paginated results |
| limit | false | integer | Number of records per page |

## Response Fields

| Field | Type | Description |
|------|------|-------------|
| id | integer | Listing identifier |
| date | string | Listing start date |
| stage_end_date | string | Listing end date |
| project_owner_name | string | Project owner name |
| project_name | string | Project name |
| project_description | string | Description of the project |
| project_email | string | Project contact email |
| token_name | string | Token full name |
| symbol | string | Token symbol |
| network | string | Blockchain network (e.g. `bsc-mainnet`) |
| token_address | string | Token contract address |
| decimal | integer | Token decimal precision |
| soft_cap | string | Minimum funding target |
| hard_cap | string | Maximum funding target |
| total_supply | string | Total token supply |
| min_buy_limit | number | Minimum buy limit |
| max_buy_limit | number | Maximum buy limit |
| public_sale_token_price | string | Token sale price |
| total_participants | integer | Number of participants |
| total_commited | string | Total committed amount |
| total_committed_usdt | string | Total committed in USDT |
| total_committed_usdc | string | Total committed in USDC |
| price_precision | integer | Price precision |
| amount_precision | integer | Amount precision |
| field_precision | integer | Field precision |
| state | string | Listing status (`released`, etc.) |
| created_at | string | Creation timestamp |
| updated_at | string | Last update timestamp |
| token_usd_price | string | Token price in USD |
| metadata | object | Additional project metadata |


### metadata (object)

| Field | Type | Description |
|------|------|-------------|
| icon | string | Project icon URL |
| whitepaper | string | Whitepaper URL |
| tokenomics | string | Tokenomics document URL |
| incorporation_documents | string | Legal documents |


## Example Request

```bash
curl "https://wibeex.com/api/v2/peatio/public/coin_listings/listing?network=bsc-mainnet&page=1&limit=1"
```

## Example Response

```json
[
    {
        "id": 202,
        "date": "2025-11-21T12:53:00.000Z",
        "stage_end_date": "2025-11-21T13:21:23.000Z",
        "project_owner_name": "Artificial Superintelligence Alliance Owner",
        "project_name": "Artificial Superintelligence Alliance Poject ",
        "project_description": "descriptpipn",
        "project_email": "abduljabbar@alasoft.co",
        "social_media_links": {},
        "token_name": "ArtificialSuperintelligenceAlliance",
        "network": "bsc-mainnet",
        "symbol": "fet",
        "decimal": 18,
        "soft_cap": "2.0",
        "hard_cap": "4.0",
        "total_supply": "4.0",
        "min_buy_limit": 2.0,
        "max_buy_limit": 4.0,
        "public_sale_token_price": "0.2849",
        "key_incubators": "one,two",
        "advisors": null,
        "token_address": "0x031b41e504677879370e9dbcf937283a8691fa7f",
        "major_investors": null,
        "partners": null,
        "metadata": {
            "icon": "https://prod-wibeex.s3.ap-south-1.amazonaws.com/prod-wibeex/uploads/document/upload/856/RackMultipart20251121-15-bt8p04.png",
            "whitepaper": "https://prod-wibeex.s3.ap-south-1.amazonaws.com/prod-wibeex/uploads/document/upload/857/RackMultipart20251121-15-fqqagb.pdf",
            "tokenomics": "https://prod-wibeex.s3.ap-south-1.amazonaws.com/prod-wibeex/uploads/document/upload/858/RackMultipart20251121-15-z94ajv.pdf",
            "incorporation_documents": "https://prod-wibeex.s3.ap-south-1.amazonaws.com/prod-wibeex/uploads/document/upload/859/RackMultipart20251121-15-yzhekh.pdf"
        },
        "amount_precision": 8,
        "field_precision": 8,
        "total_participants": 1,
        "total_commited": "1.1396",
        "total_committed_usdt": "1.1396",
        "total_committed_usdc": "0.0",
        "price_precision": 8,
        "state": "released",
        "user_bid_status": null,
        "commited_mnt": null,
        "created_at": "2025-11-21T12:53:41Z",
        "updated_at": "2025-11-21T13:21:23Z",
        "token_usd_price": "0.284885675228",
        "admin_description": null,
        "others": null
    }
]
```


## Notes

- Only **visible listings** are returned.
- Listings with states `offline`, `rejected`, `pending`, or `cancelled` are excluded.
- Pagination parameters can be used to control the number of results returned.
- Results are ordered by **latest listings first**.