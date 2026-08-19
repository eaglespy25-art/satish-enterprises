SATISH ENTERPRISES - BACKEND DEPLOYMENT FIX

What this fixes:
- Uses Render's assigned process.env.PORT.
- Listens on 0.0.0.0 so Render can reach the service.
- Adds /api/health and /api/status.
- Serves the existing website from the repository.
- Does not expose PORT or secrets in the customer-facing page.

IMPORTANT:
This is a deployment/backend patch. Keep your existing product, payment,
email and WhatsApp source files unless you know they should be replaced.

GitHub upload:
1. Upload/replace src/server.js.
2. Upload/replace package.json.
3. Optional: add render.yaml.
4. Commit the changes.
5. In Render, make sure Start Command is:
   node src/server.js
6. Let Render deploy.
7. Test:
   /api/health

Expected response:
{"ok":true,"status":"online","service":"satish-enterprises-api"}

Do NOT put PORT=4000 into the visible website.
Render supplies PORT automatically.
