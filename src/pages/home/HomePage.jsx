import React from "react";
import { Link } from "react-router-dom";
import "../../style/home.css";
import kuchiBaba from "../../assets/IMG/kuchiBaba.jpg";
import technicalList from '../../data/technical-list.json'

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
          <div className="our-service">
            <div className="our-service-title">
              <h2 className="text-3xl font-medium mb-8">
                <span className="font-light">OUR</span> SERVICES
              </h2>
            </div>
            <div className="technical-service flex flex-col items-start">
              <div className="technical-title">
                <h2 className="text-xl font-normal mb-2">TECHNICAL CAPACITY</h2>
                <div className="technical-button bg-primary p-2 mb-8">
                <Link to={'/about-us'}>LEARN MORE</Link>
                </div>
              </div>
              <div className="technical-lists flex justify-between">
              {
                technicalList.map(list => {
                  return(
                  <div className="technical-list bg-primary p-4">
                    <img src={list.url} alt="list pic"/>
                    {list.caption}
                  </div>
                  )
                })
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
