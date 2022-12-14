import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../style/navbar.css";
import kuchiLogoWhite from '../../../assets/logo/KuchiLogo-white.svg'

const DesktopNavbar = () => {
  const [color, setColor] = useState(false);
  const location = useLocation();

  const pathMatch = (route) => {
    if (route === location.pathname) {
      return location;
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 350) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor)
  return (
    <div className={pathMatch("/") ?  "" : "navbar-container bg-black"}>
      <div
        className={
          color ? 'bg-header navbar-container' : 'navbar-container' 
        }
      >
        <div className="navbar-link">
          <Link
            to="/"
            className={
              pathMatch("/")
                ? "font-bold text-primary"
                : "font-light text-white"
            }
          >
            Home
          </Link>
        </div>
        <div className="navbar-link">
          <Link
            to="/about-us"
            className={
              pathMatch("/about-us")
                ? "font-bold text-primary"
                : "font-light text-white"
            }
          >
            About Us
          </Link>
        </div>
        <div className="navbar-link">
          <Link
            to="/services"
            className={
              pathMatch("/services")
                ? "font-bold text-primary "
                : "font-light text-white"
            }
          >
            Services
          </Link>
        </div>
        <div className="navbar-logo">
          <img src={kuchiLogoWhite} alt="" />
        </div>
        <div className="navbar-link">
          <Link
            to="/our-work"
            className={
              pathMatch("/our-work")
                ? "font-bold text-primary"
                : "font-light text-white"
            }
          >
            Our Work
          </Link>
        </div>
        <div className="navbar-link">
          <Link
            to="/projects"
            className={
              pathMatch("/projects")
                ? "font-bold text-primary"
                : "font-light text-white"
            }
          >
            Projects
          </Link>
        </div>
        <div className="navbar-link">
          <Link
            to="/contact-us"
            className={
              pathMatch("/contact-us")
                ? "font-bold text-primary"
                : "font-light text-white"
            }
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
