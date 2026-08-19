# Shipping & Delivery

Implemented:
- Shipment record per order
- Courier
- AWB/tracking number
- Tracking URL
- Estimated delivery date
- Shipment status
- Customer tracking endpoint
- Public AWB tracking endpoint
- Admin shipment list
- Admin status controls
- Automatic order status updates on shipped/delivered
- Real-time customer/admin shipping events
- Shipping notifications
- Email/WhatsApp delivery hooks

Shipment states:
`ready -> shipped -> in_transit -> out_for_delivery -> delivered`

Exception paths:
`exception`, `returned`

The courier integration is provider-neutral. A courier aggregator/API can be connected later without changing the customer order model.
