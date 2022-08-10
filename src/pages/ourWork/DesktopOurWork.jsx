import React from 'react'
import OfficialSelected from '../../components/ourWorkPage/OfficialSelected'
import OurPrograms from '../../components/ourWorkPage/OurPrograms'
import OurWorkMain from '../../components/ourWorkPage/OurWorkMain'
import ShowcaseWork from '../../components/ourWorkPage/ShowcaseWork'

const DesktopOurWork = () => {
  return (
    <div>
      <OurWorkMain/>
      <OurPrograms/>
      <OfficialSelected/>
      <ShowcaseWork/>
    </div>
  )
}

export default DesktopOurWork