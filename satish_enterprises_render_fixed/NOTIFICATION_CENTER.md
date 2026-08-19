# Customer Notification Center

Implemented:
- In-app notifications
- Unread count
- Mark one read
- Mark all read
- Notification history
- Notification preferences
- Real-time notification events
- Order/return/refund/admin notification triggers

Channels:
- In-app: active
- Email: preference is stored; provider integration is intentionally not hard-coded
- WhatsApp: preference is stored; provider integration requires a WhatsApp Business provider/account

This avoids pretending an email/WhatsApp message was actually delivered when no external messaging provider is configured.
