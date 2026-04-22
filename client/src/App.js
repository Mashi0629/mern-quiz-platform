import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QuizList from "./pages/QuizList";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const [page, setPage] = useState("home");

  const token = localStorage.getItem("token");

  // 🔐 AUTH UI (Login/Register)
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600">
        
        <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-[350px]">
          
          <h1 className="text-2xl font-bold text-white text-center mb-6">
            Welcome to Quiz App 🚀
          </h1>

          {page === "login" ? (
            <>
              <Login />
              <p className="text-white text-sm mt-3 text-center">
                Don’t have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => setPage("register")}
                >
                  Register
                </span>
              </p>
            </>
          ) : (
            <>
              <Register />
              <p className="text-white text-sm mt-3 text-center">
                Already have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => setPage("login")}
                >
                  Login
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  // 🏠 MAIN APP UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 flex flex-col items-center p-6">

      <Navbar setPage={setPage} />

      <div className="w-full max-w-xl space-y-6">

        {page === "home" && <QuizList />}
        {page === "leaderboard" && <Leaderboard />}

      </div>
    </div>
  );
}

export default App;