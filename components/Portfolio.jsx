import React from 'react';
const galleryImage1 = '/assets/images/Component-1.webp';
import Link from 'next/link';
export const Portfolio = () => {
  return (
    <React.Fragment>
      <section className="portfolio-bg bg-center bg-no-repeat  bg-cover  pb-12">
        <div className="text-4xl portfolioImageInner sticky inset-x-0 top-0 left-0   bold-font  text-center m-auto text-center w-full">
          Portfolio
        </div>
        <div className="relative">
          <img src={galleryImage1} alt="..." className="w-full" />
          {/* <Lightroom images={images} settings={settings} /> */}
        </div>
        <div className="px-3 text-center mt-12">
          <Link href="/portfolio/">
            <button className=" bg-16A085 bold-font text-white  md:w-auto sm:w-auto w-auto uppercase  font-semibold  px-7 py-4 text-center">
              Our Work
            </button>
          </Link>
        </div>
      </section>

    </React.Fragment>
  );
};
