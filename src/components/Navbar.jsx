import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        //
        <img src="/logo.svg" alt="AI Medicine" />
      </div>
      <div className="nav-links">
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/pharma-ai">Pharma.ai</Link>
        <Link to="/pipeline">Pipeline</Link>
        <Link to="/news">News & Media</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/docuthon">Docuthon</Link>
        <Link to="/precious-gpt">PreciousGPT</Link>
        <Link to="/nach01">Nach01</Link>
        <Link to="/sustainability">Sustainability</Link>
      </div>
      <div className="nav-language">
        <button>EN</button>
        <button>FR</button>
      </div>
    </nav>
  );
};

export default Navbar;
