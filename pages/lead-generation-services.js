import Head from "next/head";
import React from "react";

import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { Services } from "../components/ppccomponents/Services";
import { GetInspired } from "../components/homecomponents/GetInspired";
import { Portfolio } from "../components/Portfolio";
import { FooterForm } from "../components/FooterForm";
import { Lead } from "../components/homecomponents/Lead";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
import { Secure } from "../components/ecommercecomponents/Secure";

import seoSec2Image from "../public/assets/images/services-banner-2nd/Lead Generation-100.webp";

const LeadGeneration = () => {
  return (
    <>
      <Head>
        <title>
          Lead Generation Services | B2B & Digital Lead Experts – EWDTech
        </title>

        <meta
          name="keywords"
          content="B2B lead generation services, lead generation agency USA, business lead generation, online lead generation services, B2B marketing agency USA"
        />

        <meta
          name="description"
          content="EWDTech provides professional lead generation services to help businesses attract qualified leads, increase conversions, and grow sales with data-driven strategies."
        />

        <link
          rel="canonical"
          href="https://ewdtech.com/lead-generation-services"
        />
      </Head>

      <Navbar />

      <Hero
        pageName="LEAD MANAGEMENT"
        title="Our Lead Generation Services Bring You Qualified Leads"
        hiddenDesc="hidden"
      />

      <CeoMessage
        title="Marketing Must Yield Results"
        hidden="hidden"
        buttonText="Get Free Proposal"
        image={seoSec2Image}
        desc={`As a digital lead generation agency, we specialize in B2C & B2B lead generation, inbound marketing, conversion optimization, and sales nurturing. Our process is data-driven focusing on metrics that boost your business’ growth.
Are you feeling fed up with using digital agencies that don’t bring business? Our metrics for performance are different. We believe in authenticity and effective lead generation through quality link-building, email marketing, search engine optimization, and social media marketing.`}
      />

      <Lead />

      <Services />

      <Secure
        leftTitle="Our Expert Performance Marketers Deliver ROAS"
        leftDesc="EWDTech has a knack for employing effective strategies and devising constructive layouts. We ensure business expansion, reaching more people, transforming them into potential buyers, and eliciting their interest in the products or services. We have a diverse and inclusive team with agilities engrossed in their crux and performing at their best. Our Expert Marketers deliver ROAS in no time, boosting the revenue and ensuring potential illustration effectively. By focusing on delivering a high ROAS, our lead generation service help businesses maximize their return on investment, identify the most effective tactics and strategies for acquiring new customers."
        rightBox1="Promises you qualified leads"
        rightBox2="Cares about sales and only sales"
        rightBox3="Focuses on ROI"
        rightBox4="Returns any unspent budget to you"
      />

      <GetInspired desc="Check out our finest works delivered with remarkable impacts." />

      <Portfolio />

      <FooterForm desc="Lead Generation Marketing is like playing the chess, where the Queen rules making knights grumble with her tact. Let us revolutionize you and build strategic Lead Generation." />

      <Footer />
    </>
  );
};

export default LeadGeneration;