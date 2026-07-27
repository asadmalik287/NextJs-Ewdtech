import React from 'react';
const ecommerce = '../../assets/images/ecommerce-logos/ecommerce.svg';
const brand = '../../assets/images/ecommerce-logos/brand.svg';
const design = '../../assets/images/ecommerce-logos/design.svg';
const growth = '../../assets/images/ecommerce-logos/growth.svg';
const digital = '../../assets/images/ecommerce-logos/digital.svg';
const communication = '../../assets/images/ecommerce-logos/communication.svg';
export const SolveNeeds = () => {
  const obj = [
    {
      id: 1,
      image: ecommerce,
      title: 'E-commerce Site Setup',
      desc: 'With its layout, revenue outlay, mobile optimization, Local SEO, and Technical SEO set-up, we are a full-fledged, ready-to-sell Shopify e-commerce site One-Shop Solutions Provider.',
    },
    {
      id: 2,
      image: brand,
      title: 'Brand Consultancy',
      desc: 'We concoct, diversify and execute a roadway to provide the most flexible shopping experience through consistent brand consultancy regarding optimization. Get in touch for free Brand consultancy to stand dynamic in the crowd. ',
    },
    {
      id: 3,
      image: design,
      title: 'Design & Development',
      desc: 'You dream, we execute! We curate top-class UX design solutions with a smooth fabrication of process management from the concept stage to delivery. We shall design your imagination efficiently. ',
    },
    {
      id: 4,
      image: growth,
      title: 'Growth Strategy',
      desc: 'Whether you are a fresh venture or under development, we are here to navigate your business to new prospects with intricate analysis, optimized solutions and effective social media marketing.',
    },
    {
      id: 5,
      image: digital,
      title: 'Digital Marketing',
      desc: "We reposition your brand precisely and effectively. Our worth lies in global digital media marketing to expand your business beyond horizons. Let's open up new ventures.",
    },
    {
      id: 6,
      image: communication,
      title: 'Communication Strategy',
      desc: 'We build your brand with integrity, create a new brand identity, remodel your vision and enrich revenue prospects with strategic executions. Get in touch to implement art of growth.',
    },
  ];
  return (
    <section className="bg-F5F7FA mainMarginTop    maindPadding py-12">
       <h2 className=" book-meeting-title text-center mb-5 book-meeting-title-ser bold-font    font-black">
       Let us solve your needs
            </h2>
      <div className="flex flex-wrap">
        {obj.map (e => {
          return (
            <div key={e.id} className="col__services p-3">
              <div className="bg-white  py-6 px-3 h-full text-center">
                <img src={e.image} alt="..." className="m-auto" />
                <div className="text-lg font-black bold-font pt-4">
                  {e.title}
                </div>
                <div className="md:w-10/12 pt-4  m-auto w-full sm:w-full">
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
