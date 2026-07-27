import React from "react";
const remarketing = "/assets/images/ppsc-services/reMarketing.svg";
const negativekeywords = "/assets/images/ppsc-services/socialAnalysis.svg";
const googleKeywords = "/assets/images/ppsc-services/googleSupport.svg";
const detectingfalseClicks = "/assets/images/ppsc-services/falseClicks.svg";
const bestBudgetutilization = "/assets/images/ppsc-services/budgetUtilization.svg";
export const Optimizationproced = () => {
  const obj = [
    {
      id: 1,
      image: remarketing,
      title: "Re-marketing",
      desc: " We re-market display ads campaigns and tailor your ads to visitors when they browse the web and use apps through effective PPC strategy.",
    },
    {
      id: 2,
      image: negativekeywords,
      title: "Negative Keywords",
      desc: "We use negative keywords to prevent the display of ads to irrelevant customers. It helps us customize our ad as per the focus of the audience.",
    },
    {
      id: 3,
      image: googleKeywords,
      title: "Google Support",
      desc: "We use google support for effective boosting that allows businesses to bid on keywords for a chance to show ads in Google search results.",
    },
    {
      id: 4,
      image: detectingfalseClicks,
      title: "Detecting False Clicks",
      desc: "Our PPC management strategy helps us detect false clicks and minimize the risk of fraudulence.",
    },
    {
      id: 5,
      image: bestBudgetutilization,
      title: "Best Budget Utilization",
      desc: "We assure economical facilitation with minimal budget utilization and maximum customer acquiring through PPC Management.",
    },
  ];

  return (
    <React.Fragment>
      <section className=" maindPadding bg-031017   mainMarginTop">
        <section className="lgPaddingLeftRight py-12">
          <h2 className="text-white text-4xl bold-font text-center mt-8">
            Our Optimization Procedures
          </h2>
          <p className="text-white lg:w-2/4 w-full text-lg m-auto text-center pt-3">
            We carry out multiple tasks on a daily, weekly and monthly basis to
            make sure your campaign is on the right track.
          </p>
          <div className="flex flex-wrap justify-center mt-10">
            {obj.map((e) => {
              return (
                <div key={e.id} className="col__services p-3 text-center">
                  <div className="bg-white  py-6 px-9  h-full text-center">
                    <img src={e.image} alt="..." className="m-auto" />
                    <div className="text-lg font-black bold-font pt-4">
                      {e.title}
                    </div>
                    <div className="md:w-10/12 pt-4 m-auto w-full sm:w-full">
                      {e.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};
