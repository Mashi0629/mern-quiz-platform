import React, { useEffect, useState } from "react";
import API from "../api/api";

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await API.get("/quizzes/leaderboard");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-white mb-3">Leaderboard 🏆</h2>

      {data.map((item, index) => (
        <div
          key={item._id}
          className="bg-white/10 p-4 rounded-lg mb-3"
        >
          <h3>
            #{index + 1} - {item.user?.name}
          </h3>
          <p>Email: {item.user?.email}</p>
          <p>Score: {item.score} / {item.totalQuestions}</p>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;