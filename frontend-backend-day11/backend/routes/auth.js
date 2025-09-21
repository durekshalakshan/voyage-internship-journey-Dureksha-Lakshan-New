const express = require("express");
const router = express.Router();

const users = [];

// Register
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const user = { id: users.length + 1, username, email, password };
  users.push(user);

  res.status(201).json({ message: "User registered successfully", user });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  res.json({ message: "Login successful", token: "fake-jwt-token", user });
});

module.exports = router;
