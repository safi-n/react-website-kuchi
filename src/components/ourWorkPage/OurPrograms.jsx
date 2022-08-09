import React from "react";
import pic from '../../assets/IMG/ServiceFlexibilty.png'
import test from '../../assets/IMG/test.png'
const OurPrograms = () => {
  return (
    <div className="our-program-container mt-36 mb-20">
      <div className="ow-programs-title">
        <h2 className="text-3xl font-light text-center">OUR PROGRAM</h2>
      </div>

      <div className="ow-programs-boxes flex p-16">
        {/* Box - Kabul street */}
        <div className="ow-program-box p-2 shadow-lg mr-5">
          <div className="ow-program-images-box grid grid-cols-3">
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box col-span-3 -m-3">
              <img src={test} alt=""/>
            </div>
            <div className="img-box col-span-3 -m-3">
              <img src={test} alt=""/>
            </div>
          </div>
          <div className="ow-program-description pl-2">
            <h2 className="text-lg pt-3">KABUL STREET</h2>
            <p className="pt-5 font-extralight text-sm pb-3">We are always aiming to evoke strong emotions in viewers. This is what allows us to create stunning 2D animated videos for our clients. We believe that sharing a story through innovative presentation technology creates a connection between the viewer and the product.</p>
          </div>
        </div>
        {/* Box - 4so  */}
        <div className="ow-program-box p-2 shadow-lg mr-5">
        <div className="ow-program-images-box grid grid-cols-3">
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box col-span-3 -m-3">
              <img src={test} alt=""/>
            </div>
            <div className="img-box col-span-3 -m-3">
              <img src={test} alt=""/>
            </div>
          </div>
          <div className="ow-program-description pl-2">
            <h2 className="text-lg pt-3">4so</h2>
            <p className="pt-5 font-extralight text-sm pb-3">We are always aiming to evoke strong emotions in viewers. This is what allows us to create stunning 2D animated videos for our clients. We believe that sharing a story through innovative presentation technology creates a connection between the viewer and the product.</p>
          </div>
        </div>
        {/* Box - Election 97 */}
        <div className="ow-program-box p-2 shadow-lg mr-5">
        <div className="ow-program-images-box grid grid-cols-3">
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box col-span-3 -m-3">
              <img src={test} alt=""/>
            </div>
            <div className="img-box col-span-3 -m-3">
              <img src={test} alt=""/>
            </div>
          </div>
          <div className="ow-program-description">
            <h2 className="text-lg pt-3">ELECTION 97</h2>
            <p className="pt-5 font-extralight text-sm pb-3">We are always aiming to evoke strong emotions in viewers. This is what allows us to create stunning 2D animated videos for our clients. We believe that sharing a story through innovative presentation technology creates a connection between the viewer and the product.</p>
          </div>
        </div>
        {/* Box - Tashwiq */}
        <div className="ow-program-box p-2 shadow-lg mr-5">
        <div className="ow-program-images-box grid grid-cols-3">
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
            <div className="img-box col-span-3 -m-3">
              <img src={test} alt=""/>
            </div>
            <div className="img-box col-span-3 -m-3">
              <img src={test} alt=""/>
            </div>
          </div>
          <div className="ow-program-description">
            <h2 className="text-lg pt-3">TASHWIQ</h2>
            <p className="pt-5 font-extralight text-sm pb-3">We are always aiming to evoke strong emotions in viewers. This is what allows us to create stunning 2D animated videos for our clients. We believe that sharing a story through innovative presentation technology creates a connection between the viewer and the product.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
