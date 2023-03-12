import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header header-nawbar">
        <nav
          className="header-left"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <h1>
            <span id="h1-span">Clarusway</span> Web Design
          </h1>
        </nav>
        <nav className="header-right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
