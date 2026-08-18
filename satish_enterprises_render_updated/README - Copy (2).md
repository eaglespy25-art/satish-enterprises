# Satish Enterprises Production v2 — Payments & Refunds

Added:
- Admin payment ledger
- Admin return/refund queue
- Razorpay refund API call after an approved return
- Refund table and status tracking
- Refund webhook handling: `refund.created`, `refund.processed`, `refund.failed`
- Customer refund notifications
- Duplicate refund protection
- Amount derived from returned quantity × order-item unit price

Razorpay documents the payment refund API and refund webhook events. Refund events include `refund.created`, `refund.processed`, and `refund.failed`; webhook signatures should be verified using the raw request body. citeturn0search4turn0search0turn0search8

For production, configure the Razorpay webhook on a public HTTPS endpoint and subscribe to refund events. Razorpay notes that webhooks are server-to-server and public URLs are required. citeturn0search2turn0search5

Files:
- `src/server.js` — API + payment/refund logic
- `src/db.js` — database schema
- `checkout.html` — customer checkout
- `refunds.html` — admin payments/refunds dashboard
