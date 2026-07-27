import React from 'react';
import dynamic from 'next/dynamic';
const PopupWidget = dynamic(
  () => import('react-calendly').then(mod => mod.PopupWidget),
  { ssr: false }
);

export const PerfectStrategy = () => {
  return (
    <React.Fragment>

      <section className="bg-white  perfectStrategy  maindPadding py-12">
        <div className="md:w-4/12 ">
          <div className="bg-F5F7FA book-meeting-home lg:px-8 px-4 lg:py-12 py-7  ">
            <h2 className=" book-meeting-title book-meeting-title-ser bold-font    font-black">
            Get The Perfect SEO Strategy For Your Business!
            </h2>
            <p className="leading-6 pt-6 mb-12 ">
            Having Completed over 300+ Projects, We can Proudly State that our SEO Solutions are a One-Step Solution to grow, lead and rank. Contact us today to learn more about how we can help your business succeed online with the highest conversion rates. 

            </p>
            <div className="pt-12">
              <div className="flex">
              <button
                  type="button"
                  className=" bg-16A085 text-white uppercase w-full font-semibold lg:mt-32 mt-2 sm:mt-2  px-7 py-1 text-center"
                >
                              <PopupWidget
  url="https://calendly.com/faisaal-279/30min"
  rootElement={typeof window !== 'undefined' ? document.body : undefined}
  text="Let’s Talk"
  textColor="#ffffff"
  color="#16A085"
/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
