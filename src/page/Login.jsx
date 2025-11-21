import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      alert("Invalid Email or Password!");
      return;
    }

    alert("Login Successful!");

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedUser", JSON.stringify(foundUser));

    navigate("/");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>

        <p>
          Don’t have an account? <a href="/sign">Signup</a>
        </p>
      </form>
    </div>
  );
}
