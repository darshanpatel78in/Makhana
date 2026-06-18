// Header.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">

          {/* Logo */}
          <Link className="logo" to="/">
            MAKANA GLOBAL
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarContent">

            <ul className="navbar-nav mx-auto menu-list">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/About">
                  About Us
                </a>
              </li>

              {/* Products Page Link */}
              <li className="nav-item">
                <a className="nav-link" href="/Product">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Contact">
                  Contact Us
                </a>
              </li>

            </ul>
<Link to="/product">
            <button className="quote-btn">
              Request Quote
            </button>
</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;