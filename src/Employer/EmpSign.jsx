import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmpSign() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "employer",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password) {
      alert("Please fill all details!");
      return;
    }

    // USERS me hi save karenge (employer bhi user hi hota hai)
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Duplicate email check
    const exist = users.find((u) => u.email === data.email);
    if (exist) {
      alert("Email already registered!");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Employer Signup Successful!");

    navigate("/employerlogin");
  };

  return (
    <div className="signup-page">
      <form className="signup-box" onSubmit={handleSubmit}>
        <h2>Create Employer Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleInput}
        />

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
          placeholder="Create Password"
          value={data.password}
          onChange={handleInput}
        />

        <button>Sign Up</button>

        <p>
          Already have an account?  
          <a href="/employerlogin">Login</a>
        </p>
      </form>
    </div>
  );
}
