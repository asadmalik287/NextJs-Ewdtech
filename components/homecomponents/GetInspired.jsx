import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const banner = "/assets/images/banner-2.webp";
const banner1 = "/assets/images/banner.webp";
const rightIcon = "/assets/images/right.svg";
export const GetInspired = ({ desc }) => {
  // const [imageIndex, setImageIndex] = useState (0);
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    centerPadding: 0,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // beforeChange: (current, next) => setImageIndex (next),
  };
  return (
    <React.Fragment>
    <section className="hidden">
    <section className="pt-12 maindPadding mb-12">
        <section className="">
          <h2 className="text-4xl bold-font text-center  md:w-4/12 m-auto text-center w-full">
            Get Inspired by Some of Our Finest Work.
          </h2>
          <p className="opacity-70 pt-3 md:w-5/12 m-auto text-center">{desc}</p>
        </section>
      </section>
      <section className="getInspiredSecMain overflow-hidden">
        <Slider {...settings} loop={true} autoplay={true}>
          <div>
            <section
              className="bookMettingBgImage bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div className="md:w-8/12 w-full">
                <p className="text-white">
                  Zenith is in the business of inspiring all types of film types
                  to perform at their best potential no matter how many sun rays
                  are there, zenith films are noted the best.
                </p>
                <div className="flex pt-4">
                  <div>
                    <h2 className="text-2xl text-white bold-font">75%</h2>
                    <p className="text-white">ROI Increase</p>
                  </div>
                  <div className="pl-8">
                    <h2 className="text-2xl text-white bold-font">85%</h2>
                    <p className="text-white">Conversion Rate</p>
                  </div>
                  <div className="pl-8">
                    <h2 className="text-2xl text-white bold-font">25%</h2>
                    <p className="text-white">Cost Per Lead</p>
                  </div>
                </div>
                <div className="mt-7">
                  <button className="bg-white uppercase lg:w-60 md:w-72 sm:w-60 w-60 font-semibold  flex justify-center items-center py-4  text-center">
                    Case Study <img className="ml-4" alt="" src={rightIcon} />
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section
              className="bookMettingBgImage bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${banner1})` }}
            >
              <div className="md:w-8/12 w-full">
                <p className="text-white">
                  Zenith is in the business of inspiring all types of film types
                  to perform at their best potential no matter how many sun rays
                  are there, zenith films are noted the best.
                </p>
                <div className="flex pt-4">
                  <div>
                    <h2 className="text-2xl text-white bold-font">75%</h2>
                    <p className="text-white">ROI Increase</p>
                  </div>
                  <div className="pl-8">
                    <h2 className="text-2xl text-white bold-font">85%</h2>
                    <p className="text-white">Conversion Rate</p>
                  </div>
                  <div className="pl-8">
                    <h2 className="text-2xl text-white bold-font">25%</h2>
                    <p className="text-white">Cost Per Lead</p>
                  </div>
                </div>
                <div className="mt-7">
                  <button className="bg-white uppercase lg:w-60 md:w-72 sm:w-60 w-60 font-semibold  flex justify-center items-center py-4  text-center">
                    Case Study <img className="ml-4" alt="" src={rightIcon} />
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section
              className="bookMettingBgImage bg-cover bg-no-repeat bg-center"
              style={{ backgroundColor: "#16A085" }}
            >
              <div className="md:w-8/12 w-full">
                <p className="text-white">
                  Zenith is in the business of inspiring all types of film types
                  to perform at their best potential no matter how many sun rays
                  are there, zenith films are noted the best.
                </p>
                <div className="flex pt-4">
                  <div>
                    <h2 className="text-2xl text-white bold-font">75%</h2>
                    <p className="text-white">ROI Increase</p>
                  </div>
                  <div className="pl-8">
                    <h2 className="text-2xl text-white bold-font">85%</h2>
                    <p className="text-white">Conversion Rate</p>
                  </div>
                  <div className="pl-8">
                    <h2 className="text-2xl text-white bold-font">25%</h2>
                    <p className="text-white">Cost Per Lead</p>
                  </div>
                </div>
                <div className="mt-7">
                  <button className=" bg-white uppercase lg:w-60 md:w-72 sm:w-60 w-60 font-semibold  flex justify-center items-center py-4  text-center">
                    Case Study <img className="ml-4" alt="" src={rightIcon} />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </section>
    </section>
    </React.Fragment>
  );
};
