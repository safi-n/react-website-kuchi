import React from 'react'
import ServiceHowWork from '../../components/servicepage/ServiceHowWork'
import ServiceMain from '../../components/servicepage/ServiceMain'
import ServiceOffers from '../../components/servicepage/ServiceOffers'
import ServiceWorkUs from '../../components/servicepage/ServiceWorkUs'

const DesktopService = () => {
  return (
    <div>
      <ServiceMain/>
      <div className="services-container">
        <ServiceOffers />
      </div>
      <ServiceHowWork/>
      <ServiceWorkUs />
    </div>
  )
}

export default DesktopService