// HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Makhana from "../assets/Premium-Indian-Makhana.png";


const HeroSection = () => {
  return (
    <section className="hero-wrapper d-flex align-items-center">
      <div className="container">
        <div className="hero-content">
          <h6>
            GLOBAL GRADE EXCELLENCE
          </h6>
          
          <h1>
            Premium Indian Makana Exporters
          </h1>

          <p>
            Supply Premium Quality Fox Nuts Worldwide With <br/>consistent Quality, Global standards & 
            reliable logistics <br/> Experience The SuperFood revolution
          </p>

<Link to="/product" className="quote-link">
  <button>
    Request Quote
  </button>
</Link>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;