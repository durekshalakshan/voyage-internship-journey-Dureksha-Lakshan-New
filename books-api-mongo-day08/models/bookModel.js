const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
  },
  year: {
    type: Number,
    required: [true, "Published year is required"],
  },
}, {
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
