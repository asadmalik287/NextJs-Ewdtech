
import React from 'react';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
const PopupWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupWidget),
  { ssr: false }
);
export const Jointeam = () => {
  return (
    <React.Fragment>
      <section className="joinTogether mainMarginTop ">
        <section className="maindPadding">
          <div className="bg-white md:w-4/12 ml-auto book-meeting-home lg:px-8 px-4 lg:py-12 py-7  ">
            <h2 className=" book-meeting-title bold-font lg:text-4xl sm:text-2xl text-2xl md:text-3xl  font-black">
              Let’s Get Together:
              Join The Team
            </h2>
            <p className="leading-6 pt-6 ">

              Are you looking for a new opportunity, creative marketers who are ready to work hard and collaborate even harder to make amazing things happen for their clients?

              {' '}
            </p>
            <div className="pt-6">
              <div className="text-xl bold-font  font-black  font-semibold">
                Then we are probably looking for you! Let us help you with ecommerce, website development, marketing, optimization and all technical prospects.
              </div>
              <div className="flex pt-5">
                <button
                  type="button"
                  className=" bg-16A085 uppercase text-white font-semibold w-full  px-7 py-2 text-center"
                >
                  <PopupWidget
                    url="https://calendly.com/faisaal-279/30min"
                    rootElement={typeof window !== 'undefined' ? document.body : undefined}
                    text="Let’s Talk"
                    textColor="#ffffff"
                    color="#16A085"
                  />
                </button>
                {/* <Link href='/careers' className='block w-full'>

                  <button className=" bg-16A085 uppercase text-white font-semibold mt-4  px-7 py-4 w-full  text-center">
                    Careers
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};
