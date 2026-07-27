import React from "react";
const ceoImage = "/assets/images/maqsood-ahmed-2.webp";
const linkdin = "/assets/images/linkedinblue.svg";
const fb = "/assets/images/fbblue.svg";
import Link from "next/link";

export const CeoMessage = () => {
  return (
    <React.Fragment>
      <section className="mainMarginTop maindPadding">
        <div className="flex justify-end book-meeting-flex relative">
          <div className=" book-meeting-home-col-1 ">
            <div className="bg-white book-meeting-home lg:px-8 lg:px-4 sm:px-0 px-0 lg:py-12 py-7 mt-20 ">
              <h2 className=" book-meeting-title bold-font lg:text-4xl sm:text-2xl text-2xl md:text-3xl  font-black">
              Our Director Message
              </h2>
              <p className="leading-6 pt-6 ">
              Maqsood Ahmed founded EWDTech in 2016, after working for half of the decade as Developer  in overseas companies. EWDTech is an award-winning, full-service digital marketing & Design agency.

              </p>
              <p className="leading-6 pt-6 ">
              We offer a broad range of online marketing services including web design & development, ecommerce, social media marketing, SEO, shopify development, SEM services, ppc/google ads, YouTube and email marketing.

              </p>
              <div className="pt-6">
                <div className="text-16A085 font-semibold">Follow me</div>
                <div className="flex pt-5">
                  <Link
                    href="https://www.linkedin.com/in/maqsoodfcc/"
                    target="_blank"
                    className="flex"
                  >
                    <div className="ceo-icons-bg flex items-center justify-center">
                      <img alt="..." src={linkdin} />
                    </div>
                    <div className="pl-3">Linkdin</div>
                  </Link>
                  <Link
                    href=" https://www.facebook.com/maqsoodfcc"
                    className="flex ml-5 items-center"
                    target="_blank"
                  >
                    <div className="ceo-icons-bg flex items-center justify-center">
                      <img alt="..." src={fb} />
                    </div>
                    <div className="pl-3">Facebook</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="book-meeting-home-col-2 relative mt-0 ">
            <img src={ceoImage} alt="..." className="w-full" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
