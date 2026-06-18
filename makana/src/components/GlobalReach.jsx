// GlobalReach.jsx
import React from "react";
import "./GlobalReach.css";
import worldglobal from "../assets/Global-Reach-Map.png";
import location from "../assets/location.png"
import world from "../assets/wld.png"
import { Link } from "react-router-dom";



const GlobalReach = () => {
  return (
    <section className="global-section">
      <div className="container">

        {/* Top Section */}
        <div className="row align-items-center gy-5">

{/* Image Side */}

<div className="col-lg-6">

  <div className="global-world-bg">

<div className="worldwide-box">

  <img src={world} alt="logo" />

  <span>
    WORLDWIDE NETWORK
  </span>

</div>
  </div>

</div>
          {/* Content Side */}
          <div className="col-lg-6">
            <div className="global-content">

              <span className="global-tag">
                GLOBAL REACH
              </span>

              <h2>
                Serving the World’s Leading Markets
              </h2>

              <p>
                We have established a robust logistics pipeline serving
                premium distributors across key international hubs.
              </p>

            
<div className="row g-3">

  <div className="col-md-4">
    <div className="country-box">
      <i className="bi bi-geo-alt"></i>
      <img src={location}/>
      USA
    </div>
  </div>

  <div className="col-md-4">
    <div className="country-box">
      <i className="bi bi-geo-alt"></i>
            <img src={location}/>

      UK
    </div>
  </div>

  <div className="col-md-4">
    <div className="country-box">
      <i className="bi bi-geo-alt"></i>
            <img src={location}/>

      Canada
    </div>
  </div>

  <div className="col-md-4">
    <div className="country-box">
      <i className="bi bi-geo-alt"></i>
            <img src={location}/>

      Germany
    </div>
  </div>

  <div className="col-md-4">
    <div className="country-box">
      <i className="bi bi-geo-alt"></i>
                  <img src={location}/>

      UAE
    </div>
  </div>

  <div className="col-md-4">
    <div className="country-box">
      <i className="bi bi-geo-alt"></i>
                  <img src={location}/>

      Australia
    </div>
  </div>

</div>            

            </div>
          </div>

        </div>

        {/* Trusted Section */}
        <div className="trusted-wrapper">

          <div className="trusted-heading text-center">
            <span className="trusted-tag">
              TRUSTED & COMPLIANT
            </span>

            <h2>
              Accredited by Global Food Authorities
            </h2>
          </div>

          <div className="row gy-4 mt-4 justify-content-center">

            <div className="col-lg-2 col-md-4 col-6">
              <div className="trusted-card">
                <h4>APEDA</h4>
              </div>
              <div className="prg">
                              <p>Registered Exporter</p>
</div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="trusted-card">
                <h4>FSSAI</h4>
            
              </div>
                            <div className="prg">

                              <p>Food Safety Authority</p>
                              </div>

            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="trusted-card">
                <h4>HACCP</h4>
              </div>
                            <div className="prg">
                              <p>Hazard Control</p>
                              </div>

            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="trusted-card">
                <h4>ISO 22000</h4>
              </div>
                            <div className="prg">
                              <p>Management System</p>
                              </div>

            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="trusted-card">
                <h4>GMP</h4>
              </div>
                            <div className="prg">
                              <p>Manufacturing Practice</p>
                              </div>

            </div>

          </div>
        </div>

      </div>
    
  
  
  {/* =========================
        CTA SECTION
========================= */}
<section className="cta-section d-flex align-items-center">
  <div className="container text-center">

    <h2>
      Ready to Source Premium Makhana <br/>
      from India?
    </h2>

    <p>
      Join hundreds of global partners who trust Makhana Global
      for their Fox Nut <br/> requirements. Request your custom pricing
      and samples today.
    </p>

    <div className="cta-buttons">
<Link to="/product">
      <button className="primary-btn1">
        Request Pricing & Samples
      </button>
</Link>
<button className="secondary-btn1"
  onClick={() =>
    window.open(
      "https://wa.me/919879868421",
      "_blank"
    )
  }
>
Talk to export expert</button>
    </div>

  </div>

</section>
</section>
  );
};

export default GlobalReach;