import React from "react";
import { Link } from "react-router-dom";
import "../../style/home.css";
import kuchiBaba from "../../assets/IMG/kuchiBaba.jpg";
import technicalList from "../../data/technical-list.json";
import organizationalList from "../../data/organizational-list.json";

const HomePage = () => {
  return (
    <>
      <div className="main-cont flex flex-col">
        <div className="hero-container mb-36">
          <img src={kuchiBaba} alt="" />
        </div>
        <div className="home-container text-center">
          <div className="about-kuchi flex flex-col items-center mb-32">
            <h2 className="text-3xl font-medium mb-8">
              <span className="font-light">ABOUT</span> KUCHI
            </h2>
            <p className="paragraf leading-8 text-grey font-light">
              We are an award-winning, video-focused creative agency for
              charitable nonprofits, associations, and mission-driven
              organizations who want to exciteaudiences to action.
            </p>
          </div>
          {/* Our services */}
          <div className="our-service">
            <div className="our-service-title">
              <h2 className="text-3xl font-medium mb-8">
                <span className="font-light">OUR</span> SERVICES
              </h2>
            </div>
            {/* technical lists */}
            <div className="technical-service flex flex-col items-start mb-20">
              <div className="technical-title">
                <h2 className="text-xl font-normal mb-2">TECHNICAL CAPACITY</h2>
                <div className="technical-button bg-primary p-2 mb-8">
                  <Link to={"/about-us"}>LEARN MORE</Link>
                </div>
              </div>
              <div className="technical-lists flex justify-between">
                {technicalList.map((list) => {
                  return (
                    <div className="technical-list bg-grey p-4">
                      <img src={list.url} alt="list pic" />
                      {list.caption}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Organizational - lists */}
            <div className="organizational-service flex flex-col items-start">
              <div className="organizational-title">
                <h2 className="text-xl font-normal mb-2">
                  ORGANIZATION CAPACITY
                </h2>
                <div className="organizational-button bg-primary p-2 mb-8">
                  <Link to={"/about-us"}>LEARN MORE</Link>
                </div>
              </div>
              <div className="organizational-lists flex justify-between">
                {organizationalList.map((list) => {
                  return (
                    <div className="organizational-list bg-grey p-4">
                      <img src={list.url} alt="list pic" />
                      {list.caption}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="content-serviced">
            <div className="serviced-row-1 flex p-4 border-primary">
              <div className="serviced-box ">
                <img src={kuchiBaba} alt="logos - comtent" />
              </div>
              <div className="serviced-box">
                <img src={kuchiBaba} alt="logos - comtent" />
              </div>
              <div className="serviced-box">
                <img src={kuchiBaba} alt="logos - comtent" />
              </div>
            </div>
            <div className="serviced-row-2">
              <div className="serviced-box"></div>
              <div className="serviced-box"></div>
              <div className="serviced-box"></div>
            </div>
            <div className="serviced-row-3">
              <div className="serviced-box"></div>
              <div className="serviced-box"></div>
              <div className="serviced-box"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
