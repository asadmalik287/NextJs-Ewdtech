import Head from "next/head";
import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { GetInspired } from "../components/homecomponents/GetInspired";
import { Portfolio } from "../components/Portfolio";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
const ecommerceSec2Image = "/assets/images/services-banner-2nd/E commerce-100.webp";
import { SolveNeeds } from "../components/ecommercecomponents/SolveNeeds";
import { Secure } from "../components/ecommercecomponents/Secure";
import { TrusedByStories } from "../components/ecommercecomponents/TrusedByStories";

export default function Ecommerce() {
  return (
    <>
      <Head>
        <title>Ecommerce Website Development Services | EWDTech</title>
        <meta
          name="description"
          content="EWDTech offers ecommerce website development including Shopify, WooCommerce, and custom online stores that are secure, scalable, and high-converting."
        />
        <meta
          name="keywords"
          content="ecommerce website development USA, Shopify development agency, WooCommerce development, custom online store development, ecommerce solutions USA"
        />
        <link
          rel="canonical"
          href="https://ewdtech.com/ecommerce-development/"
        />
      </Head>

      <Navbar />

      <Hero
        pageName="ECOMMERCE"
        title={`Creative Ecommerce 
Website Design Agency`}
        hiddenDesc="hidden"
      />

      <CeoMessage
        title="Having a E-Commerce website isn’t enough for your business."
        hidden="hidden"
        buttonText="Get Free Proposal"
        image={ecommerceSec2Image}
        desc="We value driving community and facilitating like the drive-throughs with integrated, functional, and complete information accessible in a snap. We assure you of a Brand Digital Interface with a smooth user interface and attractive visualization. Get an engaging website developed today to dwell in a community with an in-depth digital presence."
      />

      <TrusedByStories />

      <SolveNeeds />

      <Secure
        leftTitle="Secure and Intuitive eCommerce Website Development for Business Enterprises"
        leftDesc="We assure you of security, confidentiality, and end-to-end encrypted working fashion. Our intuitive solutions of Ecommerce Website Development and optimization help us generate higher sales and quit the story of past. With the art of growth and remodeling, EWDTech can help you expand the possibilities associated with your business."
        rightBox1={`AMAZON STORE 
Development`}
        rightBox2={`ECOMMERCE PORTAL
Development`}
        rightBox3={`SHOPIFY
Development`}
        rightBox4={`MAGENTO
Development`}
      />

      <GetInspired desc="We design your brand with creativity and loyalty. Some of our remarkable portfolio can be glanced here." />

      <Portfolio />

      <FooterForm desc="We dream, fabricate and execute the remarkable possibilities in a spin. Let our Digital Marketing Agency help you in defining your brand with the most creative results." />

      <Footer />
    </>
  );
}