import React from 'react'
import Video from '../../assets/IMG/kuchiBaba.jpg'

const ServiceMain = () => {
  return (
    <div className='h-screen main-service-container flex items-center pt-36'>
      <div className="main-service-content pl-12 pr-72">
        <h2 className='text-3xl font-light leading-10 mb-12'>LOCAL VIDEO PRODUCTION <br/>SERVICES AT <span className='font-medium'>INTERNATIONAL <br/>STANDARDS</span></h2>
        <p className='main-paragraf leading-8 font-light text-grey'>Our video production services include research & fact-checking as well as logistics management. Whether you need to shoot a corporate video, documentary, feature film or a news story, you can count on us. We comply to international standards of quality for our services in any of the 34 provinces of Afghanistan.</p>
      </div>
      <div className="main-service-video">
        <div className="img-box">
          <img src={Video} alt="Vd services" />
        </div>
      </div>
    </div>
  )
}

export default ServiceMain