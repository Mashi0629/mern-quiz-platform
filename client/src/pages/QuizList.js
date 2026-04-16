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
    <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-white mb-3">Available Quizzes 📋</h2>

      {quizzes.map((quiz) => (
        <div key={quiz._id} className="bg-white/10 p-4 rounded-lg mb-3">
          <h3 className="text-lg font-semibold text-white">{quiz.title}</h3>
          <button className="mt-3 px-4 py-2 rounded-lg text-white 
bg-gradient-to-r from-green-400 to-blue-500 
hover:scale-105 transition duration-300 shadow-md" onClick={() => setSelectedQuizId(quiz._id)}>
            Attempt Quiz
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuizList;