import React from 'react'
import WhatWeDoData from '../../data/WhatWeDoData'

const AboutWhatWeDo = () => {
  return (
    <>
    <div className="what-we-do-container mt-20">
      <div className="what-we-do-title text-center">
        <h2 className='text-3xl font-light'>WHAT WE <span className='font-medium'>DO</span></h2>
      </div>
      <div className="what-we-do-cat mt-20">
        <h2 className='text-xl'>TECHNICAL CAPACITY</h2>
      </div>
      <div className="what-we-do-data">
        <ul className='flex justify-between '>
          {
            WhatWeDoData.map(technicalData => {
              return(
                <li className='w-72 mt-7'>
                  <img src={technicalData.image} alt="wwdo data" />
                  <h2 className='text-lg mt-7'>{technicalData.title}</h2>
                  <p className='text-justify text-sm text-grey mt-4'>{technicalData.info}</p>
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