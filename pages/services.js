// pages/services.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { ClientLogos } from "../components/homecomponents/ClientLogos";
import { GetInspired } from "../components/homecomponents/GetInspired";
import { Portfolio } from "../components/Portfolio";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
import { OurServices } from "../components/servicescomponents/OurServices";
import servicesSec2Image from "../public/assets/images/services-1.webp";
import faisalhanif from "../public/assets/images/faisal-hanif.webp";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services – EWDTech | Web Development & Digital Marketing</title>
        <meta
          name="description"
          content="Custom Web Development Services & Solutions-EWDTECH."
        />
        <link rel="canonical" href="https://ewdtech.com/services/" />
      </Head>

      <Navbar />
      <Hero
        pageName="Services"
        title="Connecting Dots to the Unimaginable."
        hiddenDesc="hidden"
      />
      <CeoMessage
        title="How we can help your business?"
        hidden="show"
        desc="Our Professional Experts can help the businesses roll n rock in their defined industries with minimal expenditures and maximum revenue output."
        desc2="EWDTech is known to transform businesses and help them shoot high. Our Digital Marketing Experts can help you connect dots with the metaverse of imagination."
        image={servicesSec2Image}
        buttonText="Let's Talk"
      />
      <OurServices />
      <ClientLogos
        title="Some Friends we've Made in the Process"
        desc="our experience allows us to bring our disruptive approach to any sector"
        bgColor="bg-031017"
      />
      <GetInspired
        title="Get Inspired by Some of Our Finest Work."
        desc="Here is a glimpse of our 5 years working as Digital Media Marketing agency."
      />
      <Portfolio />
      <FooterForm desc="Let us build something creative, develop optimized software, build unique UX Designs, and rank things on the Top." />
      <Footer />
    </>
  );
}
