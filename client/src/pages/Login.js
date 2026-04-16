import React, { useState } from "react";
import API from "../api/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", form);

      //  Save token
      localStorage.setItem("token", res.data.token);

      alert("Login successful ✅");

      console.log("TOKEN:", res.data.token);

    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-white mb-3">Login</h2>

      <input
        className="w-full p-2 mb-2 rounded bg-white/80"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="w-full p-2 mb-2 rounded bg-white/80"
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button   className="w-full py-2 rounded-lg text-white font-semibold 
  bg-gradient-to-r from-pink-500 to-purple-500 
  hover:from-purple-500 hover:to-pink-500 
  transition duration-300 shadow-lg hover:shadow-pink-500/50" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;