// ProductShowcase.jsx

import React from "react";
import "./ProductShowcase.css";
import { Link } from "react-router-dom";

// Import Images
import RawImg from "../assets/raw-makhana.jpg";
import RoastedImg from "../assets/roasted-makhana.jpg";
import FlavoredImg from "../assets/flavored-makhana.jpg";
import PrivateImg from "../assets/private-label.jpg";

const ProductShowcase = () => {
  return (
<section className="product-showcase">
  <div className="container">

    {/* Heading */}

    <div className="showcase-header">

      <div>
          <h2>Versatile Makhana Solutions</h2>
      </div>

<Link to="/Product" className="view-products">
        View All Products →
      </Link>

    </div>

    {/* Product Cards */}

    <div className="row g-4">

      {/* Card 1 */}

      <div className="col-lg-3 col-md-6">
        <div className="product-box">

          <img src={RawImg} alt="" />

          <div className="product-overlay"></div>

          <div className="product-content">
            <span>THE FOUNDATION</span>
            <h3>Raw Makhana</h3>
          </div>

        </div>
      </div>

      {/* Card 2 */}

      <div className="col-lg-3 col-md-6">
        <div className="product-box">

          <img src={RoastedImg} alt="" />

          <div className="product-overlay"></div>

          <div className="product-content">
            <span>SNACK READY</span>
            <h3>Roasted Makhana</h3>
          </div>

        </div>
      </div>

      {/* Card 3 */}

      <div className="col-lg-3 col-md-6">
        <div className="product-box">

          <img src={FlavoredImg} alt="" />

          <div className="product-overlay"></div>

          <div className="product-content">
            <span>ARTISANAL MIX</span>
            <h3>Flavored Range</h3>
          </div>

        </div>
      </div>

      {/* Card 4 */}

      <div className="col-lg-3 col-md-6">
        <div className="product-box">

          <img src={PrivateImg} alt="" />

          <div className="product-overlay"></div>

          <div className="product-content">
            <span>BUSINESS SOLUTIONS</span>
            <h3>Private Label</h3>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
  );
};

export default ProductShowcase;