import express from "express";

const app = express();
app.use(express.json());

const items = [
  { id: 1, name: "Security Policy" },
  { id: 2, name: "CI/CD Gate" }
];

// Endpoint 1: Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Endpoint 2: List items
app.get("/api/items", (req, res) => {
  res.status(200).json({ count: items.length, items });
});

export default app;