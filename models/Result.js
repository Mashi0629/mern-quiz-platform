const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
  score: Number,
  totalQuestions: Number,
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);