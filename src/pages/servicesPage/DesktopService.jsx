import React from 'react'
import ServiceMain from '../../components/servicepage/ServiceMain'
import ServiceOffers from '../../components/servicepage/ServiceOffers'

const DesktopService = () => {
  return (
    <div>
      <ServiceMain/>
      <div className="services-container">
        <ServiceOffers />
      </div>
    </div>
  )
}

export default DesktopService