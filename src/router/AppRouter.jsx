import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Css from "../pages/Css";
import Home from "../pages/Home";
import Html from "../pages/Html";
import Logo from "../pages/Logo";
import Services from "../pages/Services";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="design" element={<Logo />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
