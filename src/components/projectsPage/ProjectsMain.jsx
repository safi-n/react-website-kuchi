import React from "react";
import { HashLink } from 'react-router-hash-link';
const ProjectsMain = () => {
  return (
    <div className="about-main-container h-screen flex items-center justify-between pt-28">
      <div className="about-main-link flex flex-col leading-9">
        <h2>About Us</h2>
        <HashLink to={"/about-us#meet-team"} className='text-grey hover:text-black hover:ml-3'>Our Team</HashLink>
        <HashLink to={"/about-us#what-we-do"} className='text-grey hover:text-black hover:ml-3'>What We Do</HashLink>
        <HashLink to={"/about-us#our-mission"} className='text-grey hover:text-black hover:ml-3'>Our Mission</HashLink>
      </div>
      <div className="about-main-content ">
        <h2 className="font-medium text-4xl mb-6">PROJECTS</h2>
        <p className="text-lg text-grey font-light leading-9">
        Kuchi Films has successfully implemented projects for a wide range of different actors, including the UN and international NGOs as well as private stakeholders and civil society. For the aforementioned, Kuchi Films has produced short and long term media strategies, awareness campaigns, documentaries, social media clips, created corporate identities and organized public events. For UNDP, Kuchi Films produced two short films on the Afghan National Police, one of which made it into the official selection of the Changing Face International Film Festival in 2019. Additionally, for UN-HABITAT, Kuchi Films produced a photo documentation on the occasion of UN-HABITAT’s 20th anniversary in Afghanistan. This photo documentation included an overview of a wide range of initiatives, helping Afghan communities to improve their living conditions whilst developing links with local government structures. The work of UN-HABITAT is based on the principles of community solidarity and empowerment in both urban and rural areas.
        </p>
      </div>
    </div>
  );
};

export default ProjectsMain;
