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
                More than an agency – So close you’ll think we’re in-house.
              </div>
              <div className=" pt-4  m-auto w-full sm:w-full">
                EWDTEch is a Digital Marketing Agency providing diverse
                solutions to cater to business issues and simplify processes.
                Our adept team filled with creativity and imaginative
                perspectives drives us to ignite the rays of hope in local SEO
                solutions, creative content writing, UX/UI design consulting,
                and Mobile development. We are at your reach on the verge of a
                single click. Get in Touch Now.{" "}
              </div>
              <button
                  type="button"
                  className=" bg-16A085 text-white uppercase w-full font-semibold mt-32  px-7 py-1 text-center"
                >
                  <PopupWidget
                    url="https://calendly.com/faisaal-279/30min?month=2023-03"
                    rootElement={typeof window !== 'undefined' ? document.body : undefined}
                    text="Let’s Talk"
                    textColor="#ffffff"
                    color="#16A085"
                  />
                </button>
            </div>
          </div>
          <div className=" lg:w-6/12 pl-8 fourBlockCol">
            <div className="flex flex-wrap h-full">
              <div className="lg:w-6/12 fourBlockCol1 h-50">
                <div className="bg-white p-8 h-full flex items-center flex-col justify-center text-center ">
                  <h4 className="bold-font text-2xl pb-2">BRANDING</h4>
                  <p>Your brand has a story and we know how to tell it.</p>
                </div>
              </div>
              <div className="lg:w-6/12 fourBlockCol1 h-50 lg:pl-5">
                <div className="bg-white p-8 h-full flex items-center flex-col justify-center text-center">
                  <h4 className="bold-font text-2xl pb-2">VISIBILITY</h4>

                  <p>Your brand will be seen by more of the right people.</p>
                </div>
              </div>
              <div className="lg:w-6/12 fourBlockCol1 h-50 mt-4">
                <div className="bg-white p-8 h-full flex items-center  flex-col justify-center text-center">
                  <h4 className="bold-font text-2xl pb-2">GROWTH</h4>

                  <p>
                    Profitable marketing and advertising strategies to boost
                    your brand.
                  </p>
                </div>
              </div>
              <div className="lg:w-6/12 fourBlockCol1 h-50 lg:pl-5 mt-4">
                <div className="bg-white p-8 h-full flex items-center flex-col justify-center text-center">
                  <h3 className="bold-font text-2xl pb-2">DATA</h3>

                  <p>Real-time sales and advertising numbers tracked 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
