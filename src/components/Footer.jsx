// Footer.jsx
import React from "react";
import "./Footer.css";
import arrow from "../assets/Button.png";


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">

          {/* Logo & About */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-logo">MAKHANA GLOBAL</h2>

            <p className="footer-text">
              Pioneering the global export of premium <br/> Fox Nuts,
              bridging Indian heritage with <br/> international nutrition
              standards.
            </p>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Resources</h5>

            <ul className="footer-links">
              <li>Export Documentation</li>
              <li>Logistics Support</li>
              <li>Quality Certificates</li>
              <li>Whitepaper</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Company</h5>

            <ul className="footer-links">
              <li>About Our Farms</li>
              <li>Global Reach</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Newsletter</h5>

            <p className="footer-text">
              Stay updated on market trends and export insights.
            </p>

            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-input"
              />

              <button className="newsletter-btn">
              <img src={arrow} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © 2024 Makhana Global. All Rights Reserved.
            Superfood Export Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;