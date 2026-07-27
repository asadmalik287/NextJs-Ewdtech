import React, { useEffect } from 'react';
const assure = '/assets/images/client-logos/assure.webp';
const bluecascade = '/assets/images/client-logos/bluecascade.webp';
const missionarias = '/assets/images/client-logos/missionarias.webp';
const vcc = '/assets/images/client-logos/vcc.webp';
const neoncrafts = '/assets/images/client-logos/neoncrafts.webp';
const california = '/assets/images/client-logos/california.webp';
const startsortscale = '/assets/images/client-logos/startsortscale.webp';
const wedding = '/assets/images/client-logos/wedding.webp';
const neonoutshine = '/assets/images/client-logos/neonoutshine.webp';
const vintage = '/assets/images/client-logos/vintage.webp';
const jageer = '/assets/images/client-logos/jageer.webp';
const sumbargo = '/assets/images/client-logos/sumbargo.webp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
export const ClientLogos = ({ title, desc, bgColor }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // set breakpoint for mobile view
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // MOBILE VIEW

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    centerPadding: 0,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // beforeChange: (current, next) => setImageIndex (next),
  };

  // MOBILE VIEW
  const logos = [
    { id: 1, width:"200px", logo:  assure },
    { id: 2, width:"auto", logo: bluecascade },
    { id: 3, width:"auto", logo: missionarias },
    { id: 4, width:"auto", logo: neoncrafts },
    { id: 5, width:"auto", logo: california },
    { id: 6, width:"auto", logo:  startsortscale },
    { id: 7, width:"auto", logo: wedding },
    { id: 8, width:"auto", logo: neonoutshine },
    { id: 9, width:"auto", logo: vintage },
    { id: 10, width:"auto", logo: vcc },
    { id: 11, width:"auto", logo: jageer },
    { id: 12, width:"auto", logo: sumbargo },
  ];
  return (
    <React.Fragment>
      <section className={`mainMarginTop maindPadding ${bgColor} `}>
        <section className="lgPaddingLeftRight py-12">
          <h2 className="text-white text-4xl bold-font text-center mt-8">
            {title}
          </h2>
          <p className="text-white lg:w-2/4 w-full text-lg m-auto text-center pt-3">
            {desc}
          </p>
          <section className='mt-8'>
            {
              isMobile ?
                <Slider {...settings} loop={true} autoplay={true}>
                   {logos.map(logo => {
                    return (
                      <div
                        key={logo.id}
                        className=" animation__image__div logo-client-mobile  text-center p-2 flex items-center justify-center client-logos-child lg:mb-8 mb-3"
                      >
                        <img
                          alt="images not found" width={`${logo.width}`}
                          src={logo.logo}
                          className="m-auto animationImage animation__image"
                        />
                      </div>
                    );
                  })}
                </Slider>
                :
                <div className="pt-12 lg:mt-12 mt-0 client-logos flex flex-wrap justify-between ">
                  {logos.map(logo => {
                
                    return (
                      <div
                        key={logo.id}

                        className="bg-031017 animation__image__div  text-center px-5 py-6 flex items-center justify-center client-logos-child lg:mb-8 mb-3"
                      >
                        <img
                          alt="images not found"
                          width={`${logo.width}`}
                          src={logo.logo}
                          className="m-auto animationImage animation__image"
                        />
                      </div>
                    );
                  })}
                </div>
            }

          </section>

        </section>
      </section>

    </React.Fragment>
  );
};
