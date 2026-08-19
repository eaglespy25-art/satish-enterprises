const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Basic CORS support. Render serves the frontend and backend from the same
// service in this setup, so same-origin requests work without configuration.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// Health/status endpoints used by the frontend and Render checks.
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    status: "online",
    service: "satish-enterprises-api"
  });
});

app.get("/api/status", (_req, res) => {
  res.status(200).json({
    ok: true,
    backend: "online",
    port: PORT
  });
});

// Simple API config endpoint. Keep secrets out of frontend code.
app.get("/api/config", (_req, res) => {
  res.status(200).json({
    ok: true,
    paymentProvider: process.env.RAZORPAY_KEY_ID ? "razorpay" : "not-configured"
  });
});

// Serve the existing website files from the repository.
// This supports either a root index.html or a public/ directory.
const publicDir = path.join(process.cwd(), "public");
const rootDir = process.cwd();

if (require("fs").existsSync(publicDir)) {
  app.use(express.static(publicDir));
}
app.use(express.static(rootDir));

// SPA fallback, only when an index.html exists.
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next();

  const publicIndex = path.join(publicDir, "index.html");
  const rootIndex = path.join(rootDir, "index.html");

  if (require("fs").existsSync(publicIndex)) return res.sendFile(publicIndex);
  if (require("fs").existsSync(rootIndex)) return res.sendFile(rootIndex);

  res.status(404).send("Website files not found.");
});

// JSON 404 for API routes.
app.use("/api", (_req, res) => {
  res.status(404).json({ ok: false, error: "API route not found" });
});

// Final error handler.
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "Internal server error" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Satish Enterprises API listening on port ${PORT}`);
});
