# Return & Refund Workflow

Customer:
1. Order reaches `delivered`.
2. Customer opens order details.
3. Selects item, quantity and reason.
4. Return request is stored as `pending`.
5. Customer sees return/refund status.

Admin:
1. Reviews return.
2. Approves or rejects.
3. Finance creates Razorpay refund after approval.
4. Razorpay refund webhooks update the final refund state.
5. Customer receives notifications.

Rules:
- Returns cannot be requested before delivery.
- Returned quantity cannot exceed the unreturned quantity.
- A return can only be approved/rejected once.
- A refund cannot be created twice for the same return.
- Refund amount = returned quantity × original unit price.
- COD remains disabled.

Note: A business-specific return window (for example, 7 days) should be configured as a policy before launch; this build does not silently invent a time window.
