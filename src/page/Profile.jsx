import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Gender: "",
    dob: "",
    JobTitle: "",
    JobCategory: "",
    Education: "",
    Experience: "",
    Location: "",
    State: "",
  });

  // Load saved profile
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("user-profile"));
    if (savedData) {
      setFormData(savedData);
      setSaved(true);
      setIsEditing(false);
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  // Save profile data
  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setIsEditing(false);
    localStorage.setItem("user-profile", JSON.stringify(formData));
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user-profile");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  return (
    <div className="profile-layout">

      {/* LEFT SIDE */}
      <div className="avatar-card">
        <div className="avatar-circle"></div>

        <h3 className="avatar-name">
          {formData.Name || "Your Name"}
        </h3>

        <p className="avatar-job">
          {formData.JobTitle || "Your Job Title"}
        </p>

        <p className="avatar-location">
          {formData.Location || "Your Location"}
        </p>

        <button className="logout-btn" onClick={handleLogout}>
          
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-section">

        {/* EDIT FORM */}
        {isEditing && (
          <form onSubmit={handleSave} className="profile-form">
            {Object.keys(formData).map((key) => (
              <div className="form-group" key={key}>
                <label className="form-label">
                  {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                </label>

                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            ))}

            <button type="submit" className="save-button">
              Save Profile
            </button>
          </form>
        )}

        {/* VIEW MODE */}
        {saved && !isEditing && (
          <div className="profile-card">

            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>

            <h2 className="card-header">Personal Details</h2>
            <p>Name: {formData.Name}</p>
            <p>Phone: {formData.Phone}</p>
            <p>Gender: {formData.Gender}</p>
            <p>DOB: {formData.dob}</p>

            <h2 className="card-header">Education & Experience</h2>
            <p>Job Title: {formData.JobTitle}</p>
            <p>Category: {formData.JobCategory}</p>
            <p>Education: {formData.Education}</p>
            <p>Experience: {formData.Experience}</p>

            <h2 className="card-header">Location</h2>
            <p>Area: {formData.Location}</p>
            <p>State: {formData.State}</p>

          </div>
        )}

      </div>
    </div>
  );
}
