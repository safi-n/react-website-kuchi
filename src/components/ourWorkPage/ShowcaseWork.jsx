import React from 'react'
import { HashLink } from 'react-router-hash-link'
import SampleDocumentariesList from '../../data/SampleDocumentaries'

const ShowcaseWork = () => {
  return (
    <div className='ow-showcase-work-container mb-32'>
      <div className="showcase-title text-center">
        <h2 className='text-3xl font-light'>SHOW CASE OF <span className='font-medium'>SAMPLE OF WORK</span></h2>
      </div>
      <div className="showcase-page-nav ml-16 pt-16">
        <HashLink to='/projects#test'>
          <span className='text-md font-extralight bg-primary p-2'>DISCOVER MORE</span>
        </HashLink>
      </div>
      <div className="showcase-documentaries ml-14">
        <ul className='grid grid-flow-col grid-cols-3 grid-rows-2 gap-6 py-5'>
      {
        SampleDocumentariesList.map(documentary => {
          return(
            <li className='m-3'>
              <img src={documentary.image} alt="doc pic" className='h-48'/>
              <h2 className='text-lg font-md pt-4'>{documentary.title}</h2>
              <p className='text-xs italic font-light text-grey'>{documentary.year} - {documentary.lenght} minutes</p>
              <p  className='text-sm font-light w-80 py-1'>{documentary.caption}</p>
            </li>
          )
        })
      }
      </ul>
      </div>
    </div>
  )
}

export default ShowcaseWork