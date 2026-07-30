import React from 'react';
import Link from 'next/link';
export const Hero = () => {
  return (
    <React.Fragment>
      <div className="flex items-center relative z-10 justify-center flex-col h-full w-full">
        <h1
          className="hero-title-home  bold-font max-w-screen-md text-center text-white font-black"
        >
          We digitize business with innovative solutions

        </h1>
        <div
          className="flex mt-9"
        >
          <Link href="/portfolio/" className='home-hero-btn'>

            <button className=" bg-white bold-font uppercase lg:w-56 md:w-auto sm:w-auto w-auto font-semibold  px-7 py-4 text-center mr-3">
              Our Work
            </button>
          </Link>
          <Link href="/services" className='home-hero-btn'>
            <button className=" bg-16A085 bold-font text-white lg:w-56 md:w-auto sm:w-auto w-auto uppercase  font-semibold  px-7 py-4 text-center">
              Our Services
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Hero;
