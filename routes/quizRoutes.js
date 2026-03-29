const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");
const jwt = require("jsonwebtoken");

//  middleware (copy from userRoutes)
const protect = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};


// CREATE QUIZ (admin style)
router.post("/", protect, async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//  GET ALL QUIZZES
router.get("/", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

//  SUBMIT QUIZ & CALCULATE SCORE
router.post("/:id/submit", protect, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    const { answers } = req.body;

    let score = 0;

    quiz.questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        score++;
      }
    });

    res.json({
      totalQuestions: quiz.questions.length,
      score,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;