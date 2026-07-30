import React from "react";
const services = "/assets/images/our-services/seo-services.webp";
const socialMediaMarketing = "/assets/images/our-services/social-media.svg";
const ppcmangement = "/assets/images/our-services/seo.webp";
const webdesign = "/assets/images/our-services/webdesign.svg";
const leadgeneration = "/assets/images/our-services/leadgerneration.svg";
const ecommerce = "/assets/images/our-services/ecom.svg";
const amazon = "/assets/images/our-services/amazon.svg";
const shopifyexpert = "/assets/images/our-services/shopify.svg";
const ceative = "/assets/images/our-services/creative.svg";
import Link from 'next/link';
export const OurServices = () => {
  const servicesArr = [
    {
      id: "1",
      anchorLink: "/seo-services",
      image: services,
      title: "Search Engine Optimization",
      desc: "We are here to rank you uniquely, increase your digital visibility and transform your traffic into potential customers by Local SEO, Technical SEO, On page SEO and Off Page SEO.",
    },
    {
      id: "2",
      anchorLink: "/social-media-marketing",
      image: socialMediaMarketing,
      title: "Social Media Marketing",
      desc: "We illustrate your brand effectively, Social Media Management & optimization as per the vision and diversify your brand with uniqueness.",
    },
    {
      id: "3",
      anchorLink: "/ppc-management-services",
      image: ppcmangement,
      title: "PPC Management",
      desc: "Not just an activity, we are here Investing on your Brand and elevating the Pay-Per-Click with minimal budget. ",
    },
    {
      id: "4",
      anchorLink: "/web-development-services",
      image: webdesign,
      title: "Web Design & Development",
      desc: "A new interface is on the way to showcase your Brand Image effectively and engage your customers with smooth interface in Website Design Service.",
    },
    {
      id: "5",
      anchorLink: "/lead-generation-services",
      image: leadgeneration,
      title: "Lead Generation",
      desc: "Engaging more, Transforming impact. Through strategic interventions, we are converting potential followers into long-term clients through Lead Generation Service.",
    },
    {
      id: "6",
      anchorLink: "/ecommerce-development",
      image: ecommerce,
      title: "E-Commerce",
      desc: "Diversity at Single Click. We are here to manage the E-commerce sites effectively through E-commerce website design service, Ecommerce Optimization, Ecommerce Marketing Services. ",
    },
    {
      id: "7",
      anchorLink: "/",
      image: amazon,
      title: "Amazon FBA",
      desc: "We opt authenticity by providing Amazon FBA services including product listing, optimization, inventory management, shipping and handling. ",
    },
    {
      id: "8",
      anchorLink: "/shopify-development-agency",
      image: shopifyexpert,
      title: "Shoppify Expert",
      desc: "We diversify your brand by prioritizing needs, aligning strategies, Shopify development service, and Shopify Ecommerce Service.",
    },
    {
      id: "9",
      anchorLink: "/branding-services",
      image: ceative,
      title: "Creative & Branding ",
      desc: "We Think, Explore and Showcase on your behalf while producing innovative branding techniques like Creative Content Writing, UX Design.",
    },
  ];
  return (
    <React.Fragment>
      <section className="">
        <section className="mainMarginTop maindPadding bg-efefef py-12">
          <section className="">
            <h2 className="text-4xl bold-font text-center m-auto text-center w-full">
              Our Services
            </h2>
            <p className="opacity-70 pt-3 md:w-5/12 m-auto text-center">
              We open the Metaverse of Client-Focused Approaches. We deal in
              services including:
            </p>
          </section>
          <section className="bg-white mt-12">
            <div className="flex flex-wrap">
              {servicesArr.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="lg:w-4/12 md:w-6/12 sm:w-full w-full col-Services-home"
                  >
                    <Link href={e.anchorLink}>
                      <div className="p-5 mainServicesBlock">
                        <img alt="..." src={e.image} />
                        <h3 className="text-lg font-black bold-font pt-4">
                          {e.title}
                        </h3>
                        <p className="md:w-10/12 pt-4 opacity-70 w-full sm:w-full">
                          {e.desc}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
          <div className="flex mt-9 justify-center">
            <Link href="/portfolio/" className="home-hero-btn ">
              <button className=" bg-white bold-font uppercase lg:w-60 md:w-auto sm:w-auto w-auto font-semibold  px-7 py-4 text-center mr-3">
                Our Work
              </button>
            </Link>
            <Link href="/contact-us" className="home-hero-btn ">
              <button className=" bg-16A085 bold-font text-white lg:w-60 md:w-auto sm:w-auto w-auto uppercase  font-semibold  px-7 py-4 text-center mr-3">
                Let’s Talk
              </button>
            </Link>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};
