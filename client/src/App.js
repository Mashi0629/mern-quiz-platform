import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QuizList from "./pages/QuizList";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div>
      <h1>Quiz App 🚀</h1>

      <Register />
      <hr />
      <Login />
      <hr />
      <QuizList />
      <hr />
      <Leaderboard />
    </div>
  );
}

export default App;