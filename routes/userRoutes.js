const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  res.json({ message: "User registered" });
});

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;