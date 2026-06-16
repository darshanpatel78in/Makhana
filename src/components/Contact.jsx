import React from "react";
import "./Contact.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import arrow from "../assets/container3.png"
import icon from "../assets/icon.png"
import icon1 from "../assets/iconn1.png"
import icon2 from "../assets/iconn2.png"
import icon3 from "../assets/iconn3.png"
import icon4 from "../assets/iconn4.png"
import worldMap from "../assets/global.png"
import icn1 from "../assets/icn1.png"
import icn2 from "../assets/icn2.png"
import icn3 from "../assets/icn3.png"





const Contact = () => {
  const options = countryList().getData();
  return (
    <>
      {/* ================= HERO ================= */}
            <section className="m-5 ">
                    <div className="contact-hero">

        <div className="container">
   <div className="d-flex flex-column justify-content-center align-items-center">

            <span className="contact-tag">
              Global Distribution Network
            </span>

            <h1 >Get in Touch with Our Export Experts</h1>

            <p>
              Connecting Indian agriculture with global markets.
              Reach out for custom quotations, samples, logistics
              support tailored for your distribution needs.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Inquiry Form
                <img src={arrow} />
              </button>

              <button className="secondary-btn">
                Direct Email
              </button>
            </div>

          </div>


       
</div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}

      <section className="contact-form-section">
        <div className="container">

          <div className="row g-4">

            {/* LEFT FORM */}

            <div className="col-lg-8">

              <div className="inquiry-form">

                <h3>B2B Inquiry Form</h3>

                <div className="row g-3">

                  <div className="col-md-6">
                    <h6>Full name</h6>
                    <input type="text" placeholder="John Doe" />
                  </div>

                  <div className="col-md-6">
                    <h6>Company name</h6>
                    <input type="text" placeholder="Global Trade Inc." />
                  </div>

                  <div className="col-md-6">
                    <h6>Email Address</h6>
                    <input type="email" placeholder="email@company.com" />
                  </div>

                  <div className="col-md-6">
                    <h6>Phone Number</h6>
                    <input type="text" placeholder="+1 (555) 000-0000" />
                  </div>

<div className="col-md-6">

  <h6>Country</h6>

  <Select 
    options={options}
    placeholder="Select Country"
    className="country-select"
  />

</div>
<div className="col-md-6">

  <h6>Product Interest</h6>

  <select className="form-select-custom">

    <option value="">
      Select Product
    </option>

    <option value="Raw Makhana">
      Raw Makhana
    </option>

    <option value="Roasted Makhana">
      Roasted Makhana
    </option>

    <option value="Flavoured Makhana">
      Flavoured Makhana
    </option>

    <option value="Bulk Export">
      Bulk Export
    </option>

    <option value="Private Label Packaging">
      Private Label Packaging
    </option>

  </select>

</div>
                  <div className="col-12">
                    <h6>Message / Detailed Requirements</h6>
                    <textarea
                      rows="5"
                      placeholder="Tell us about your volume requirements and shipping destination..."
                    ></textarea>
                  </div>

                </div>

                <button className="submit-btn">
                  Submit B2B Inquiry
                </button>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="col-lg-4">

              <div className="contact-info">

                <h5>Contact Headquarters</h5>

                <h3>Patna, Bihar, India</h3>

                <ul>
                  <li><img src={icon1}/>Excellence Hub, Phase II, Industrial Area,Patna - 800013, India</li>
                  <li><img src={icon4}/>export@makhanaglobal.com</li>
                  <li><img src={icon3}/>+91 612 2345 678</li>
                  <li><img src={icon2}/>WhatsApp: +91 98765 43210</li>
                </ul>

              </div>
              

<div className="export-desk">
  <h4>Regional Export Desks</h4>

  <div className="row desk-grid">
    
    <div className="col-md-6 desk-item">
      <h6>North America</h6>
      <p>USA & Canada Desk <br/>NY Timezone Support</p>
    </div>

    <div className="col-md-6 desk-item">
      <h6>Middle East</h6>
      <p>UAE & KSA Hub<br/>Dubai Logistics</p>
    </div>

    <div className="col-md-6 desk-item">
      <h6>Europe</h6>
      <p>UK & EU Compliance <br/>Rotterdam Port Access</p>
    </div>

    <div className="col-md-6 desk-item">
      <h6>Asia Pacific</h6>
      <p>Singapore & SEA <br/>Direct Air Freight</p>
    </div>

  </div>
</div>            </div>

          </div>

        </div>
      </section>


      <section className="global-map-section">

  <div className="container">

    <div className="map-wrapper">

      <img
        src={worldMap}
        alt="world map"
        className="global-map-img"
      />

      <div className="map-content">

        <h2>Our Reach is Global</h2>

        <p>
          Daily shipments to over 45 countries with end-to-end
          logistics tracking and customs clearance support.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* ================= MAP SECTION ================= */}

      <section className="map-section">
        <div className="container">

          <div className="map-card">

          

            <div className="map-overlay">

              <h2>Our Reach is Global</h2>

              <p>
                Daily shipments to over 15 countries with
                end-to-end logistics tracking and customs
                clearance support.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SUPPORT SECTION ================= */}

      <section className="support-section">
        <div className="container">

          <h2 className="support-title">
            Resources & Support
          </h2>

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="support-card">

                <div className="support-icon">
                  <i className="bi bi-file-earmark-text"></i>
                  <img src={icn1}/>
                </div>

                <h4>Export Documentation</h4>

                <p>
                  Compliance assistance with APEDA,
                  phytosanitary certificates, and customs
                  clearance paperwork.
                </p>

                <a href="/">Learn More →</a>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="support-card">

                <div className="support-icon">
                  <i className="bi bi-box-seam"></i>
                  <img src={icn2}/>
                </div>

                <h4>Sample Request Policy</h4>

                <p>
                  Request sampling kits & product
                  documentation. Global doorstep delivery
                  in 3-5 days.
                </p>

                <a href="/">Request Sample →</a>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="support-card">

                <div className="support-icon">
                  <i className="bi bi-truck"></i>
                  <img src={icn3}/>
                </div>

                <h4>Logistics Support</h4>

                <p>
                  End-to-end shipping visibility, customs
                  management, DHL and FedEx for secure
                  exports.
                </p>

                <a href="/">Shipping Info →</a>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;