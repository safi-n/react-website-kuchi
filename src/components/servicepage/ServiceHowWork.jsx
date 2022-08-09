import React from "react";
import ServicePhone from '../../assets/IMG/ServicePhone.jpg'
import ServiceLocation from '../../assets/IMG/ServiceLocation.jpg'
import ServiceShooting from '../../assets/IMG/ServiceShooting.jpg'

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
    <div className="service-how-we-work-container h-screen">
      <div className="service-hww-mockup">
        <div className="content">
          <h2>HOW WE WORK</h2>
          <p>
            Kuchi films is not only a international projects led company, but
            can also an easy-to-work-with organization as a media production
            company, we streamlined our process so that our clients finds it
            very easy to get in touch and receive the production support need.
          </p>
        </div>
        <div className="work-lists">
          <ul>
            {

            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceHowWork;
