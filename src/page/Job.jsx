import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Job.css";

export default function Job() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [applied, setApplied] = useState([]);

  const loggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    const savedJobs =
      JSON.parse(localStorage.getItem("bluecollar-jobs-v1")) || [];
    const savedApplied =
      JSON.parse(localStorage.getItem("bluecollar-applied-v1")) || [];

    setJobs(savedJobs);
    setApplied(savedApplied);
  }, []);

  const applyJob = (jobId) => {
    if (!loggedIn) {
      alert("Please login to apply!");
      navigate("/login");
      return;
    }

    if (applied.includes(jobId)) {
      alert("Already applied!");
      return;
    }

    const updatedApplied = [...applied, jobId];
    setApplied(updatedApplied);

    localStorage.setItem(
      "bluecollar-applied-v1",
      JSON.stringify(updatedApplied)
    );

    alert("Application Submitted!");
  };

  return (
    <div className="job-container">
      <h1 className="job-heading">Available Jobs</h1>

      <div className="job-list">
        {jobs.length === 0 ? (
          <p>No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job["Job Title"]}</h3>

              <p className="job-meta">
                {job["Job Type"]} • {job["Location"]}
              </p>

              <p>{job.description}</p>

              <p className="job-salary">Salary: {job["Salary Range"]}</p>
              <p className="job-company">Company: {job["Company"]}</p>
              <p className="job-vacancies">
                Vacancies: {job["Number Of Vacancies"]}
              </p>

              {/* APPLY BUTTON ALWAYS VISIBLE */}

              <button
                className="apply-btn"
                onClick={() => applyJob(job.id)}
                disabled={loggedIn && applied.includes(job.id)}
              >
                {/* ✔ tick only when login + applied */}
                {loggedIn && applied.includes(job.id)
                  ? "Applied ✔"
                  : "Apply Now"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
