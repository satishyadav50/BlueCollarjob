import React, { useEffect, useState } from "react";
import "./EmployerApplicants.css";

export default function EmployerApplicants() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const applied = JSON.parse(localStorage.getItem("bluecollar-applied-v1")) || [];
    setApps(applied);
  }, []);

  return (
    <div className="emp-apps">
      <h2>Applicants</h2>

      {apps.length === 0 ? (
        <p>No applicants yet.</p>
      ) : (
        apps.map((id, i) => (
          <div key={i} className="emp-app-card">
            <h3>Applicant #{i + 1}</h3>
            <p>Applied Job ID: {id}</p>
          </div>
        ))
      )}
    </div>
  );
}
