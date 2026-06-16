// App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Product from "./components/Product";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                  <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;