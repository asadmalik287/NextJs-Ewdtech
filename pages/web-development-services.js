import Head from 'next/head';
import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { Services } from "../components/webdesdevelopcomponents/Services";
import { GetInspired } from "../components/homecomponents/GetInspired";
import { Portfolio } from "../components/Portfolio";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
import { TrusedByStories } from "../components/webdesdevelopcomponents/TrusedByStories";

import seoSec2Image from "../public/assets/images/services-banner-2nd/Web Design-100.webp";
import seoSec3Image from "../public/assets/images/web-coding.webp";

import { TechnoExpertLogos } from "../components/webdesdevelopcomponents/TechnoExpertLogos";
import { StartDigitalEngine } from "../components/webdesdevelopcomponents/StartDigitalEngine";

const Webdesigndevelopment = () => {
  return (
    <>
      <Head>
        <title>Website Design & Development Company | EWDTech</title>

        <meta
          name="description"
          content="Custom Web Development Services & Solutions-EWDTECH."
        />

        <meta
          name="keywords"
          content="web development company USA, custom website development, hire web developer USA, professional web development services, website development agency"
        />

        <link
          rel="canonical"
          href="https://ewdtech.com/web-development-services/"
        />
      </Head>

      <Navbar />

      <Hero
        pageName="Website Design & Development"
        title="We Make Sure That Your Business is Putting its Best Foot Forward"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis lacus vitae tempus efficitur"
        hiddenDesc="hidden"
      />

      <CeoMessage
        title="Website Design"
        hidden="hidden"
        buttonText="Get Free Proposal"
        image={seoSec2Image}
        desc="We align our agency with industry-leading global brands and forward-thinking startups to invent great digital experiences on the web. Our purpose is to create impactful marketing websites with interactive designs optimized to drive traffic, engagement, and conversion for businesses across various industries. With a design-driven, strategy-led approach, our creative team sharpens your brand vision. Get in touch to dive into broad spectrum of UX Website design."
      />

      <TrusedByStories />

      <Services />

      <CeoMessage
        title="Website Development"
        hidden="hidden"
        buttonText="Get Free Proposal"
        image={seoSec3Image}
        desc="We design what people want to catch. From front-end to back-end development, our custom web design service to create an intuitive UX Design customized website drives the customers. Our custom web design service team works seamlessly with our creative team to build a website supported by engaging animations, a smooth user interface, engaging Visual design, creative content writing, and purposeful interactions.

By combining attractive visuals with sophisticated motion elements, we imply strategies to web users and ultimately convert them into loyal customers."
      />

      <TechnoExpertLogos />

      <StartDigitalEngine />

      <GetInspired desc="We love to portray the best and perfect concocting tasks in the flash of time." />

      <Portfolio />

      <FooterForm desc="Get in touch to learn about the prospects of relishing web designs and attractive outlooks to portray your brand effectively." />

      <Footer />
    </>
  );
};

export default Webdesigndevelopment;