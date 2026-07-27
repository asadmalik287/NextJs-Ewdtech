import React from 'react';
const logoreview = '/assets/images/reviews-logo.svg';
const stars = '/assets/images/star.svg';
const profile = '/assets/images/profile.webp';
const testimonial1 = '/assets/images/testimonial-03-free-img.webp';
const testimonial2 = '/assets/images/testimonial-14-free-img.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReviewsImagesHome } from './ReviewsImagesHome';
export const Reviews = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    dots: true,
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
      <section className="mainMarginTop maindPadding bg-16A085 py-12">
        <h2 className="text-4xl bold-font text-white text-center m-auto text-center w-full">
          What Other Says About Us
        </h2>
        <div className="flex flex-wrap items-center pt-12">
          {/* <img alt='...' src={caseStudy} className="w-full" alt="" /> */}
          <div className="md:w-6/12 sm:w-full w-full lg:pr-6 sm:pr-0 pr-0">
            <ReviewsImagesHome />
          </div>
          <div className="md:w-6/12 sm:w-full w-full lg:pl-6 sm:pl-0 pl-0 home-client-reviews lg:mt-0 sm:mt-10 mt-10">
            <Slider {...settings} loop={true} autoplay={true}>
              <div className="">
                <div className="flex  items-center">
                  <div>
                    <img alt='...' src={logoreview} />
                  </div>
                  <div className="pl-5">
                    <div className="text-white font-semibold">
                      REVIEWED ON CLUTCH
                    </div>
                    <div className="flex pt-1">
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                    </div>
                  </div>

                </div>
                <p className="text-white md:w-11/12 w-full sm:w-full pt-8 fs-14">
                  Psychologically, almost all of them were slaves - slaves of faith, slaves of their own kind, slaves of passions, slaves of greed. And if, by the will of fate, one of them was born or became a master, he did not know what to do with his freedom. He again hurried to become a slave - a slave of wealth, unnatural excesses, a slave of dissolute friends, a slave of his slaves.
                </p>
                <div className="flex pt-6 items-center">
                  <div>
                    <img alt='...' src={testimonial1} className='reviews-profile' />
                  </div>
                  <div className="pl-5">
                    <div className="text-white">Jane Oliver</div>
                    <div className="text-white">Design Lead at Dynamic Web</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex  items-center">
                  <div>
                    <img alt='...' src={logoreview} />
                  </div>
                  <div className="pl-5">
                    <div className="text-white font-semibold">
                      REVIEWED ON CLUTCH
                    </div>
                    <div className="flex pt-1">
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                    </div>
                  </div>

                </div>
                <p className="text-white md:w-11/12 w-full sm:w-full pt-8 fs-14">
                  "I have previously used a number of other digital agencies, but this is the first one that I have seen actually solve my problem. They managed to help me with my customer service issues, and I was blown away by the results."
                </p>
                <div className="flex pt-6 items-center">
                  <div>
                    <img alt='...' src={testimonial2} className='reviews-profile' />
                  </div>
                  <div className="pl-5">
                    <div className="text-white">Mark Taylor</div>
                    <div className="text-white">Design Lead at ACME</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex  items-center">
                  <div>
                    <img alt='...' src={logoreview} />
                  </div>
                  <div className="pl-5">
                    <div className="text-white font-semibold">
                      REVIEWED ON CLUTCH
                    </div>
                    <div className="flex pt-1">
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                      <img alt='...' src={stars} className="pr-1" />
                    </div>
                  </div>

                </div>
                <p className="text-white md:w-11/12 w-full sm:w-full pt-8 fs-14">

                  "I have been working with EWD for over a year now, and I find that they are one of the most creative IT companies out there. They have been able to help us tackle some of the problems we had with our website and social media marketing, and they are always coming up with new innovative solutions."

                </p>
                <div className="flex pt-6 items-center">
                  <div>
                    <img alt='...' src={profile} className='reviews-profile' />
                  </div>
                  <div className="pl-5">
                    <div className="text-white">Eugene Hong</div>
                    <div className="text-white">Designation of the person</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

    </React.Fragment>
  );
};
