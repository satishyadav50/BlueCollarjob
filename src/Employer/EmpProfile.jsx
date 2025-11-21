import React, { useState, useEffect } from "react";
import "./EmpProfile.css";

export default function EmpProfile() {

  const [isEditing, setIsEditing] = useState(true);

  const [form, setForm] = useState({
    companyName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  // Load saved employer details
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("employer-profile"));
    if (saved) {
      setForm(saved);
      setIsEditing(false);
    }
  }, []);

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save Form
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("employer-profile", JSON.stringify(form));
    setIsEditing(false);
  };

  return (
    <div className="emp-container">

      {/* LEFT CARD */}
      <div className="emp-card">
        <div className="emp-avatar"></div>
        <h2>{form.companyName || "Company Name"}</h2>
        <p className="small">{form.ownerName || "Owner Name"}</p>
        <p className="small">{form.email || "Email"}</p>
{/* 
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Edit Profile
        </button> */}
      </div>

      {/* RIGHT SECTION */}
      <div className="emp-right">

        {/* EDIT FORM */}
        {isEditing && (
          <form className="emp-form" onSubmit={handleSave}>
            <h2>Edit Employer Profile</h2>

            <div className="form-group">
              <label>Company Name</label>
              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Owner Name</label>
              <input
                name="ownerName"
                value={form.ownerName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </div>

            <button className="save-btn">Save</button>
          </form>
        )}

        {/* SAVED DETAILS */}
        {!isEditing && (
          <div className="emp-details">
            <h2>Employer Details</h2>

            <p><strong>Company:</strong> {form.companyName}</p>
            <p><strong>Owner:</strong> {form.ownerName}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Phone:</strong> {form.phone}</p>
            <p><strong>Address:</strong> {form.address}</p>
            <p><strong>Description:</strong> {form.description}</p>

            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
