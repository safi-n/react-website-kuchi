import React from 'react'
import AnimationWorkData from '../../data/AnimationWorkData'
const AnimationWorkList = () => {
  return (
    <>
      <ul className="latest-works-list grid grid-flow-col grid-row-1">
        {AnimationWorkData.map((animation) => {
          return (
            <li className="latest-work-list mr-12 text-left" key={animation.id}>
              <img src={animation.image} alt="latest work" className="" />
              <h2 className="latest-work-title font-medium text-lg mt-2">
                {animation.title}
              </h2>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default AnimationWorkList