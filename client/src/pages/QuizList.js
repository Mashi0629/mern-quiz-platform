import React, { useEffect, useState } from "react";
import API from "../api/api";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await API.get("/quizzes");
        setQuizzes(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Available Quizzes 📋</h2>

      {quizzes.map((quiz) => (
        <div key={quiz._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{quiz.title}</h3>
          <p>{quiz.questions.length} Questions</p>
        </div>
      ))}
    </div>
  );
}

export default QuizList;