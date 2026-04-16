import React, { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QuizList from "./pages/QuizList";
import Leaderboard from "./pages/Leaderboard";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 flex flex-col items-center p-6">

      <Navbar setPage={setPage} />

      <div className="w-full max-w-xl space-y-6">

        {page === "home" && <QuizList />}
        {page === "leaderboard" && <Leaderboard />}
        {page === "login" && <Login />}
        {page === "register" && <Register />}

      </div>

    </div>
  );
}

export default App;