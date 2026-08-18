# Satish Enterprises Security Hardening

Implemented in this build:
- Helmet security headers
- Strict JSON body limit
- CORS allow-list from `FRONTEND_ORIGIN`
- API rate limiting
- Stricter auth endpoint rate limiting
- bcrypt password hashing
- JWT authentication
- Role validation
- Admin role management
- Self-demotion protection
- Audit log storage and admin viewer
- Razorpay secret remains server-side
- Razorpay webhook signature verification
- COD remains disabled

## Recommended production roles

- `admin` — full control
- `order_manager` — orders
- `inventory_manager` — products/stock
- `customer_manager` — customers
- `finance_manager` — payments/refunds
- `customer` — storefront only

## Cloud protection

DigitalOcean Cloud Firewalls are stateful and block traffic that is not explicitly allowed. For the API Droplet, allow SSH only from trusted administrator IPs where practical, and allow HTTP/HTTPS as required by the reverse proxy. DigitalOcean's current production Droplet guidance recommends Cloud Firewalls and SSH restrictions. citeturn0search11turn0search6

Cloudflare rate limiting can protect login/API endpoints against brute force, credential stuffing, scraping and excessive API use. Configure rules for `/api/auth/login`, `/api/auth/signup`, payment creation and other sensitive endpoints. citeturn0search2turn0search15

## Before going live

- Use strong unique `JWT_SECRET`
- Use a separate strong Razorpay webhook secret
- Keep `.env` out of source control
- Use HTTPS
- Restrict CORS to the real frontend domain
- Configure Cloudflare WAF/rate limits
- Restrict DigitalOcean firewall inbound ports
- Enable database backups/PITR
- Use a non-root deployment user
- Rotate secrets if exposed
- Test admin role boundaries
- Test duplicate webhooks and duplicate refunds
