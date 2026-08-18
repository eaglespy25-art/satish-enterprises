# Satish Enterprises — Production Deployment

## Recommended architecture

Cloudflare
  -> HTTPS
  -> DigitalOcean Droplet
  -> Nginx
  -> Node.js API container
  -> DigitalOcean Managed PostgreSQL

Razorpay webhooks -> `/api/payments/razorpay/webhook`

Resend / WhatsApp -> outbound provider APIs

## 1. Create infrastructure

Create:
- DigitalOcean Droplet (same region as the PostgreSQL cluster)
- DigitalOcean Managed PostgreSQL
- Domain on Cloudflare

DigitalOcean recommends using managed PostgreSQL with trusted sources/TLS and keeping the database close to the application region. Cloud Firewalls should restrict inbound access. citeturn0search17turn0search11

## 2. Configure database

Copy `.env.production.template` to `.env` and set `DATABASE_URL`.

Never commit `.env`.

The API creates the initial schema at startup. For future schema evolution, introduce versioned migrations before making frequent production schema changes.

## 3. Configure secrets

Generate a strong JWT secret, then configure:
- Razorpay live credentials
- Razorpay webhook secret
- Resend API key + verified sender
- WhatsApp Business Cloud API credentials

Keep all provider secrets server-side.

## 4. Cloudflare

Create DNS records for the production domain pointing to the Droplet.

Use Cloudflare HTTPS. Once the origin has a valid certificate, use Full (strict) mode.

Protect sensitive endpoints with WAF/rate limiting, especially:
- `/api/auth/login`
- `/api/auth/signup`
- `/api/orders/draft`
- `/api/payments/razorpay/verify`
- `/api/payments/razorpay/webhook`

Cloudflare documents rate limiting for protecting login/API endpoints. citeturn0search2turn0search15

## 5. TLS / Nginx

The included Nginx config starts on port 80. For production HTTPS, terminate TLS at Cloudflare or install a valid origin certificate and expose 443.

Do not expose PostgreSQL publicly.

## 6. Start

```bash
docker compose -f docker-compose.production.yml up -d --build
```

Check:

```bash
curl https://satishenterprises.store/api/health
```

Expected response contains:

```json
{"ok":true,"service":"Satish Enterprises API","database":"postgresql"}
```

## 7. Razorpay webhook

Configure Razorpay webhook URL:

`https://satishenterprises.store/api/payments/razorpay/webhook`

Set the same webhook secret in `RAZORPAY_WEBHOOK_SECRET`.

Test:
- payment captured
- order confirmation
- inventory deduction
- duplicate webhook handling
- refund processed

## 8. Backups

Enable managed PostgreSQL backups/PITR.

Also periodically export a logical backup to separate storage. Do not store backups only on the application Droplet.

## 9. Pre-launch checklist

- [ ] Domain DNS correct
- [ ] HTTPS working
- [ ] Cloudflare Full (strict)
- [ ] PostgreSQL TLS working
- [ ] PostgreSQL trusted sources restricted
- [ ] DigitalOcean firewall enabled
- [ ] SSH restricted to trusted IPs where possible
- [ ] `.env` not committed
- [ ] Razorpay live keys configured
- [ ] Razorpay webhook tested
- [ ] Resend domain verified
- [ ] WhatsApp business credentials/templates configured
- [ ] Admin account created
- [ ] Role permissions tested
- [ ] Product/variant stock verified
- [ ] XL/XXL petticoat variants verified
- [ ] COD disabled
- [ ] Return/refund workflow tested
- [ ] Shipping/AWB workflow tested
- [ ] Customer account tested
- [ ] Analytics tested
- [ ] Backup/PITR verified
- [ ] Health check monitored

## Important

This package is deployment-ready, but it cannot be genuinely put online without your own domain, cloud account, database credentials, payment credentials and messaging-provider credentials. Those secrets are intentionally not included.
