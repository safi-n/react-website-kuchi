import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import shootingOffer from '../../assets/SVG/FilmShooting.svg'
import designOffer from '../../assets/SVG/DesignOffer.svg'
import scoutingOffer from '../../assets/SVG/LocationOffer.svg'
const offerLists = [
  {
    id: uuidv4(),
    image: shootingOffer,
    title: 'FILM SHOOTING, EDITING & QUALITY CONTROL',
    description: 'Our graphic design staff are all well-versed in the application of cutting-edge softwares, post-processing and image manipulation techniques to all kinds of video source materials. This improves the final audio-visual output with both static and dynamic overlays.'
  },
  {
    id: uuidv4(),
    image: designOffer,
    title: 'GRAPHIC DESIGN, 2D ANIMATION & WEBSITES',
    description: 'Our Team is a full-service multi-media production company, handling projects from script to screen, and producing in all high-definition formats. Our background includes PSA and commercial production, corporate communications, television, documentaries, web video, and more.'
  },
  {
    id: uuidv4(),
    image: scoutingOffer,
    title: 'LOCATION SCOUTING & MANAGEMENT',
    description: 'We are always aiming to evoke strong emotions in viewers. This is what allows us to create stunning 2D animated videos for our clients. We believe that sharing a story through innovative presentation technology creates a connection between the viewer and the product.'
  },
]
const ServiceOffers = () => {
  return (
    <div className='service-offer-container'>
      <div className="offer-title text-center mb-12">
        <h2 className='text-3xl font-light leading-10'>WHAT VIDEO PRODUCTION SERVICES <br/>DOES <span className='font-medium'>KUCHI FILMS OFFER?</span></h2>
      </div>
      <div className="offer-lists">
        <ul className='flex justify-between'>
          {offerLists.map(offer => {
            return (
              <li key={offer.id} className='p-10 w-96'>
                <img src={offer.image} alt="offer pic" className='h-44 mb-6'/>
                <h2 className='mb-5 text-lg'>{offer.title}</h2>
                <p className='text-grey font-extralight text-xs leading-6'>{offer.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ServiceOffers