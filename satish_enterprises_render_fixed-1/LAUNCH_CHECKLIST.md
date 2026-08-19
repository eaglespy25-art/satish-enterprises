# Satish Enterprises — Launch Checklist

## Accounts
- [ ] Register/confirm `satishenterprises.store`
- [ ] Create DigitalOcean account
- [ ] Create Droplet
- [ ] Create Managed PostgreSQL
- [ ] Create Cloudflare account
- [ ] Add `satishenterprises.store` to Cloudflare
- [ ] Update domain nameservers at registrar

## Server
- [ ] Add SSH key
- [ ] Configure firewall
- [ ] Install Docker
- [ ] Copy production package
- [ ] Create `.env`
- [ ] Start Docker Compose
- [ ] Confirm `/api/health`

## Domain
- [ ] Add A record for `@`
- [ ] Add A record for `www`
- [ ] Verify DNS
- [ ] Configure origin certificate
- [ ] Set Cloudflare SSL/TLS to Full (strict)
- [ ] Verify HTTPS

## Commerce
- [ ] Configure Razorpay LIVE keys
- [ ] Configure Razorpay webhook secret
- [ ] Test online payment
- [ ] Confirm COD is disabled
- [ ] Verify XL/XXL variants
- [ ] Verify Black/Red/Yellow colours
- [ ] Verify stock deduction
- [ ] Verify order confirmation
- [ ] Verify shipment tracking
- [ ] Verify return request
- [ ] Verify refund
- [ ] Verify customer notifications

## Messaging
- [ ] Verify Resend sending domain
- [ ] Configure WhatsApp Business
- [ ] Approve required WhatsApp templates
- [ ] Test email
- [ ] Test WhatsApp

## Safety
- [ ] Verify backups
- [ ] Test restore
- [ ] Verify admin roles
- [ ] Verify audit logs
- [ ] Verify rate limits
- [ ] Verify secrets are not committed
- [ ] Run final customer checkout test
