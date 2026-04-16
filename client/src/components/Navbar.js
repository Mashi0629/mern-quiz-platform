import React from "react";

function Navbar({ setPage }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out 👋");
    setPage("login");
  };

  return (
    <div className="w-full max-w-5xl mb-6">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 px-6 py-3 rounded-2xl shadow-xl flex justify-between items-center">
        
        <h1 className="text-white font-bold text-xl">
          Quiz App 🚀
        </h1>

        <div className="space-x-3">
          <button
            onClick={() => setPage("home")}
            className="px-4 py-1 rounded-lg bg-white/30 text-white hover:bg-white/50"
          >
            Home
          </button>

          <button
            onClick={() => setPage("leaderboard")}
            className="px-4 py-1 rounded-lg bg-white/30 text-white hover:bg-white/50"
          >
            Leaderboard
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;