import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../style/navbar.css";

const DesktopNavbar = () => {
  const [color, setColor] = useState(false);
  const location = useLocation();

  const pathMatch = (route) => {
    if (route === location.pathname) {
      return location;
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor)
  return (
    <>
      <div
        className={
          pathMatch("/") && color ?  "navbar-container bg-header" : "navbar-container bg-black"
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
            to="/production"
            className={
              pathMatch("/production")
                ? "font-bold text-primary "
                : "font-light text-white"
            }
          >
            Production
          </Link>
        </div>
        <div className="navbar-logo"></div>
        <div className="navbar-link">
          <Link
            to="/programs"
            className={
              pathMatch("/programs")
                ? "font-bold text-primary"
                : "font-light text-white"
            }
          >
            Programs
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
    </>
  );
};

export default DesktopNavbar;
