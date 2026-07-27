import React from "react";
import dynamic from 'next/dynamic';

const PopupWidget = dynamic(
  () => import('react-calendly').then(mod => mod.PopupWidget),
  { ssr: false }
);
export const Secure = () => {
  return (
    <React.Fragment>
      <section className=" maindPadding bg-image-branding py-12">
        <div className="flex flex-wrap">
          <div className="lg:w-6/12 ">
            <div className="p-8 bg-white h-full">
              <div className="text-3xl font-black bold-font pt-4">
                Your Social Strategy Is Only As Good As Your Ad Creative
              </div>
              <div className=" pt-4  m-auto w-full sm:w-full">
                In the era where trends shift with the seconds momentum,
                grabbing attention on your customers continuous social feeds is
                challenging. The right combination of visual design, social
                media handling, creative writing, branding through UX Designs,
                and calls to action is crucial. Check out our Ad Creative Bank
                to get inspired by the best ads out there.{" "}
              </div>
              <button
                type="button"
                className=" bg-16A085 text-white uppercase w-full font-semibold mt-32  px-7 py-1 text-center"
              >
                <PopupWidget
                  url="https://calendly.com/faisaal-279/30min"
                  rootElement={typeof window !== 'undefined' ? document.body : undefined}
                  text="Let’s Talk"
                  textColor="#ffffff"
                  color="#16A085"
                />
              </button>
              {/* <button className=" bg-16A085 text-white uppercase w-full font-semibold mt-32  px-7 py-4 text-center">
                Take me to the ads
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
