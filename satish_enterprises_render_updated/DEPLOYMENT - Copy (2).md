# Satish Enterprises deployment checklist

## 1. Server
Use a VPS/cloud server with Node.js 20+ or Docker. Point your domain DNS A/AAAA record to the server.

## 2. HTTPS
Put the API behind HTTPS with a valid TLS certificate. Live Razorpay checkout requires HTTPS, and the webhook endpoint must be publicly accessible.

## 3. Secrets
Copy `.env.production.example` to `.env` and replace every placeholder. Never commit `.env`.

## 4. Start
Docker:
`docker compose up -d --build`

Without Docker:
`npm ci --omit=dev`
`npm start`

## 5. Razorpay
Start in Test Mode. Generate Test API keys in Razorpay Dashboard. Test the complete payment flow before switching to Live Mode.

For Live Mode:
- complete Razorpay KYC/business verification
- replace test keys with live keys
- configure payment capture/auto-capture
- set webhook URL to:
  `https://YOUR-DOMAIN.example/api/payments/razorpay/webhook`
- use a strong webhook secret
- subscribe at minimum to `payment.captured`, `payment.failed`, and `order.paid`; add refund events used by the application.

## 6. Frontend
Serve `app.html` from HTTPS. Set browser localStorage key `se_api` to the HTTPS API base URL if frontend and API are on different hosts.

## 7. Security before live launch
- Do not expose `RAZORPAY_KEY_SECRET`.
- Use HTTPS everywhere.
- Restrict CORS to the real frontend origin.
- Add rate limiting/WAF.
- Add backups for the database.
- Add structured logs and monitoring.
- Rotate secrets if exposed.
- Test failed, duplicate, delayed and refunded payments.
- Verify inventory cannot be deducted twice.
- Verify refund cannot be issued twice.

Razorpay's current Standard Checkout documentation says server-side order creation, server-side signature verification, webhooks and payment capture are required parts of a safe integration. It also says the Key Secret must remain server-side and Live Mode requires HTTPS. citeturn0search0turn0search6
