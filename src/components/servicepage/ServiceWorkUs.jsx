import React from 'react'
import {v4 as uuidv4} from 'uuid'
import Quality from '../../assets/IMG/ServiceLens.png'
import Flexibility from '../../assets/IMG/ServiceFlexibilty.png'
import Filming from '../../assets/IMG/ServiceShooting.png'
const workingProcessLists = [
  {
    id: uuidv4(),
    image: Quality,
    title: 'QUALITY ASSURANCE',
    description: 'Our graphic design staff are all well-versed in the application of cutting-edge softwares, post-processing and image manipulation techniques to all kinds of video source materials. This improves the final audio-visual output with both static and dynamic overlays.'
  },
  {
    id: uuidv4(),
    image: Flexibility,
    title: 'FLEXIBILITY & LOCAL DEALS',
    description: 'Our Team is a full-service multi-media production company, handling projects from script to screen, and producing in all high-definition formats. Our background includes PSA and commercial production, corporate communications, television, documentaries, web video, and more.'
  },
  {
    id: uuidv4(),
    image: Filming,
    title: 'A STREAMLINED FILMING PROCESS',
    description: 'We are always aiming to evoke strong emotions in viewers. This is what allows us to create stunning 2D animated videos for our clients. We believe that sharing a story through innovative presentation technology creates a connection between the viewer and the product.'
  },
]
const ServiceWorkUs = () => {
  return (
    <div className="service-working-with-us-container mb-36">
      <div className="service-wwu-mockup pt-9 p-9">
        <div className="service-hww-content flex flex-col p-10 pl-56 pr-56">
          <h2 className="text-3xl  text-center mb-7 mt-10">WORKING WITH US</h2>
          <p className=" font-light text-md text-center mb-2 leading-9">
          There are many benefits of working with Kuchi Films to name some below are the 3 benefits that would have a positive impact on your project.
          </p>
        </div>
        <div className="work-lists">
          <ul className="flex justify-evenly ml-6">
            {
            workingProcessLists.map(work => {
              return(
                <li key={work.id} className='mt-10'>
                  <img src={work.image} alt="work list img" className="hww-photos"/>
                  <h2 className="mb-5 font-medium pl-6">{work.title}</h2>
                  <p className="pl-6 pr-36 font-extralight text-sm text-grey">{work.description}</p>
                </li>
              )
            })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceWorkUs