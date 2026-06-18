// src/pages/About.jsx

import React from "react";
import "./About.css";
import makanaa from "../assets/makanaa.png"
import product from "../assets/product.png"
import mission from "../assets/mission.png"
import vision from "../assets/vision.png"
import sym1 from "../assets/sym1.png"
import sym2 from "../assets/sym2.png"
import sym3 from "../assets/sym3.png"
import sym4 from "../assets/sym4.png"
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"
import { Link } from "react-router-dom";





const About = () => {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="about-overlay"></div>

        <div className="container">

          <div className="about-hero-content">

            <h6>SINCE 1998</h6>

            <span>
              India's Trusted <br/>Makhana Export Partner
            </span>

            <p>
              Elevating the humble fox nut into a global premium superfood. We bridge the<br/>
gap between traditional Indian agriculture and international luxury standards.
            </p>

            <div className="hero-btns">
<Link to="/Product">
              <button className="secondary-btn">
                VIEW PRODUCTS
              </button>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STORY ================= */}

      <section className="story-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <div className="story-image">
                              <img src={product} alt=""/>

              </div>
            </div>

            <div className="col-lg-7">

              <div className="story-content">

                <span className="section-tag">
                  OUR MISSION
                </span>

                <h2>
                  From the Ponds of Bihar to the<br/>Global High-Streets
                </h2>

                <p>
                  Makhana Global was founded on a simple realization: the<br/>world's most nutritious superfood was being underserved<br/>by fragmented supply chains.
                </p>
                <h6>We pioneered a direct-from-source model that empowers local
farming communities while ensuring the most stringent quality
protocols for international B2B partners. Today, we stand as the
definitive gateway for authentic, grade-A Indian Makhana.</h6>

                <div className="story-stats">

                  <div>
                    <h3>10k+</h3>
                    <p>TONS EXPORTED</p>
                  </div>


                  <div>
                    <h3>100%</h3>
                    <p>TRACEABLE</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

<section className="excellence-section">

  <div className="container">

    {/* Heading */}

    <div className="section-heading">

      <span>WHY PARTNER WITH US</span>

      <h2>Uncompromising Excellence</h2>

    </div>

    {/* Grid */}

    <div className="row g-4">

      {/* Card 1 */}

      <div className="col-lg-8">

        <div className="excellence-card large-card">

          <div className="icon-circle">
            <i className="bi bi-leaf"></i>
            <img src={sym1}alt=""/>
          </div>

          <div>
            <h3>Direct Sourcing</h3>

            <p>
              We bypass middlemen by operating our own
              collection centers in Bihar's heartlands,
              ensuring maximum freshness and fair pay
              for farmers.
            </p>
          </div>

        </div>

      </div>

      {/* Card 2 */}

      <div className="col-lg-4">

        <div className="excellence-card">

          <div className="icon-circle">
            <i className="bi bi-patch-check"></i>
            <img src={sym2}alt=""/>
          </div>

          <div>
            <h3>Quality Grading</h3>

            <p>
              Multi-stage laser sorting and manual
              inspection for perfect sizing.
            </p>
          </div>

        </div>

      </div>

      {/* Card 3 */}

      <div className="col-lg-4">

        <div className="excellence-card">

          <div className="icon-circle">
            <i className="bi bi-globe"></i>
            <img src= {sym3}alt=""/>
          </div>

          <div>
            <h3>Export Expertise</h3>

            <p>
              Deep understanding of FDA, EU, and Asian
              food safety regulations and documentation.
            </p>
          </div>

        </div>

      </div>

      {/* Card 4 */}

      <div className="col-lg-8">

        <div className="excellence-card large-card">

          <div className="icon-circle">
            <i className="bi bi-truck"></i>
            <img src={sym4}alt=""/>
          </div>

          <div>
            <h3>Reliable Logistics</h3>

            <p>
              Strategic partnerships with global shipping
              lines ensure climate-controlled transit and
              on-time delivery worldwide.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
<section className="mission-section">

  <div className="container">

    <div className="row g-4">

    

      <div className="col-lg-6">

        <div className="mission-card">
<img src={vision}alt=""/>
          <h2>
            Our Vision
          </h2>


          <p>
            To be the world's most trusted source for ancient Indian
superfoods, recognized for our commitment to purity,
transparency, and the upliftment of agrarian heritage.
          </p>

        </div>

      </div>


      <div className="col-lg-6">

        <div className="mission-card">
<img src={mission}alt=""/>
          <h2>
            Our Mission
          </h2>


          <p>
            To deliver uncompromising quality Makhana to the global
B2B market through sustainable direct sourcing,
innovative processing, and ethical business practices.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* ================= TIMELINE ================= */}

<section className="journey-section">

  <div className="container">

    {/* Heading */}

    <div className="journey-heading">

      <span>OUR HISTORY</span>

      <h2>A Journey of Growth</h2>

    </div>

    {/* Timeline */}

    <div className="timeline-wrapper">

      {/* Center Line */}

      <div className="timeline-line"></div>

      {/* Item 1 */}

      <div className="timeline-item right">

        <div className="timeline-dot"></div>

        <div className="timeline-card">

          <h3>2005</h3>

          <h4>Inception</h4>

          <p>
            Founded as a small local aggregator in Bihar
            with a focus on quality collection.
          </p>

        </div>

      </div>

      {/* Item 2 */}

      <div className="timeline-item left">

        <div className="timeline-dot"></div>

        <div className="timeline-card">

          <h3>2012</h3>

          <h4>Processing Facility</h4>

          <p>
            Established our first mechanized grading and
            sorting plant with export-grade hygiene standards.
          </p>

        </div>

      </div>

      {/* Item 3 */}

      <div className="timeline-item right">

        <div className="timeline-dot"></div>

        <div className="timeline-card">

          <h3>2018</h3>

          <h4>Global Expansion</h4>

          <p>
            Launched dedicated B2B export desk catering
            to the EU and North American luxury health markets.
          </p>

        </div>

      </div>

      {/* Item 4 */}

      <div className="timeline-item left">

        <div className="timeline-dot"></div>

        <div className="timeline-card">

          <h3>2024</h3>

          <h4>Sustainability Leader</h4>

          <p>
            Awarded 'Exporter of the Year' for sustainable
            sourcing and zero-waste processing initiatives.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* ================= TEAM ================= */}

<section className="leadership-section">

  <div className="container">

    {/* Heading */}

    <div className="leadership-heading">

      <span>LEADERSHIP</span>

      <h2>The Minds Behind the Purity</h2>

    </div>

    {/* Team Row */}

    <div className="row justify-content-center">

      {/* Card 1 */}

      <div className="col-lg-4">

        <div className="leader-card">

          <img src={person3} alt="" className="leader-img" />

          <h3>Arjun Mehta</h3>

          <h5>FOUNDER & CEO</h5>

          <p>
            20+ years of expertise in agricultural<br/>
            supply chains and international<br/> trade.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="col-lg-4">

        <div className="leader-card">

          <img src={person2} alt="" className="leader-img" />

          <h3>Priya Sharma</h3>

          <h5>DIRECTOR OF QUALITY</h5>

          <p>
            Oversees our stringent multi-step<br/>
            quality assurance and food safety<br/>
            protocols.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="col-lg-4">

        <div className="leader-card">

          <img src={person1} alt="" className="leader-img" />

          <h3>Vikram Rai</h3>

          <h5>HEAD OF GLOBAL LOGISTICS</h5>

          <p>
            Ensuring seamless international<br/>
            transit and last-mile delivery<br/>
            excellence.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* ================= CTA ================= */}

<section className="about-cta-section">

  <div className="container">

    <div className="about-cta-box">

      <h2>
        Ready to Import Perfection?
      </h2>

      <p>
        Join the global network of distributors who trust
        Makhana Global for premium, <br/>consistent, and ethically
        sourced superfoods.
      </p>

      <div className="cta-btn-group">
<Link to="/Product">
        <button className="catalog-btn">
          Request Export Catalog
        </button>
</Link>
<Link to="/Contact">
        <button className="contact-btn">
          Contact Sales
        </button>
</Link>
      </div>

    </div>

  </div>

</section>
    </>
  );
};

export default About;