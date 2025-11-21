import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Jobpost.css";

export default function Jobpost() {
  const navigate = useNavigate();

  const initialJobs =
    JSON.parse(localStorage.getItem("bluecollar-jobs-v1")) || [];

  const [jobs, setJobs] = useState(initialJobs);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    "Job Title": "",
    "Job Type": "",
    Location: "",
    "Salary Range": "",
    Company: "",
    "Number Of Vacancies": "",
    description: "",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    localStorage.setItem("bluecollar-jobs-v1", JSON.stringify(jobs));
  }, [jobs]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addOrUpdateJob = (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = jobs.map((job) =>
        job.id === editingId ? { ...job, ...form } : job
      );
      setJobs(updated);
      setEditingId(null);
    } else {
      const newJob = { id: Date.now(), ...form };
      setJobs([newJob, ...jobs]);
    }

    setForm(emptyForm);
    navigate("/job");
  };

  const removeJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const editJob = (job) => {
    setEditingId(job.id);
    setForm({ ...job });
  };

  return (
    <div className="job-container">
      <h1 className="job-heading">Post a Job</h1>

      <div className="job-layout">
        
        {/* JOB LIST */}
        <div className="job-list">
          {jobs.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job["Job Title"]}</h3>

                <p className="job-meta">
                  {job["Job Type"]} • {job["Location"]}
                </p>

                <p>{job.description}</p>
                <p>Salary: {job["Salary Range"]}</p>
                <p>Company: {job.Company}</p>
                <p>Vacancies: {job["Number Of Vacancies"]}</p>

                <button className="job-edit-btn" onClick={() => editJob(job)}>
                  Edit
                </button>

                <button
                  className="job-delete-btn"
                  onClick={() => removeJob(job.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* FORM */}
        <form className="job-form" onSubmit={addOrUpdateJob}>
          <h2>{editingId ? "Edit Job" : "Post a Job"}</h2>

          <input
            name="Job Title"
            placeholder="Job Title"
            value={form["Job Title"]}
            onChange={handleChange}
            required
          />

          <input
            name="Job Type"
            placeholder="Job Type"
            value={form["Job Type"]}
            onChange={handleChange}
            required
          />

          <input
            name="Location"
            placeholder="Location"
            value={form["Location"]}
            onChange={handleChange}
            required
          />

          <input
            name="Salary Range"
            placeholder="Salary Range"
            value={form["Salary Range"]}
            onChange={handleChange}
          />

          <input
            name="Company"
            placeholder="Company"
            value={form.Company}
            onChange={handleChange}
            required
          />

          <input
            name="Number Of Vacancies"
            placeholder="Number Of Vacancies"
            value={form["Number Of Vacancies"]}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="job-post-btn">
            {editingId ? "Update Job" : "Post Job"}
          </button>
        </form>

      </div>
    </div>
  );
}
