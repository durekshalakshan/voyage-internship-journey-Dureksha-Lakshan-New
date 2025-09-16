const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", require("./routes/bookRoutes"));

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/booksdb";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(4000, () =>
      console.log("📚 Books API running at http://localhost:4000")
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
