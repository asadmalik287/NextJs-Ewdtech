import React from 'react';
const drive = '/assets/images/webdesign-services/drive.svg';
const increase
  = '/assets/images/webdesign-services/increase-conversion.svg';
const buildbetter
  = '/assets/images/webdesign-services/build-better-customers.svg';
const makeecommerce
  = '/assets/images/webdesign-services/ecommerce-efficient.svg';

export const StartDigitalEngine = () => {
  const obj = [
    {
      id: 1,
      image: drive,
      title: 'Drive Organic Traffic',
      desc: 'We work with our SEO experts to make sure your website is ranking for your most important keywords– and taking advantage of search engine opportunities.',
    },
    {
      id: 2,
      image: increase,
      title: 'Increase Conversions & Sales',
      desc: 'Your site is only as strong as its impact on your business, and we make sure it is your best salesperson.',
    },
    {
      id: 3,
      image: buildbetter,
      title: 'Build Better Resources for Customers',
      desc: 'We create content that reinforces your brand identity while getting your customers the information they need about your company.',
    },
    {
      id: 4,
      image: makeecommerce,
      title: 'Make Ecommerce Efficient',
      desc: 'We reduce overhead by moving transactions online while providing a clean shopping experience– with an assist with our Shopify partnership.',
    },
  ];

  return (
    <section className="bg-F5F7FA mainMarginTop    maindPadding py-12">
      <h2 className="text-4xl bold-font text-center   m-auto text-center w-full text-center">
      Start Your Digital Engine
      </h2>
      <p className="opacity-70 pt-3 md:w-5/12 m-auto mb-10 text-center">
      The foundation of your digital marketing strategy is your website. That’s why it’s absolutely essential for your site to be an engine that is built for your business goals. We help make sure your site will
      </p>
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
