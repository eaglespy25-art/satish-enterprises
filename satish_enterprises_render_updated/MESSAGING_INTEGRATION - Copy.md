# Satish Enterprises — Email + WhatsApp

## Email: Resend
The backend now includes Resend server-side transactional email. Configure `RESEND_API_KEY` and a verified `EMAIL_FROM`. Resend documents Node/Express sending and supports idempotency keys for duplicate-request protection. citeturn0search3turn0search5turn0search0

## WhatsApp
A server-side WhatsApp Business Cloud API adapter is included. Configure `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, and `WHATSAPP_GRAPH_VERSION`.

For production WhatsApp messaging, use the approved business/transactional templates required by the applicable Meta messaging rules. Keep the access token server-side.

## Events
- Order status changed
- Return approved/rejected
- Refund initiated

Each provider attempt is stored in `message_deliveries` with status, provider ID and error information. No credentials are included in this package.
