import React from 'react'
import ProjectsDocumentary from '../../components/projectsPage/ProjectsDocumentary'
import ProjectsMain from '../../components/projectsPage/ProjectsMain'
import ProjectsPhotoShoot from '../../components/projectsPage/ProjectsPhotoShoot'

const DesktopProjects = () => {
  return (
    <div className='projects-container'>
      <ProjectsMain/>
      <ProjectsDocumentary />
      <ProjectsPhotoShoot/>
    </div>
  )
}

export default DesktopProjects