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
    <div>
      <h2>Leaderboard 🏆</h2>

      {data.map((item, index) => (
        <div
          key={item._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
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