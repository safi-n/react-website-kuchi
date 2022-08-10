import React from 'react'
import PhotoCollectionList from '../../data/ProjectPhotoData'

const ProjectsPhotoShoot = () => {
  return (
    <div className='projects-photo-shoot mt-20 mb-20'>
      <div className="photo-shoot-title">
        <h2 className='text-3xl font-light'>PHOTO SHOOT</h2>
      </div>
      <ul>
      {
        PhotoCollectionList.map(photo => {
          return (
            <li>
              <div className="photo-shoot-caption">
                <h2>{photo.title} <span>{photo.year}</span></h2>
                <p>{photo.caption}</p>
                <h2>Organization: {photo.org}</h2>
              </div>
              <div className="photo-shoot-images">
                {
                  photo.images.forEach(img => <img src={img} alt='Photo'/>)
                }
              </div>
            </li>
          )
        })
      }  
      </ul>
    </div>
  )
}

export default ProjectsPhotoShoot