import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const caseStudy = "/assets/images/client-images/Client1-100.webp";
const caseStudy1 = "/assets/images/client-images/Client3-100.webp";
const caseStudy2 = "/assets/images/client-images/Client3_1-100.webp";
const caseStudy3 = "/assets/images/client-images/Client4-100.webp";
const rightIcon = "/assets/images/right-black.svg";
const leftIcon = "/assets/images/left.svg";
export const ReviewsImagesHome = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img alt="" src={rightIcon} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img alt="" src={leftIcon} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: false,
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="homeSingleImageCarousel">
      <Slider {...settings} loop={true} autoplay={false}>
        <div>
          <img alt="..." src={caseStudy} className="w-full" />
        </div>
        <div>
          <img alt="..." src={caseStudy1} className="w-full" />
        </div>
        <div>
          <img alt="..." src={caseStudy2} className="w-full" />
        </div>
        <div>
          <img alt="..." src={caseStudy3} className="w-full" />
        </div>
      </Slider>
    </div>
  );
};
