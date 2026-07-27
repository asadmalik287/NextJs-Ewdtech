import React from 'react';
const webDesign = '/assets/images/main-services/web-design.svg';
const lead = '/assets/images/main-services/lead.svg';
const shopify = '/assets/images/main-services/shopify.svg';
const seo = '/assets/images/main-services/seo.svg';
const ecommerce = '/assets/images/main-services/ecom.svg';
const dropshipping = '/assets/images/main-services/drop.svg';
const socialmedia = '/assets/images/main-services/marketing.svg';
const ppc = '/assets/images/main-services/ppc.svg';
const creativeBranding = '/assets/images/main-services/creative.svg';
import Link from 'next/link';
export const OurServices = () => {
  const arr = [
    {
      id: 1,
      image: webDesign,
      title: 'Web Design & Development',
      desc: "Our team of experienced web designers creates custom websites tailored to each customer's individual needs with user-friendly UX Design.",
    },
    {
      id: 2,
      image: lead,
      title: 'Lead Generation',
      desc: 'Our team of experts will work with you to develop effective strategies to acquire high-quality leads and increase your sales.',
    },
    {
      id: 3,
      image: shopify,
      title: 'Shopify Expert',
      desc: 'Take your Shopify store to the next level with our expert services. Our team of experienced Shopify experts provides expert guidance, customization, and support to ensure a successful e-commerce experience.',
    },
    {
      id: 4,
      image: seo,
      title: 'Search Engine Optimization',
      desc: 'Our experts will help you rank your website on the top with local SEO, on page SEo and off Page SEo tactic to build a phenomenal business.',
    },
    {
      id: 5,
      image: ecommerce,
      title: 'E-Commerce',
      desc: 'Our experts will help you develop SEO optimized ecommerce site with user-friendly UX design and in managing the site for effective business yield.',
    },
    {
      id: 6,
      image: dropshipping,
      title: 'Dropshipping',
      desc: 'With our Dropshipping service, we can help you manage the inventory, enabling you to focus on growing your business and increasing your profits.',
    },
    {
      id: 7,
      image: socialmedia,
      title: 'Social Media Marketing',
      desc: 'We shall help you manage your Social Media with optimization, social media marketing and effective Graphics to rank you on top.',
    },
    {
      id: 8,
      image: ppc,
      title: 'PPC Management',
      desc: 'With our PPC strategy, you can find economical Pay-Per-Click Management  on platforms such as Google Ads and Bing Ads with keyword research, ad copy creation, bid management, and performance analysis.',
    },
    {
      id: 9,
      image: creativeBranding,
      title: 'Creative & Branding',
      desc: 'Our branding services help you create a unique identity that resonates with your target audience and stands out from your competition through optimization.',
    },
  ];
  return (
    <React.Fragment>
      <section className="bg-F5F7FA mainMarginTop  maindPadding py-12">
        <div className="text-4xl bold-font text-center mt-8">Our Services</div>
        <div className="lg:w-2/4 w-full text-lg m-auto text-center pt-3">
        Let us portray our best Digital Media Marketing and Development aspects to help you grow.
        </div>
        <div className="flex flex-wrap pt-12">
          {arr.map (e => {
            return (
              <div key={e.id} className="col__services p-3 ">
                <Link href="/seo-services">
                  <div className="bg-white py-5 h-full">
                    <div className="text-center">
                      <img src={e.image} alt="..." className="m-auto" />
                      <div className="text-lg font-black bold-font pt-4">
                        {e.title}
                      </div>
                      <div className="md:w-10/12 pt-4  m-auto w-full sm:w-full">
                        {e.desc}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

        </div>
        <div className="flex mt-9 justify-center">
            <Link href="/portfolio">
              <button className=" bg-white bold-font uppercase lg:w-60 md:w-auto sm:w-auto w-auto font-semibold  px-7 py-4 text-center mr-3">
                Our Work
              </button>
            </Link>
            <Link href="/contact-us">

              <button className=" bg-16A085 bold-font text-white lg:w-60 md:w-auto sm:w-auto w-auto uppercase  font-semibold  px-7 py-4 text-center mr-3">
                Let’s Talk
              </button>
            </Link>

          </div>
      </section>

    </React.Fragment>
  );
};
