import React from 'react'
import OfficialSelected from '../../components/ourWorkPage/OfficialSelected'
import OurPrograms from '../../components/ourWorkPage/OurPrograms'
import OurWorkMain from '../../components/ourWorkPage/OurWorkMain'
import PhotoCollection from '../../components/ourWorkPage/PhotoCollection'
import ShowcaseWork from '../../components/ourWorkPage/ShowcaseWork'

const DesktopOurWork = () => {
  return (
    <div>
      <OurWorkMain/>
      <OurPrograms/>
      <OfficialSelected/>
      <ShowcaseWork/>
      <PhotoCollection/>
    </div>
  )
}

export default DesktopOurWork