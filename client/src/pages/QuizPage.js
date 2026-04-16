import React, { useEffect, useState } from "react";
import API from "../api/api";

function QuizPage({ quizId }) {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await API.get("/quizzes");
      const selectedQuiz = res.data.find(q => q._id === quizId);
      setQuiz(selectedQuiz);
    };

    fetchQuiz();
  }, [quizId]);

  const handleSelect = (qIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post(`/quizzes/${quizId}/submit`, {
        answers,
      });

      alert(`Score: ${res.data.score}/${res.data.totalQuestions}`);
    } catch (err) {
      alert("Error submitting quiz ❌");
    }
  };

  if (!quiz) return <p>Loading...</p>;

  return (
    <div>
      <h2>{quiz.title}</h2>

      {quiz.questions.map((q, qIndex) => (
        <div key={q._id}>
          <h4>{q.question}</h4>

          {q.options.map((opt, optIndex) => (
            <div key={optIndex}>
              <label>
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  onChange={() => handleSelect(qIndex, optIndex)}
                />
                {opt}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button className="mt-4 px-6 py-2 rounded-lg text-white font-bold 
bg-gradient-to-r from-purple-600 to-indigo-600 
hover:scale-110 transition duration-300 shadow-lg" onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}

export default QuizPage;