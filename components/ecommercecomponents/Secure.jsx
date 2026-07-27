import React from "react";
const amazon = "/assets/images/amazon-logo.png";
const ecommercePortal = "/assets/images/ecommerce-secure/ecommerce-portal.svg";
const shopifyDevelopment = "/assets/images/ecommerce-secure/shopify-development.svg";
import dynamic from 'next/dynamic';
const magentoDevelopment = "/assets/images/ecommerce-secure/magento-development.svg";
const PopupWidget = dynamic(
  () => import('react-calendly').then(mod => mod.PopupWidget),
  { ssr: false }
);

export const Secure = ({
  leftTitle,
  leftDesc,
  rightBox1,
  rightBox2,
  rightBox3,
  rightBox4,
}) => {
  return (
    <React.Fragment>
      <section className=" maindPadding bg-031017 py-12">
        <div className="flex flex-wrap ">
          <div className="same_fifty_col">
            <div className="lg:p-8 sm:p-4 p-4 bg-white h-full">
              <div className="text-3xl font-black bold-font pt-4">
                {leftTitle}
              </div>
              <div className=" pt-4  m-auto w-full sm:w-full">{leftDesc}</div>
              <button className=" bg-16A085 text-white uppercase w-full font-semibold mt-20  px-7 py-2 text-center">
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
          <div className=" same_fifty_col pl-8 four__boxes fourBlockCol">
            <div className="flex flex-wrap">
              <div className="lg:w-6/12 four__boxes ">
                <div className="bg-white h-full p-8">
                  <div className="secure-icon flex px-1 items-center justify-center m-auto">
                    <img alt="..." src={amazon} />
                  </div>
                  <div className="text-lg font-black text-center bold-font pt-4">
                    {rightBox1}
                  </div>
                </div>
              </div>
              <div className="lg:w-6/12 four__boxes lg:pl-8 ">
                <div className="bg-white h-full p-8">
                  <div className="secure-icon flex items-center justify-center m-auto">
                    <img alt="..." src={ecommercePortal} />
                  </div>
                  <div className="text-lg font-black text-center bold-font pt-4">
                    {rightBox2}
                  </div>
                </div>
              </div>
              <div className="lg:w-6/12 four__boxes mt-8 ">
                <div className="bg-white p-8 h-full">
                  <div className="secure-icon flex items-center justify-center m-auto">
                    <img alt="..." src={shopifyDevelopment} />
                  </div>
                  <div className="text-lg font-black text-center bold-font pt-4">
                    {rightBox3}
                  </div>
                </div>
              </div>
              <div className="lg:w-6/12 four__boxes lg:pl-8  mt-8 ">
                <div className="bg-white h-full p-8">
                  <div className="secure-icon  flex items-center justify-center m-auto">
                    <img alt="..." src={magentoDevelopment} />
                  </div>
                  <div className="text-lg font-black text-center bold-font pt-4">
                    {rightBox4}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
