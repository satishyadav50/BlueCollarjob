import React from "react";

export default function EmpDashboard() {
  const logout = () => {
    localStorage.removeItem("empLogged");
    window.location.href = "/employerlogin";
  };

  return (
    <div className="dashboard">
      {/* <h2>Employer Dashboard</h2> */}

      {/* <ul>
        <li><a href="/employerprofile">Profile</a></li>
        <li><a href="/jobpost">Post a Job</a></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul> */}
    </div>
  );
}
