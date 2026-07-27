import React from 'react';
const marketResearch
  = '/assets/images/branding-services/brandRsearch.svg';
const brandStrategy
  = '/assets/images/branding-services/brandStrategy.svg';
const identityCreation
  = '/assets/images/branding-services/brandIdentity.svg';
const experienceDesign
  = '/assets/images/branding-services/websiteAudit.svg';
const brandEngagement
  = '/assets/images/branding-services/brandEngagement.svg';
const marketCommunication
  = '/assets/images/branding-services/socialMarketing.svg';

export const Services = () => {
  const obj = [
    {
      id: 1,
      image: marketResearch,
      title: 'Brand & market research',
      desc: 'We make your unknown growth opportunities known by analyzing your challenge and researching company. Our extensive research on your industry enables us to formulate the latest  developments.',
    },
    {
      id: 2,
      image: brandStrategy,
      title: 'Brand strategy & story',
      desc: 'We define how to associate your business with your target audience. We create your brand DNA and add value-addition by conveying its purpose to ensure clarity, focus, and growth.',
    },
    {
      id: 3,
      image: identityCreation,
      title: 'Brand identity creation',
      desc: 'Once we have defined your growth strategies, our creative team will transform the strategy into outstanding brand identity concepts and appealing UX designs with creative content writing.',
    },
    {
      id: 4,
      image: experienceDesign,
      title: 'Experience design',
      desc: 'We create unique customer journeys and touchpoints by forging brand experiences that stand out. Find best UX Designs service from us.',
    },
    {
      id: 5,
      image: brandEngagement,
      title: 'Brand engagement',
      desc: 'We believe in educating, inspiring, and engaging followers on the new brand. We help you turn your customers into fans through creative social media marketing.',
    },
    {
      id: 6,
      image: marketCommunication,
      title: 'Marketing & communication',
      desc: 'We develop a go-to-market communication and marketing strategy to create awareness and grasp potential clients through creative digital marketing solutions.',
    },
  ];

  return (
    <section className="bg-F5F7FA mainMarginTop    maindPadding py-12">
      <h2 className="text-4xl bold-font text-center mb-10  m-auto text-center w-full text-center">
        How we Help
        You Grow Your Brand
      </h2>
      <div className="flex flex-wrap">
        {obj.map (e => {
          return (
            <div key={e.id} className="col__services p-3">
              <div className="bg-white  py-6 px-9 h-full text-">
                <img src={e.image} alt="..." className="" />
                <div className="text-lg font-black bold-font pt-4">
                  {e.title}
                </div>
                <div className="md:w-10/12 pt-4  w-full sm:w-full">
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
