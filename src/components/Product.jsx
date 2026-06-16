import React, { useState } from "react";
import "./Product.css";

import img1 from "../assets/Overlay+Border+Shadow.png";
import img2 from "../assets/Overlay+Border+Shadow1.png";
import img3 from "../assets/Overlay+Border+Shadow2.png";

const Product = () => {

  const [showForm, setShowForm] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    image: "",
  });

  const openInquiryForm = (name, image) => {
    setSelectedProduct({ name, image });
    setShowForm(true);
  };

  const closeInquiryForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="product-hero">

        <div className="container">

          <div className="product-hero-content">

            <h1>
              Our Premium Collections
            </h1>

            <p>
              Discover the finest selection of hand-picked
              Makhana, processed with excellence for
              global markets.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PRODUCT SECTION ================= */}

      <section className="product-page-section">

        <div className="container">

          {/* PRODUCT 1 */}

          <div className="product-page-row">

            <div className="product-page-image">
              <img src={img1} alt="Raw Makhana" />
            </div>

            <div className="product-page-content">

              <h2>
                Raw Makhana
              </h2>

              <p>
                Our signature raw grade Fox Nuts,
                sourced from the purest harvests.
                These superior quality nuts are
                graded by size and whiteness to
                meet the most stringent international
                food standards.
              </p>

              <button
                onClick={() =>
                  openInquiryForm("Raw Makhana", img1)
                }
              >
                Inquire Now
              </button>

            </div>

          </div>

          {/* PRODUCT 2 */}

          <div className="product-page-row reverse-layout">

            <div className="product-page-image">
              <img src={img2} alt="Roasted Makhana" />
            </div>

            <div className="product-page-content">

              <h2>
                Roasted Makhana
              </h2>

              <p>
                Perfectly crisp and roasted using
                traditional methods with a modern touch.
                Our roasting process preserves maximum
                nutrient retention while providing
                an unmistakable satisfying crunch.
              </p>

              <button
                onClick={() =>
                  openInquiryForm("Roasted Makhana", img2)
                }
              >
                Inquire Now
              </button>

            </div>

          </div>

          {/* PRODUCT 3 */}

          <div className="product-page-row">

            <div className="product-page-image">
              <img src={img3} alt="Flavoured Makhana" />
            </div>

            <div className="product-page-content">

              <h2>
                Flavoured Makhana
              </h2>

              <p>
                A gourmet fusion of health and taste.
                Our flavour range features innovative
                seasonings like Himalayan Pink Salt,
                Peri Peri and Black Pepper crafted for
                the discerning global palate.
              </p>

              <button
                onClick={() =>
                  openInquiryForm("Flavoured Makhana", img3)
                }
              >
                Inquire Now
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= INQUIRY FORM ================= */}

      {showForm && (

        <div className="inquiry-overlay">

          <div className="inquiry-popup">

            <button
              className="close-popup"
              onClick={closeInquiryForm}
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <h3>
              {selectedProduct.name}
            </h3>

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <textarea
                placeholder="Write your inquiry..."
              ></textarea>

              <button type="submit">
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      )}

    </>
  );
};

export default Product;