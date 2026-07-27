// pages/faqs.js
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Hero } from "../components/contactuscomponents/Hero";
import Faq from "../components/Faq";

export default function Faqs() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://ewdtech.com/faqs" />
        <title>FAQs – EWDTech | Web Development & Digital Marketing Questions</title>
        <meta
          name="description"
          content="Explore frequently asked questions about EWDTech's SEO, web design, ecommerce, PPC, and branding services to help grow your business online."
        />
      </Head>

      <Hero
        pageName=""
        title="Frequently Asked Questions (FAQs)"
        desc=""
        hiddenDesc="hidden"
      />
      <Faq />
      <br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}