const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());             
app.use(express.json());     

let items = [
  { id: 1, name: "First item", done: false },
  { id: 2, name: "Second item", done: true },
];

app.get("/", (req, res) => {
  res.send("Welcome to Express Server 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});

app.get("/api/items", (req, res) => {
  res.json({ items });
});

app.post("/api/items", (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Name is required" });
    }
    const newItem = { id: Date.now(), name: name.trim(), done: false };
    items.push(newItem);
    res.status(201).json({ item: newItem });
  } catch (err) {
    next(err);
  }
});

app.get("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = items.find((it) => it.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json({ item });
});

app.put("/api/items/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, done } = req.body;

    const idx = items.findIndex((it) => it.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: "Item not found" });
    }

    if (typeof name === "string") items[idx].name = name.trim();
    if (typeof done === "boolean") items[idx].done = done;

    res.json({ item: items[idx] });
  } catch (err) {
    next(err);
  }
});

app.delete("/api/items/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const before = items.length;
    items = items.filter((it) => it.id !== id);

    if (items.length === before) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err && err.stack ? err.stack : err);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`✅ Express server running at http://localhost:${PORT}`);
});
