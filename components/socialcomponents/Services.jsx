import React from 'react';
const  partners = '../../assets/images/social-services/partner.svg';
const  dataWork = '../../assets/images/social-services/dataWork.svg';
const  performanceCreative
  = '../../assets/images/social-services/performance.svg';
const  storyTellar = '../../assets/images/social-services/storyTellar.svg';
const  facebookMarketing
  = '../../assets/images/social-services/facebookMarketing.svg';
const  brandValues = '../../assets/images/social-services/brandValues.svg';

export const Services = () => {
  const obj = [
    {
      id: 1,
      image: partners,
      title: 'Partners, Not Just Media Buyers',
      desc: 'We’re here to build a full strategy on social, not just find the perfect media mix: our team is tasked with embedding on your team so we can better understand your business objectives, your brand, and your customers.',
    },
    {
      id: 2,
      image: dataWork,
      title: 'Putting Data To Work',
      desc: 'We’ve built a dedicated, integrated tech stack that brings clean data, efficiency, automation, and human intelligence and data science expertise together to help our clients move quickly, make better decisions, and drive growth.',
    },
    {
      id: 3,
      image: performanceCreative,
      title: 'Performance Creative',
      desc: 'As the ultimate determinant of success (or failure) in social, we relentlessly test creative and use data to determine what your audience wants, then deploy those learnings across channels.',
    },
    {
      id: 4,
      image: storyTellar,
      title: 'Strategic Storytellers',
      desc: 'Great storytelling is essential to full-funnel social media marketing. We make sure we’re boosting performance at the bottom funnel by sharing your brand’s story at the top to drive awareness and build a dedicated audience.',
    },
    {
      id: 5,
      image: facebookMarketing,
      title: 'Facebook Marketing Partner',
      desc: 'Exclusive events? Check. New betas? Check. Awesome support? Check. We leverage our FMP status to ensure you receive the latest and greatest, before anyone else.',
    },
    {
      id: 6,
      image: brandValues,
      title: 'Showcasing Your Brand Values',
      desc: 'We combine advanced data analysis with a deep understanding of what matters most to your brand and your customers to make sure we’re effectively communicating what’s important.',
    },
  ];

  return (
    <section className="bg-F5F7FA mainMarginTop    maindPadding py-12">
      <h2 className="text-4xl bold-font text-center mb-10  m-auto text-center w-full text-center">
      Authentic Social Campaigns That Drive Revenue
      </h2>
      <div className="flex flex-wrap">
        {obj.map (e => {
          return (
            <div key={e.id} className="social-services p-3">
              <div className="bg-white  py-6 px-9 h-full text-center">
                <img src={e.image} alt="..." className="m-auto" />
                <div className="text-2xl font-black bold-font pt-4">
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
