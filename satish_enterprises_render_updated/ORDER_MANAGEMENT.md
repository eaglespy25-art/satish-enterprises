# Order Management

Added:
- Customer order detail endpoint
- Admin order search
- Status filtering
- Status transition API
- Order status history
- Internal admin notes
- Customer real-time order status events
- Admin real-time order events
- Audit logging for status changes

Statuses:
`payment_pending -> confirmed -> processing -> shipped -> delivered`

Alternative terminal paths:
`cancelled`, `return_requested`, `returned`, `refunded`

The API prevents cancellation after shipment/delivery/return/refund.
