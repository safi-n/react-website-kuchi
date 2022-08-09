import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const AboutMain = () => {
  return (
    <div className="about-main-container h-screen flex items-center justify-between pt-24">
      <div className="about-main-link flex flex-col leading-9">
        <h2>About Us</h2>
        <HashLink to={"/about-us#meet-team"} className='text-grey hover:text-black hover:ml-3'>Our Team</HashLink>
        <HashLink to={"/about-us#what-we-do"} className='text-grey hover:text-black hover:ml-3'>What We Do</HashLink>
        <HashLink to={"/about-us#our-mission"} className='text-grey hover:text-black hover:ml-3'>Our Mission</HashLink>
      </div>
      <div className="about-main-content ">
        <h2 className="font-light text-4xl mb-4">ABOUT US</h2>
        <p className="text-lg text-grey font-light leading-9">
          Kuchi Films was founded in 2010 by a team of Afghan and foreign media
          experts with over 30 years of combined experience in the creative
          fields. Kuchi Films aims to bring a new standard of quality to the
          film industry in Afghanistan and bring the culture and customs of
          Afghan communities onto screen. Kuchi Films specializes in accessing
          remote areas of the country which may appear beyond reach, yet with
          careful planning and respect for local customs, we can access a hidden
          world and reveal the untold stories of rural Afghanistan. Producing
          high quality documentary films is the central passion of Kuchi Film’s
          production team. Drawing on the experience of a multinational,
          award-winning crew, combined with local knowledge and cutting edge
          equipment, each film gives the viewer a unique window into another
          world.
        </p>
      </div>
    </div>
  );
};

export default AboutMain;
