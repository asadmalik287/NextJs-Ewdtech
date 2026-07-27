import React from 'react';
const ecommerce = '/assets/images/shopify-services/ecomSetup.svg';
const themeDevelopment
  = '/assets/images/shopify-services/themeDevelopment.svg';
const customshopDevelopment
  = '/assets/images/shopify-services/customshopDevelopment.svg';
const shopforAppDevelopment
  = '/assets/images/shopify-services/shopforAppDevelopment.svg';
const Seo = '/assets/images/shopify-services/Seo.svg';
const mantinance = '/assets/images/shopify-services/mantinance.svg';

export const Services = () => {
  const obj = [
    {
      id: 1,
      image: ecommerce,
      title: 'E-Commerce Development',
      desc: 'We stimulate with a comprehensive Shopify installation, integration, and configuration to help your business meet e-commerce necessities quickly and skillfully. Our talented team probes into creating high-performance, feature-rich shopping carts that propel conversions and revenue for the business.',
    },
    {
      id: 2,
      image: themeDevelopment,
      title: 'Theme Development',
      desc: 'Our technical team mainly operates on template files built using liquefied template language created by Shopify and is responsible for managing and loading dynamic content. Our team assures quality content and creative theme development to yield a fruitful impact. ',
    },
    {
      id: 3,
      image: customshopDevelopment,
      title: 'Custom Shop Development',
      desc: "Let's share ideas. We shall help you execute them distinctively with satisfactory Shopify development services. Our expert developers can meet your business needs. We assure you of economic impact with an inclusive approach to run smoothly and sustainably. Get your quote now to dive into the metaverse of your Shopify Store. ",
    },
    {
      id: 4,
      image: shopforAppDevelopment,
      title: 'Shop For App Development',
      desc: 'Our Shopify Development team takes the guesswork out of e-commerce by harnessing data-driven insights to cut to the chase. We cater to the needs of the customers, design the e-commerce store tailored to their needs and run it smoothly with an economical perspective. ',
    },
    {
      id: 5,
      image: Seo,
      title: 'Shopify SEO',
      desc: 'We have a technical team providing swift search engine optimization solutions for Shopify SEO and Shopify plus SEO. Our SEO services constitute transparency, dedication, and thorough acuity as the core fundamentals of our Shopify SEO agency. Grab your chance to acquire swift actions.',
    },
    {
      id: 6,
      image: mantinance,
      title: 'Maintenance Services',
      desc: "No matter if it's the tiniest bug or a flash error influencing your Shopify e-commerce store's performance, we assure you to assist. Our Shopify technical expert developers can supply you with the required technical assistance. Get in touch now to acquire swift intervention.",
    },
  ];

  return (
    <section className="bg-F5F7FA mainMarginTop    maindPadding py-12">
      <h2 className="text-4xl bold-font text-center mb-10  m-auto text-center w-full text-center">
        Shopify Ecommerce Development Services
      </h2>
      <div className="flex flex-wrap">
        {obj.map(e => {
          return (
            <div key={e.id} className="col__services p-3">
              <div className="bg-white  py-6 lg:pl-9 lg:px-0 sm:px-4 px-4 h-full text-">
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
