# Real-time synchronization

Implemented:
- Server-Sent Events (SSE) from `/api/events`
- Customer order confirmation events
- Customer account/address refresh events
- Admin order-change events
- Admin payment-change events
- 15-second fallback refresh when the browser tab is visible
- Automatic SSE reconnect after connection loss

Flow:
`Razorpay webhook -> PostgreSQL -> SSE -> customer/admin UI`

The browser still refreshes periodically as a fallback so the application remains usable if an SSE connection is interrupted.

## Security note

The current SSE implementation accepts the short-lived JWT in the query string because native browser `EventSource` cannot set an Authorization header. In production, prefer an HttpOnly session cookie or a dedicated short-lived SSE ticket endpoint so access tokens do not appear in URLs/logs. This package keeps the access token short-lived (7 days currently) but should be changed to a dedicated SSE ticket before live deployment.
