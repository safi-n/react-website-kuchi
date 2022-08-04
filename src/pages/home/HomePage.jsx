import React from "react";
import "../../style/home.css";
import kuchiBaba from "../../assets/IMG/kuchiBaba.jpg";

const HomePage = () => {
  return (
    <>
      <div className="hero-container h-screen">
        <img src={kuchiBaba} alt="" />
      </div>
      <div className="home-container"></div>
    </>
  );
};

export default HomePage;
