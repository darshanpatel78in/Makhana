

import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import GlobalReach from "../components/GlobalReach";
import ProductShowcase from "./ProductShowcase";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductShowcase/>
      <GlobalReach />
    </>
  );
};

export default Home;