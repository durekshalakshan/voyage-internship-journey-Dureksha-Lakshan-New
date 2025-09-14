const express = require("express");
const cors = require("cors");
const { body, param, validationResult } = require("express-validator");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 }
];

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}

app.get("/", (req, res) => res.send("Books API root. Use /api/books"));

// GET 
app.get("/api/books", (req, res) => {
  const q = (req.query.q || "").toLowerCase().trim();
  if (!q) return res.json({ books });
  const filtered = books.filter(b => (b.title + " " + b.author).toLowerCase().includes(q));
  res.json({ books: filtered });
});

// GET 
app.get("/api/books/:id",
  param("id").isInt().toInt(),
  handleValidationErrors,
  (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json({ book });
  }
);

// POST 
app.post("/api/books",
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("author").trim().notEmpty().withMessage("Author is required"),
  body("year").optional().isInt({ min: 0 }).toInt().withMessage("Year must be an integer"),
  handleValidationErrors,
  (req, res) => {
    const { title, author, year } = req.body;
    const newBook = { id: Date.now(), title, author, year: year || null };
    books.push(newBook);
    res.status(201).json({ book: newBook });
  }
);

// PUT 
app.put("/api/books/:id",
  param("id").isInt().toInt(),
  body("title").optional().trim().notEmpty().withMessage("Title cannot be empty"),
  body("author").optional().trim().notEmpty().withMessage("Author cannot be empty"),
  body("year").optional().isInt({ min: 0 }).toInt().withMessage("Year must be an integer"),
  handleValidationErrors,
  (req, res) => {
    const id = Number(req.params.id);
    const idx = books.findIndex(b => b.id === id);
    if (idx === -1) return res.status(404).json({ error: "Book not found" });

    const { title, author, year } = req.body;
    if (typeof title === "string") books[idx].title = title;
    if (typeof author === "string") books[idx].author = author;
    if (typeof year !== "undefined") books[idx].year = year;
    res.json({ book: books[idx] });
  }
);

// DELETE 
app.delete("/api/books/:id",
  param("id").isInt().toInt(),
  handleValidationErrors,
  (req, res) => {
    const id = Number(req.params.id);
    const before = books.length;
    books = books.filter(b => b.id !== id);
    if (books.length === before) return res.status(404).json({ error: "Book not found" });
    res.json({ success: true });
  }
);

// 404 
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

app.use((err, req, res, next) => {
  console.error(err && err.stack ? err.stack : err);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`📚 Books API running at http://localhost:${PORT}`);
});
