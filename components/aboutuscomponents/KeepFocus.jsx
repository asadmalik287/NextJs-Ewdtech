import React from "react";
const aboutus = "/assets/images/faisal-hanif.webp";
export const KeepFocus = () => {
  return (
    <React.Fragment>
      <section className="mainMarginTop maindPadding bg-f2f2f2 py-12">
        <div className="flex flex-wrap items-center lg:flex-row sm:flex-col-reverse flex-col-reverse">
          <div className="md:w-6/12 sm:w-full w-full lg:pr-5 sm:pr-0 pr-0">
            <h2 className="text-4xl bold-font">
              Our CEO Message
            </h2>
            <p className="leading-6 pt-6">
              EWDTech authorizes you to see the stunning results of a collaborative team effort to create full-scale technical solutions. We provide a wide range of innovative digital marketing, website designing, optimization services and perceptive solutions to aid you in building an empire powered by digitized modules. We assure you of authenticity engrossed in our solutions and economical results revolutionizing your digital universe. Our emphasis is customer satisfaction, which drives our passion for bringing uniqueness to the culture. We employ cutting-edge solutions to uplift your business. From social media marketing to search engine optimization, pay-per-click advertising to email marketing, we have the skills and expertise to help you reach your target audience and achieve your business goals. Our optimization techniques are designed to improve user experience, increase conversions, and boost search engine rankings. Choose us for all your website design, digital media marketing, development, and optimization needs. Contact us today to schedule a consultation and learn more about how we can help you achieve your business goals.         </p>
          </div>
          <div className="md:w-6/12 sm:w-full w-full lg:pl-5 pl-0 sm:pl-0 lg:mb-0 mb-6 sm:mb-6  text-center mtaboutusCol2Sec1">
            <img src={aboutus} className="m-auto" alt="..." />
          </div>
        </div>

      </section>
    </React.Fragment>
  );
};
