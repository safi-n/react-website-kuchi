import React from 'react'
import ProjectsDocumentary from '../../components/projectsPage/ProjectsDocumentary'
import ProjectsMain from '../../components/projectsPage/ProjectsMain'

const DesktopProjects = () => {
  return (
    <div className='projects-container'>
      <ProjectsMain/>
      <ProjectsDocumentary />
    </div>
  )
}

export default DesktopProjects