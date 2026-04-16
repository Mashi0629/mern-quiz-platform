import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QuizList from "./pages/QuizList";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 flex flex-col items-center p-6">
      
      <h1 className="text-4xl font-bold text-white mb-6">
        Quiz App 🚀
      </h1>

      <div className="w-full max-w-xl space-y-6">
        <Register />
        <Login />
        <QuizList />
        <Leaderboard />
      </div>

    </div>
  );
}

export default App;