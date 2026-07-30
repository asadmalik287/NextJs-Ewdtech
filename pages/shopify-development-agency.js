import Head from 'next/head';
import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { GetInspired } from "../components/homecomponents/GetInspired";
import { Portfolio } from "../components/Portfolio";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
const ecommerceSec2Image = "/assets/images/services-banner-2nd/shopify.webp";
import { Services } from "../components/shopifycomponents/Services";
import { Secure } from "../components/shopifycomponents/Secure";
import { TrusedByStories } from "../components/ecommercecomponents/TrusedByStories";


export default function Shopify() {
  return (
    <>
        <Head>
        <link rel="canonical" href="https://ewdtech.com/shopify-development-agency/" />
        <title>Shopify Website Development Company | Shopify Experts & Store Setup – EWDTech</title>
        <meta name="description" content="EWDTech offers expert Shopify development services including store setup, custom design, app integration, and optimization to boost sales and grow your ecommerce business." />
      <meta name="keywords" content="Shopify development agency, ecommerce website development USA, Shopify expert for hire, Shopify store development, custom Shopify development" />
      </Head>
      <Navbar />

      <Hero
        pageName="Shopify Expert"
        title={`Shopify Web Design & 
Development Company`}
        hiddenDesc="hidden"
      />

      <CeoMessage
        title="Start your business journey with Shopify"
        hidden="hidden"
        buttonText="Let’s Talk"
        image={ecommerceSec2Image}
        desc="Shopify enables businesses to meet scalable prospects tailored to customers' needs and offers a dive into an enormous ecosystem. EWDTech can facilitate you handle this immense ecosystem with a diversified and smooth-running Shopify e-commerce site. We assure you of quality inventory management and in-time quality assurance checking. Get in touch to activate an attractive Shopify Store exclusively by EWDTech."
      />

      <TrusedByStories />

      <Services />

      <Secure />

      <GetInspired desc="Have a look and get inspired by the most diversified and aligned working fashion. We deliver quality-oriented results." />

      <Portfolio />

      <FooterForm desc="We are looking forward to enhancing your professional aptitudes and highlighting your vision in the most creative possible way. Get in touch to have an insightful conversation." />

      <Footer />
    </>
  );
}