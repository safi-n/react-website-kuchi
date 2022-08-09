import React from 'react'
import Video from '../../assets/IMG/kuchiBaba.jpg'

const ServiceMain = () => {
  return (
    <div className='h-screen main-service-container flex items-center'>
      <div className="main-service-content">
        <h2 className='text-3xl mb-4 font-light'>LOCAL VIDEO PRODUCTION SERVICES AT <span className='font-medium'>INTERNATIONAL STANDARDS</span></h2>
        <p>Our video production services include research & fact-checking as well as logistics management. Whether you need to shoot a corporate video, documentary, feature film or a news story, you can count on us. We comply to international standards of quality for our services in any of the 34 provinces of Afghanistan.</p>
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