import React from 'react';
import dynamic from 'next/dynamic';

const PopupWidget = dynamic(
  () => import('react-calendly').then(mod => mod.PopupWidget),
  { ssr: false }
);

const ceoImage = '/assets/images/maqsood-ahmed.webp';
const ceoImage1 = '/assets/images/mobile-sm.webp';

export const BookMeeting = () => {
  return (
    <section className="mainMarginTop maindPadding">
      <div className="flex justify-end book-meeting-flex relative">

        <div className="book-meeting-home-col-1">
          <div className="bg-black book-meeting-home lg:px-8 px-4 lg:py-12 py-7 mt-20">

            <h2 className="text-white book-meeting-title lg:text-4xl sm:text-2xl text-2xl md:text-3xl font-black">
              Bonjour to our Digital Marketing Agency!
            </h2>

            <p className="text-white leading-6 pt-6 pb-6">
              The community knows us for our commitment, authenticity...
            </p>

            <div className="pt-6">
              <PopupWidget
                url="https://calendly.com/faisaal-279/30min"
                rootElement={typeof window !== 'undefined' ? document.body : undefined}
                text="Let’s Talk"
                textColor="#ffffff"
                color="#16A085"
              />
            </div>

          </div>
        </div>

        {/* Desktop */}
        <div className="book-meeting-home-col-2 webHomwMeeting relative mt-0">
          <img src={ceoImage} alt="CEO" className="w-full" />
        </div>

        {/* Mobile */}
        <div className="book-meeting-home-col-2 smHomwMeeting lg:hidden md:hidden relative mt-0">
          <img src={ceoImage1} alt="CEO Mobile" className="w-full" />
        </div>

      </div>
    </section>
  );
};