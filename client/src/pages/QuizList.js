import React, { useEffect, useState } from "react";
import API from "../api/api";
import QuizPage from "./QuizPage";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const res = await API.get("/quizzes");
      setQuizzes(res.data);
    };

    fetchQuizzes();
  }, []);

  //  If quiz selected, show quiz page
  if (selectedQuizId) {
    return <QuizPage quizId={selectedQuizId} />;
  }

  return (
    <div>
      <h2>Available Quizzes 📋</h2>

      {quizzes.map((quiz) => (
        <div key={quiz._id}>
          <h3>{quiz.title}</h3>
          <button onClick={() => setSelectedQuizId(quiz._id)}>
            Attempt Quiz
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuizList;