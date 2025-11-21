import React from "react";
import "./JobForm.css";

export default function JobForm() {
  return (
    <div className="form-wrapper">
      <h2>Enter candidate details</h2>

      <form className="job-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Surname" />
        </div>

        <div className="form-row">
          <input type="text" placeholder="What you do? Type job title here" />
        </div>

        <div className="form-row">
          <select>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="date" placeholder="Date of Birth" />
        </div>

        <div className="form-row">
          <select>
            <option value="">Education</option>
            <option>Bachelor's</option>
            <option>Master's</option>
            <option>Diploma</option>
          </select>
          <input type="text" placeholder="Experience" />
        </div>

        <div className="form-row">
          <select>
            <option value="">Select City</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </select>
        </div>

        <div className="form-row">
          <input type="text" value="+91" readOnly className="country-code" />
          <input type="tel" placeholder="10 Digit Mobile Number" />
        </div>

        <div className="form-row">
          <input type="text" placeholder="Enter 4 Digit OTP Code" />
        </div>

        <div className="form-row checkbox">
          <label>
            <input type="checkbox" /> I agree to the terms & policies
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
