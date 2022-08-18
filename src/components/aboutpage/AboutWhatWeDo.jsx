import React from 'react'
import WhatWeDoData from '../../data/WhatWeDoData'
import OrgCapability from '../../data/OrgCapability'
const AboutWhatWeDo = () => {
  return (
    <>
    <div className="what-we-do-container mt-20" id='what-we-do'>
      <div className="what-we-do-title text-center">
        <h2 className='text-3xl font-light'>WHAT WE <span className='font-medium'>DO</span></h2>
      </div>
      <div className="what-we-do-cat mt-20" id='technicalCapacity'>
        <h2 className='text-xl'>TECHNICAL CAPACITY</h2>
      </div>
      <div className="what-we-do-data" >
        <ul className='flex justify-between '>
          {
            WhatWeDoData.map(technicalData => {
              return(
                <li className='w-72 mt-7' key={technicalData.id}>
                  <img src={technicalData.image} alt="wwdo data" className='h-36'/>
                  <h2 className='text-lg mt-7'>{technicalData.title}</h2>
                  <p className='text-justify text-sm text-grey mt-4'>{technicalData.info}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      {/* ----------------------------- */}
      <div className="what-we-do-cat mt-20" id='orgCapacity'>
        <h2 className='text-xl'>ORGANIZATIONAL CAPACITY</h2>
      </div>
      <div className="what-we-do-data">
        <ul className='flex justify-between mb-36'>
          {
            OrgCapability.map(OrgData => {
              return(
                <li className='w-72 mt-7' key={OrgData.id}>
                  <img src={OrgData.image} alt="wwdo data"  className='h-36'/>
                  <h2 className='text-lg mt-7 h-11'>{OrgData.title}</h2>
                  <p className='text-justify text-sm text-grey mt-4 font-light'>{OrgData.info}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
    </>
  )
}

export default AboutWhatWeDo