import PhotoCollectionList from '../../data/ProjectPhotoData'

const ProjectsPhotoShoot = () => {
  return (
    <div className='projects-photo-shoot mt-20 mb-20'>
      <div className="photo-shoot-title">
        <h2 className='text-3xl font-light'>PHOTO SHOOT</h2>
      </div>
      <ul className='photo-shoot-lists mt-30'>
      {
        PhotoCollectionList.map(singlePhoto => {
          return (
            <li key={singlePhoto.id} className='photo-shoot-list'>
              <div className="photo-shoot-caption p-30">
                <h2 className=''>{singlePhoto.title} <span>{singlePhoto.year}</span></h2>
                <p>{singlePhoto.caption}</p>
                <h2>Organization: {singlePhoto.org}</h2>
              </div>
              <div className="photo-shoot-images">
              {
                // singlePhoto.images.forEach(index => {
                //   return <p key={index}>Hello shit</p>
                // })
                singlePhoto.images.map(singlePhotoImage => {
                  return (
                    <div key={singlePhotoImage.id} >
                      <img src={singlePhotoImage.image} />
                    </div>
                    // <p key={index}>Hello shit</p>
                  )
                }) 
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