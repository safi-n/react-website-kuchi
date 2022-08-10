import React from 'react'
import projectsDocumentariesList from '../../data/ProjectsDocumentary'
const ProjectsDocumentary = () => {
  return (
    <div className='projects-documentaries-container mt-20'>
      <div className="documentaries-title">
        <h2 className='text-3xl'>DOCUMENTARIES</h2>
      </div>
      <div className="documentaries-lists">
        <ul className='docmentary-list'>
        {
          projectsDocumentariesList.map(documentary => {
            return(
              <li className='flex space-x-6 py-5'>
                <div className="doc-image pr-4">
                  <img src={documentary.image} alt="" className='doc-image'/>
                </div>
                <div className="doc-info">
                  <h2 className='text-xl'>{documentary.title} <span className='text-sm font-light'> ({documentary.year})</span></h2>
                  <p className='font-extralight py-4 doc-border'>{documentary.caption}</p>
                  <h2 className='font-light text-grey'>Organization - {documentary.organization}</h2>
                </div>
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default ProjectsDocumentary