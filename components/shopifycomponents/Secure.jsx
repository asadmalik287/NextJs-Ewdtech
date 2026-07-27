
import React from 'react';
import dynamic from 'next/dynamic';
const PopupWidget = dynamic(
  () => import('react-calendly').then(mod => mod.PopupWidget),
  { ssr: false }
);
export const Secure = () => {
  return (
    <React.Fragment>
      <section className=" maindPadding bg-image-shopify py-12">
        <div className="flex flex-wrap">
          <div className="lg:w-6/12 h-full">
            <div className="lg:p-8 p-4 sm:p-4 bg-white h-full ">
              <div className="text-3xl font-black bold-font pt-4">
                Why Shopify for your E-Commerce Site?
              </div>
              <div className=" pt-4  m-auto w-full sm:w-full">
                We believe in simplicity and a swift mode of working. Our developed Shopify offers an easy way to quickly launch an online store without the fuss over servers and development costs. With a broad stance and reduced financials incurred with self-hosted platforms, we assure you of clean and user-friendly Shopify sites. Let us develop a Shopify e-commerce site with intuitive outlook for your brand to reposition it.
              </div>
              <button className=" bg-16A085 text-white uppercase w-full font-semibold mt-32  px-7 py-2 text-center">
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
          <div className=" lg:w-6/12 pl-8 four__boxes four__boxes__mainCol">
            <div className="flex flex-wrap  h-full">
              <div className="lg:w-6/12  four__boxes ">
                <div className="bg-white p-8 h-full flex items-center justify-center text-center ">
                  <p>
                    Shopify is the best E-Commerce platform on the market today
                  </p>
                </div>
              </div>
              <div className="lg:w-6/12  four__boxes  lg:pl-5">
                <div className="bg-white p-8 h-full flex items-center justify-center text-center">
                  Shopify is designed to help people build their own Online Store
                </div>
              </div>
              <div className="lg:w-6/12  four__boxes  mt-4">
                <div className="bg-white p-8 h-full flex items-center justify-center text-center">
                  Shopify hast 100 of Features and 1000 of Software Plugins to choose from
                </div>
              </div>
              <div className="lg:w-6/12  four__boxes  lg:pl-5 mt-4">
                <div className="bg-white p-8 h-full flex items-center justify-center text-center">
                  Shopify has built in connections to sell on almost all Social Channels
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
