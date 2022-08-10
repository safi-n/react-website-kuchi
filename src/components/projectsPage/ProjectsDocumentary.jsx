import React from 'react'
import projectsDocumentariesList from '../../data/ProjectsDocumentary'
const ProjectsDocumentary = () => {
  return (
    <div className='projects-documentaries-container'>
      <div className="documentaries-title">
        <h2>DOCUMENTARIES</h2>
      </div>
      <div className="documentaries-lists">
        <ul className='docmentary-list'>
        {
          projectsDocumentariesList.map(documentary => {
            return(
              <li>
                <div className="doc-image">
                  <img src={documentary.image} alt="" />
                </div>
                <div className="doc-info">
                  <h2>{documentary.title} - <span>{documentary.year}</span></h2>
                  <p>{documentary.caption}</p>
                  <span>--------</span>
                  <h2>Organization - {documentary.organization}</h2>
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