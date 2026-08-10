import React from 'react';
import Navbar from '../Navbar';

// Add `as: Tag = "h1"` to the props destructuring here:
export const Hero = ({ pageName, title, desc, hiddenDesc, classBg, as: Tag = "h1" }) => {
  return (
    <React.Fragment>
      <section className={`contactus-bg ${classBg}`}>
        <Navbar />
        <section className="contactus-banner relative z-10">
          <h3 className="text-2xl uppercase text-white opacity-70 text-center font-thin">
            {pageName}
          </h3>

          <Tag className="text-white lg:w-8/12 m-auto text-center text-5xl mainTitleBanners font-black text-center pt-8">
            {title}
          </Tag>

          <p
            className={` ${hiddenDesc} pt-6 banner-para text-white opacity-70 text-2xl md:w-6/12 m-auto text-center`}
          >
            {desc}
          </p>
        </section>
      </section>
    </React.Fragment>
  );
};