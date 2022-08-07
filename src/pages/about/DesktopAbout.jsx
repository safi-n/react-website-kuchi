import React from 'react'
import AboutMain from '../../components/aboutpage/AboutMain'
import AboutTeam from '../../components/aboutpage/AboutTeam'
import AboutWhatWeDo from '../../components/aboutpage/AboutWhatWeDo'

const DesktopAbout = () => {
  return (
    <div className='about-container'>
      <AboutMain/>
      <AboutTeam/>
      <AboutWhatWeDo/>
    </div>
  )
}

export default DesktopAbout