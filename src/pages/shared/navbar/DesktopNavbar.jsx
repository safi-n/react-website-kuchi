import React from "react";
import { Link } from "react-router-dom";
import '../../../style/navbar.css'

const DesktopNavbar = () => {
  return <>
    <div className="navbar-container">
      <div className="navbar-link">
        <Link to='/'>Home</Link>
      </div>
      <div className="navbar-link">
        <Link to='/'>About Us</Link>
      </div>
      <div className="navbar-link">
        <Link to='/'>Production</Link>
      </div>
      <div className="navbar-logo">

      </div>
      <div className="navbar-link">
        <Link to='/'>Programs</Link>
      </div>
      <div className="navbar-link">
        <Link to='/'>Projects</Link>
      </div>
      <div className="navbar-link">
        <Link to='/'>Contact Us</Link>
      </div>

    </div>
  </>;
};

export default DesktopNavbar;
