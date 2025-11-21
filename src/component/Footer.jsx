import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + About */}
        <div className="footer-section">
          <h2 className="footer-logo">BlueCollarJob</h2>
          <p>
            India’s trusted platform for blue-collar hiring.  
            Find jobs in delivery, driving, electrician, plumber, technician,
            carpenter, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Post a Job</li>
            <li>Profile</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Job Categories */}
        <div className="footer-section">
          <h3>Popular Categories</h3>
          <ul>
            <li>Delivery Boy</li>
            <li>Driver</li>
            <li>Electrician</li>
            <li>Plumber</li>
            <li>Carpenter</li>
          </ul>
        </div>

        {/* Contact  */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@bluecollar.com</p>
          <p>Phone: +91 9999999999</p>
          <p>Location: Delhi, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 BlueCollarJob — All Rights Reserved</p>
      </div>

    </footer>
  );
}
