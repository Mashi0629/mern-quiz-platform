import React, { useState } from "react";
import API from "../api/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      await API.post("/users/register", form);
      alert("Registered ✅");
    } catch (err) {
      alert("Error ❌");
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-white mb-3">Register</h2>
      <input className="w-full p-2 mb-2 rounded bg-white/80" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="w-full p-2 mb-2 rounded bg-white/80" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full p-2 mb-2 rounded bg-white/80" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button   className="w-full py-2 rounded-lg text-white font-semibold 
  bg-gradient-to-r from-pink-500 to-purple-500 
  hover:from-purple-500 hover:to-pink-500 
  transition duration-300 shadow-lg hover:shadow-pink-500/50" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default Register;