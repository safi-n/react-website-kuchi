import React from "react";
import { v4 as uuidv4 } from 'uuid';
import ServiceLocation from '../../assets/IMG/ServiceLocation.png'
import ServiceShooting from '../../assets/IMG/ServiceShooting.png'
import ServicePhone from '../../assets/IMG/ServicePhone.png'

const workLists = [
  {
    id: uuidv4(),
    image: ServicePhone,
    title: 'GET IN TOUCH',
    description: 'Our graphic design staff are all well-versed in the application of cutting-edge softwares, post-processing and image manipulation techniques to all kinds of video source materials. This improves the final audio-visual output with both static and dynamic overlays.'
  },
  {
    id: uuidv4(),
    image: ServiceLocation,
    title: 'LOCATIONS & PLANING',
    description: 'Our Team is a full-service multi-media production company, handling projects from script to screen, and producing in all high-definition formats. Our background includes PSA and commercial production, corporate communications, television, documentaries, web video, and more.'
  },
  {
    id: uuidv4(),
    image: ServiceShooting,
    title: 'SHOOTING',
    description: 'We are always aiming to evoke strong emotions in viewers. This is what allows us to create stunning 2D animated videos for our clients. We believe that sharing a story through innovative presentation technology creates a connection between the viewer and the product.'
  },
]
const ServiceHowWork = () => {
  return (
    <div className="service-how-we-work-container mb-56">
      <div className="service-hww-mockup pt-9 p-9">
        <div className="service-hww-content flex flex-col p-10 pl-56 pr-56">
          <h2 className="text-3xl text-white text-center mb-7 mt-10">HOW WE WORK</h2>
          <p className="text-white font-light text-md text-center mb-2 leading-9">
            Kuchi films is not only a international projects led company, but
            can also an easy-to-work-with organization as a media production
            company, we streamlined our process so that our clients finds it
            very easy to get in touch and receive the production support need.
          </p>
        </div>
        <div className="work-lists">
          <ul className="flex justify-between">
            {
            workLists.map(work => {
              return(
                <li key={work.id} className='mt-10'>
                  <img src={work.image} alt="work list img" className="hww-photos"/>
                  <h2 className="mb-5 font-medium pl-6">{work.title}</h2>
                  <p className="pl-6 pr-20 font-extralight text-sm text-grey">{work.description}</p>
                </li>
              )
            })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceHowWork;
