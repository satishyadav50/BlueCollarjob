import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign.css";

export default function Sign() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password) {
      alert("Please fill all details!");
      return;
    }

    // Get previous users
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Add new signup user
    users.push(data);

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successfully!");
    navigate("/login");
  };

  return (
    <div className="main-page">
      <form onSubmit={handleSubmit}>
        <div className="heading">
          <p>Sign Up</p>
        </div>

        <div className="account">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={data.name}
            onChange={handleInput}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={data.email}
            onChange={handleInput}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={data.password}
            onChange={handleInput}
          />

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
