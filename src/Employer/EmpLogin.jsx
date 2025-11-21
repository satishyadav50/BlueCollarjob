import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmpLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Please enter all details!");
      return;
    }

    // Signup me employer users me hi save hua tha
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // login match with role = employer
    const emp = users.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password &&
        u.role === "employer"
    );

    if (!emp) {
      alert("Invalid email or password!");
      return;
    }

    // session create
    localStorage.setItem("empLogged", JSON.stringify(emp));

    alert("Employer Login Successful!");

    navigate("/empdashboard");
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Employer Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleInput}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleInput}
        />

        <button>Login</button>

        <p>
          Don't have an account?
          <a href="/empsign"> Sign Up </a>
        </p>
      </form>
    </div>
  );
}
