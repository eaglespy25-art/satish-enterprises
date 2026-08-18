# Satish Enterprises — Render

Repository:
https://github.com/eaglespy25-art/satish-enterprises

Runtime: Node
Build: npm install
Start: node src/server.js
Health check: /api/health

Required environment variables:
NODE_ENV=production
PORT=4000
FRONTEND_ORIGIN=https://satishenterprises.store
JWT_SECRET=<Render generated secret>
DATABASE_URL=<Render PostgreSQL Internal Database URL>
RAZORPAY_KEY_ID=<Razorpay Test key initially>
RAZORPAY_KEY_SECRET=<Razorpay Test secret initially>
RAZORPAY_WEBHOOK_SECRET=<set when webhook is configured>
RESEND_API_KEY=<Resend API key>
EMAIL_FROM=Satish Enterprises <no-reply@satishenterprises.store>
WHATSAPP_ACCESS_TOKEN=<Meta token>
WHATSAPP_PHONE_NUMBER_ID=<Meta phone number ID>
WHATSAPP_GRAPH_VERSION=v23.0

Never commit .env or real secrets to GitHub.
