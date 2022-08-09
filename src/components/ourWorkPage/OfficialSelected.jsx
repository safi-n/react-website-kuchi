import React from 'react'
import documentary from '../../assets/IMG/kuchiBaba.jpg'
const officialSelectedDoc = [
  {
    id: '01',
    image: documentary
  },
  {
    id: '02',
    image: documentary
  },
  {
    id: '03',
    image: documentary
  },
  {
    id: '04',
    image: documentary
  },
]
const OfficialSelected = () => {
  return (
    <div className='official-selected-container mb-10'>
      <div className="official-selected-title">
        <h2 className='text-3xl  text-center font-light'>OFFICIAL SELECTED <span className='font-medium'>DOCUMENTARIES</span></h2>
      </div>
      <div className="official-selected-documentaries">
        <ul className='flex p-10'>
          {
            officialSelectedDoc.map(doc => {
              return (
                <li key={doc.id} className='p-6'>
                  <img src={doc.image} alt="" className='h-56' />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default OfficialSelected