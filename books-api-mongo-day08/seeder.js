const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Book = require("./models/bookModel");

const seedBooks = async () => {
  await connectDB();
  await Book.deleteMany();

  const books = [
    { title: "Clean Code", author: "Robert C. Martin", year: 2001 },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 },
  ];

  await Book.insertMany(books);
  console.log("✅ Sample books inserted!");
  process.exit();
};

seedBooks();
