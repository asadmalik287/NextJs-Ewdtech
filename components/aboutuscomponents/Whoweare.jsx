
import React from 'react';
import dynamic from 'next/dynamic';

const aboutUs = "/assets/images/team-about-us.webp";

const PopupWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupWidget),
  { ssr: false }
);

export const Whoweare = () => {
  return (
    <React.Fragment>
      <section className="mainMarginTop maindPadding aboutusSection2">
        <div className="flex flex-wrap lg:flex-row sm:flex-col-reverse flex-col-reverse">

          <div className="md:w-6/12 sm:w-full w-full lg:pr-5 sm:pr-0 pr-0">
            <h2 className="text-4xl bold-font">Who We Are</h2>

            <p className="leading-6 opacity-70 pt-6">
              We are a Digital Marketing Agency, igniting the spark to power
              technology and drive a future tailored to business needs. We tap
              into the depth of your business and unleash the potential to shoot
              for the moon.
            </p>

            <p className="leading-6 pt-4 opacity-70">
              At EWDTech, our skilled squad of developers, UX/UI designers,
              creative writers, and digital marketing experts outperforms your
              growth. We assure you of incredible results with the full bloom of
              engaging potential customers to transform digital solutions. From
              Digital Media Marketing to sprinkling creative UX/UI Designs, we
              incorporate digital solutions promptly. Let us build bridges
              between you and your customers to rise at full bloom.
            </p>

            <button className="bg-16A085 uppercase text-white font-semibold mt-4 px-7 py-2 md:w-8/12 text-center">
                             <PopupWidget
  url="https://calendly.com/faisaal-279/30min"
  rootElement={typeof window !== 'undefined' ? document.body : undefined}
  text="Let’s Talk"
  textColor="#ffffff"
  color="#16A085"
/>
            </button>
          </div>

          <div className="md:w-6/12 sm:w-full w-full lg:pl-5 pl-0 sm:pl-0 lg:mb-0 mb-6 sm:mb-6 text-center mtaboutusCol2Sec1">
            <div className="about-bg-color relative">
              <img
                src={aboutUs}
                alt="About Us"
                className="m-auto absolute"
              />
            </div>
          </div>

        </div>
      </section>
    </React.Fragment>
  );
};