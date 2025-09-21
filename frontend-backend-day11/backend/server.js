const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy data
const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
  { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford" }
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

// example POST 
app.post('/api/books', (req, res) => {
  const book = { id: books.length + 1, ...req.body };
  books.push(book);
  res.status(201).json(book);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

