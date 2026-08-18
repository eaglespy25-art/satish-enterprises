# satishenterprises.store — Cloudflare DNS Setup

## DNS records

After the DigitalOcean server receives its public IPv4 address, create:

| Type | Name | Target | Proxy |
|---|---|---|---|
| A | @ | YOUR_DIGITALOCEAN_IPV4 | Proxied |
| A | www | YOUR_DIGITALOCEAN_IPV4 | Proxied |

The final public URLs will be:
- https://satishenterprises.store
- https://www.satishenterprises.store

## SSL/TLS

Cloudflare:
1. SSL/TLS → Overview → **Full (strict)**
2. Enable Always Use HTTPS
3. Enable Automatic HTTPS Rewrites
4. Enable HSTS only after HTTPS is verified end-to-end.

## Origin

Install a valid origin certificate on the DigitalOcean server before switching to Full (strict). Do not expose PostgreSQL to the public internet.

## Firewall

Allow:
- TCP 22 only from your administration IPs where practical
- TCP 80
- TCP 443

Do not expose:
- PostgreSQL port 5432
- Node.js port 4000

The Node.js API should be reachable only through Nginx.

## Razorpay webhook

After HTTPS is live:

`https://satishenterprises.store/api/payments/razorpay/webhook`

## Health check

`https://satishenterprises.store/api/health`
