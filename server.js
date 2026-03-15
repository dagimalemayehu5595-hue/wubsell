const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const ORDERS_FILE = path.join(DATA_DIR, "orders.json");

function ensureOrdersFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(ORDERS_FILE)) {
    fs.writeFileSync(ORDERS_FILE, "[]");
  }
}

function readOrders() {
  ensureOrdersFile();
  return JSON.parse(fs.readFileSync(ORDERS_FILE, "utf8"));
}

function writeOrders(orders) {
  ensureOrdersFile();
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/inquiry", (req, res) => {
  const { name, contact, product, details } = req.body || {};

  if (!name || !contact || !product) {
    return res.status(400).json({
      ok: false,
      message: "Please fill in your name, contact, and product choice.",
    });
  }

  const newInquiry = {
    id: Date.now().toString(),
    name,
    contact,
    product,
    details: details || "",
    createdAt: new Date().toISOString(),
  };

  const orders = readOrders();
  orders.unshift(newInquiry);
  writeOrders(orders);

  console.log("New Wubshell inquiry:", newInquiry);

  return res.json({
    ok: true,
    message:
      "Your request has been received. Wubshell will follow up on Instagram, TikTok, or email with your custom order details.",
  });
});

app.get("/api/inquiries", (_req, res) => {
  const orders = readOrders();
  res.json({ ok: true, orders });
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/gallery", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "gallery.html"));
});

app.get("/order", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "order.html"));
});

app.get("/admin", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Wubshell Studio is running on http://localhost:${PORT}`);
});
