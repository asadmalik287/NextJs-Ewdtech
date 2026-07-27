import React from "react";
const influencer = "/assets/images/lead/influencer.svg";
const Facebook = "/assets/images/lead/Facebook Advertising.svg";
const insta = "/assets/images/lead/insta.svg";
const inbound = "/assets/images/lead/inbound.svg";
const Content = "/assets/images/lead/Content Marketing.svg";
const Lead = "/assets/images/lead/linkdin.svg";
const Email = "/assets/images/lead/Email Marketing.svg";
const leadership = "/assets/images/lead/leadership.svg";
const Nurturing = "/assets/images/lead/Lead Nurturing.svg";
export const Services = () => {
  const obj = [
    {
      id: 1,
      image: influencer,
      title: "Infulencer Marketing",
    },
    {
      id: 2,
      image: Facebook,
      title: "Facebook Advertising",
    },
    {
      id: 3,
      image: insta,
      title: "Instagram Advertising",
    },
    {
      id: 4,
      image: inbound,
      title: "Inbound Marketing",
    },
    {
      id: 5,
      image: Content,
      title: "Content Marketing",
    },
    {
      id: 6,
      image: Lead,
      title: "LinkedIn Campaigns",
    },
    {
      id: 7,
      image: Email,
      title: "Email Marketing",
    },
    {
      id: 8,
      image: leadership,
      title: "Thought Leadership Content",
    },
    {
      id: 9,
      image: Nurturing,
      title: "Lead Nurturing",
    },
  ];

  return (
    <section className="bg-F5F7FA mainMarginTop    maindPadding py-12">
      <h2 className="text-4xl bold-font text-center   m-auto text-center w-full text-center">
      What we Do
      </h2>
      <p className="opacity-70 pt-3 mb-10 md:w-8/12 m-auto text-center">
      We inspire, engage and leave the footprints as the most diversified Digital Lead Marketing Agency flourishing at it’s peak and delivering high-quality yields.
      </p>
      <div className="flex flex-wrap justify-center">
        {obj.map((e) => {
          return (
            <div key={e.id} className="lg:w-4/12 md:w-6/12 w_sm_100 sm:w-full p-3 text-center">
              <div className="bg-white  py-6 px-9 h-full text-center">
                <img src={e.image} alt="..." className="m-auto" />
                <div className="text-lg font-black bold-font pt-4">
                  {e.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
