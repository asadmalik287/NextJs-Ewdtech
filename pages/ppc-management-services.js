import Head from "next/head";
import React from "react";

import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { PpcServices } from "../components/ppccomponents/PpcServices";
import { GetInspired } from "../components/homecomponents/GetInspired";
import { Portfolio } from "../components/Portfolio";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
import { Lead } from "../components/homecomponents/Lead";
import { LimitedBudget } from "../components/ppccomponents/LimitedBudget";
import { Optimizationproced } from "../components/ppccomponents/Optimizationproced";

import seoSec2Image from "../public/assets/images/services-banner-2nd/PPC-100.webp";

const PpcManagement = () => {
  return (
    <>
      <Head>
        <title>
          PPC Management Services | Google Ads & Paid Marketing – EWDTech
        </title>

        <meta
          name="keywords"
          content="Google Ads management agency, PPC management services USA, Facebook ads agency, pay per click management, paid advertising agency USA"
        />

        <meta
          name="description"
          content="EWDTech offers expert PPC management services including Google Ads, social media ads, and campaign optimization to drive traffic, leads, and high ROI."
        />

        <link
          rel="canonical"
          href="https://ewdtech.com/ppc-management-services/"
        />
      </Head>

      <Navbar />

      <Hero
        pageName="PPC MANAGEMENT"
        title="Build Campaigns To Fit Your Google Ads Budget"
        hiddenDesc="hidden"
      />

      <CeoMessage
        title="Tailor Your PPC Strategy According To Your Business’s Goals"
        hidden="hidden"
        buttonText="Get Free Proposal"
        image={seoSec2Image}
        desc={
          <>
            89% of marketers say brand awareness is the most important goal,
            followed by sales and lead generation. Our PPC Management Service
            enables you to:
            <ul className="pl-4 pt-3">
              <li className="list-disc">Increase Brand Awareness</li>
              <li className="list-disc">Drive Sales</li>
              <li className="list-disc">Generate Leads</li>
              <li className="list-disc">Create Impact</li>
            </ul>
          </>
        }
      />

      <Lead />

      <PpcServices />

      <Optimizationproced />

      <LimitedBudget />

      <GetInspired desc="We devise strategies to enhance possibilities and embrace limitless opportunities. Here are some of our impact stories." />

      <Portfolio />

      <FooterForm desc="We shall like to bid effective PPC Advertising Strategy for you and boost your growth with swift mode of action. Get in Touch for an insightful conversation." />

      <Footer />
    </>
  );
};

export default PpcManagement;