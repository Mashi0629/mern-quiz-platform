const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const User = require("../models/User");


// Signup (REGISTER)
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({ message: "User registered" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;