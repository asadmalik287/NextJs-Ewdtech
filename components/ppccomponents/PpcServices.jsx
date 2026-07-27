import React from "react";
const moodboards = "/assets/images/webdesign-services/moodBoard.svg";
const siteArchi = "/assets/images/ppc-management/displayAd.svg";
const wireframes = "/assets/images/ppc-management/reMarketing.svg";
const visual = "/assets/images/ppc-management/youtubeAds.svg";

export const PpcServices = () => {
  const obj = [
    {
      id: 1,
      image: moodboards,
      title: "SnapChat Ads",
      desc: "We create brand awareness and drive more sales through SnapChat Ad Services, an effective and cost-efficient way for businesses to increase their online visibility.",
    },
    {
      id: 2,
      image: siteArchi,
      title: "Display Ads",
      desc: "Build brand awareness and get more sales with visual Display ads on websites, social media platforms, and other digital properties.",
    },
    {
      id: 3,
      image: wireframes,
      title: "TikTok Ads",
      desc: "We rewind memories by reminding customers about your products/services by building long-term customer relationships through creative TikTok Ads targeting the right customers.",
    },
    {
      id: 4,
      image: visual,
      title: "YouTube Ads",
      desc: "Let us display the best of your brand through YouTube Ads, with effective PPC Strategy including specific demographics, interests, and behaviors. ",
    },
  ];

  return (
    <section className="bg-F5F7FA mainMarginTop    maindPadding py-12">
      <h2 className="text-4xl bold-font text-center  m-auto text-center w-full text-center">
        Our PPC Services
      </h2>
      <p className="opacity-70 pt-3 md:w-5/12 m-auto  mb-10 text-center">
        We increase sales, enhances engagement and display the perfect outlooks
        being artistic. We are known to convert traffic into potential customers
        by facilitating with robust PPC Strategy.
      </p>
      <div className="flex flex-wrap">
        {obj.map((e) => {
          return (
            <div key={e.id} className="lg:w-6/12 p-3 text-center">
              <div className="bg-white  py-6 px-9 h-full text-center">
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
  );
};
