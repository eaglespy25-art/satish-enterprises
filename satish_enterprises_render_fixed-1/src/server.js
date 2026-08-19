const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;
const ROOT = path.join(__dirname, "..");

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "satish-enterprises",
    environment: process.env.NODE_ENV || "development"
  });
});

app.use(express.static(ROOT, {
  index: "app.html",
  extensions: ["html"]
}));

app.get("*", (req, res) => {
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ error: "API route not found" });
  }
  res.sendFile(path.join(ROOT, "app.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Satish Enterprises server listening on port ${PORT}`);
});
