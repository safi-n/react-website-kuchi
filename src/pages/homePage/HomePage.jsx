import TechnicalCat from "../../data/TechnicalCat";
import OrganizationalCat from "../../data/OrganizationalCat";
import "../../style/home.css";
import kuchiBaba from "../../assets/IMG/kuchiBaba.jpg";
import logoContent from "../../assets/logo/Asset 6@2x.png";
import logoContent2 from "../../assets/logo/Asset 8@2x.png";
import logoContent3 from "../../assets/logo/EXCJ3m@2x.png";
import logoContent4 from "../../assets/logo/GRVbbi.tif@2x.png";
import logoContent5 from "../../assets/logo/hqFXYn@2x.png";
import logoContent6 from "../../assets/logo/VD03La.tif@2x.png";
import logoContent7 from "../../assets/logo/Zr5RCG.tif@2x.png";
import logoContent8 from "../../assets/logo/vFnvkb.tif@2x.png";
import logoContent9 from "../../assets/logo/ZRPMbi.tif@2x.png";
import LatestWorkList from "../../components/homepage/LatestWorkList";
import PhotoWorkList from "../../components/homepage/PhotoWorkList";
import AnimationWorkList from "../../components/homepage/AnimationWorkList";
import { HashLink } from "react-router-hash-link";

const HomePage = () => {
  return (
    <>
      <div className="main-cont flex flex-col">
        <div className="hero-container mb-36">
          <img src={kuchiBaba} alt="" className="HomeBannerImg"/>
        </div>
        <div className="home-container text-center">
          {/* ------ ABOUT KUCHI */}
          <div className="about-kuchi flex flex-col items-center mb-32">
            <h2 className="text-3xl font-medium mb-8">
              <span className="font-light">ABOUT</span> KUCHI
            </h2>
            <p className="paragraf leading-8 text-grey font-light">
              We are an award-winning, video-focused creative agency for
              charitable nonprofits, associations, and mission-driven
              organizations who want to exciteaudiences to action.
            </p>
          </div>
          {/* ------ OUR SERVICES */}
          <div className="our-service">
            <div className="our-service-title">
              <h2 className="text-3xl font-medium mb-8">
                <span className="font-light">OUR</span> SERVICES
              </h2>
            </div>
            {/* technical lists */}
            <div className="technical-service flex flex-col items-start mb-20">
              <div className="technical-title">
                <h2 className="text-xl font-normal mb-2">TECHNICAL CAPACITY</h2>
                <div className="technical-button bg-primary p-2 mb-8">
                  <HashLink to={"/about-us#technicalCapacity"}>LEARN MORE</HashLink>
                </div>
              </div>
              <div className="technical-lists flex justify-between">
                {TechnicalCat.map((list) => {
                  return (
                    <div className="organizational-list">
                      <img src={list.image} alt="list pic" className="capacityImg shadow-sm" />
                      <h2 className="mt-3 text-left font-medium">
                        {list.title}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Organizational - lists */}
            <div className="organizational-service flex flex-col items-start">
              <div className="organizational-title">
                <h2 className="text-xl font-normal mb-2">
                  ORGANIZATION CAPACITY
                </h2>
                <div className="organizational-button bg-primary p-2 mb-8">
                  <HashLink to={"/about-us#orgCapacity"}>LEARN MORE</HashLink>
                </div>
              </div>
              <div className="organizational-lists flex justify-between">
                {OrganizationalCat.map((list) => {
                  return (
                    <div className="organizational-list">
                      <img src={list.image} alt="list pic" className="capacityImg shadow-sm"/>
                      <h2 className="mt-3 text-left font-medium">
                        {list.title}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* ----- CONTENT SERVICES */}
          <div className="content-serviced mt-36 mb-32">
            <div className="content-service-title">
              <h2 className="text-3xl font-light mb-20">
                WE SERVICED <span className="font-bold">CONTENT</span> FOR
              </h2>
            </div>
            {/* Row 1 */}
            <div className="serviced-row-1 flex p-8 border-primary items-center">
              <div className="serviced-box hover:shadow-lg p-3">
                <img src={logoContent} alt="logos - comtent" />
              </div>
              <div className="serviced-box  hover:shadow-lg p-5 m-8">
                <img src={logoContent2} alt="logos - comtent" />
              </div>
              <div className="serviced-box  hover:shadow-lg p-5 m-8">
                <img src={logoContent3} alt="logos - comtent" />
              </div>
            </div>
            {/* Row 2 */}
            <div className="serviced-row-2 flex p-4 border-primary items-center">
              <div className="serviced-box hover:shadow-lg p-5 m-8">
                <img src={logoContent4} alt="logos - comtent" />
              </div>
              <div className="serviced-box hover:shadow-lg p-5 m-8">
                <img src={logoContent5} alt="logos - comtent" />
              </div>
              <div className="serviced-box hover:shadow-lg p-5 m-8">
                <img src={logoContent6} alt="logos - comtent" />
              </div>
            </div>
            {/* Row 3 */}
            <div className="serviced-row-3 flex p-4 border-primary items-center">
              <div className="serviced-box hover:shadow-lg p-5 m-8">
                <img src={logoContent7} alt="logos - comtent" />
              </div>
              <div className="serviced-box hover:shadow-lg p-5 m-8 items-center">
                <img src={logoContent8} alt="logos - comtent" />
              </div>
              <div className="serviced-box hover:shadow-lg p-5 m-8">
                <img src={logoContent9} alt="logos - comtent" />
              </div>
            </div>
          </div>

          {/* ------ OUR LATEST WORK */}
          <div className="latest-work-container">
            <div className="latest-work-title mb-16">
              <h2 className="font-light text-3xl">
                OUR LATEST <span className="font-bold">WORK</span>
              </h2>
            </div>
            {/* Work Documentary List */}
            <div className="latest-work-category">
              <h2 className="text-primary text-left mb-2 text-xl">
                DOCUMANTARIES
              </h2>
            </div>
            <div className="latest-works-list grid grid-flow-col grid-row-1 mb-20">
              <LatestWorkList />
            </div>
            {/* Work Photo List */}
            <div className="latest-work-category mt-16">
              <h2 className="text-primary text-left mb-2 text-xl">
                PHOTOS
              </h2>
            </div>
            <div className="latest-works-list grid grid-flow-col grid-row-1 mb-20">
              <PhotoWorkList/>
            </div>
            {/* Animation Work List */}
            <div className="latest-work-category hidden">
              <h2 className="text-primary text-left mb-2 text-xl">
                ANIMATION
              </h2>
            </div>
            <div className="latest-works-list -grid- grid-flow-col grid-row-1 mb-20 hidden">
              <AnimationWorkList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
