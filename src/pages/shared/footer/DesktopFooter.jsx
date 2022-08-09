import React from 'react'
import Logo from '../../../assets/logo/KuchiLogo-Orignal.svg'
import Facebook from '../../../assets/logo/Icon awesome-facebook-f.svg'
import Twitter from '../../../assets/logo/Icon awesome-twitter.svg'
import Youtube from '../../../assets/logo/Icon awesome-youtube.svg'
import Tiktok from '../../../assets/logo/Icon simple-tiktok.svg'
const DesktopFooter = () => {
  return (
    <>
      <div className="footer-container flex w-screen justify-between p-10 bg-grey-light items-center">
        <div className="logo-footer">
          <img src={Logo} alt="Kuchi logo" />
        </div>
        {/* -- */}
        <div className="links-footer"></div>
        {/* -- */}
        <div className="social-media-footer flex flex-col pr-20">
          <h2 className='text-2xl'>CONTACT WITH US</h2>
          <div className="social-media-icons-footer flex justify-evenly mt-5">
            <img src={Facebook} alt="FB logo" />
            <img src={Twitter} alt="TW logo" />
            <img src={Youtube} alt="YT logo" />
            <img src={Tiktok} alt="TK logo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopFooter