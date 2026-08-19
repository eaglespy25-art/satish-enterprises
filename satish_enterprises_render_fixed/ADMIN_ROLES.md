# Satish Enterprises Admin Role Matrix

The dashboard now exposes only the workspaces permitted to the logged-in role, and the API independently enforces the same role permissions.

| Role | Dashboard | Orders | Inventory | Products | Customers | Payments | Returns | Refunds | Audit |
|---|---|---|---|---|---|---|---|---|---|
| admin | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| order_manager | ✓ | ✓ | — | — | — | — | ✓ | — | — |
| inventory_manager | ✓ | — | ✓ | ✓ | — | — | — | — | — |
| customer_manager | ✓ | — | — | — | ✓ | — | — | — | — |
| finance_manager | ✓ | — | — | — | — | ✓ | ✓ | ✓ | — |

UI visibility is convenience only; authorization is enforced server-side.

For production, create separate admin accounts and assign the minimum role needed for each employee.
