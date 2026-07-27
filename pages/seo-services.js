import Head from 'next/head';

import Navbar from '../components/Navbar';
import { Hero } from '../components/contactuscomponents/Hero';
import { Lead } from '../components/homecomponents/Lead';
import { GetInspired } from '../components/homecomponents/GetInspired';
import { Portfolio } from '../components/Portfolio';
import { FooterForm } from '../components/FooterForm';
import { Footer } from '../components/Footer';
import { CeoMessage } from '../components/servicescomponents/CeoMessage';
import { SeoContent } from '../components/seocomponents/SeoContent';
import { OrganicMarketing } from '../components/seocomponents/OrganicMarketing';
import { PerfectStrategy } from '../components/seocomponents/PerfectStrategy';

const seoSec2Image =
  "/assets/images/services-banner-2nd/SEO-100.webp";

export default function Seo() {
  return (
    <>
      <Head>
        <title>
          SEO Services Company – Boost Rankings & Traffic | EWDTech
        </title>

        <meta
          name="keywords"
          content="SEO agency for small business USA, affordable SEO services, local SEO company, search engine optimization USA, SEO services for small business"
        />

        <meta
          name="description"
          content="EWDTech offers professional SEO services, including on-page, off-page, and technical SEO to boost rankings, traffic, and leads. Grow your business with proven strategies."
        />

        <link
          rel="canonical"
          href="https://ewdtech.com/seo-services"
        />
      </Head>

      <Navbar />

      <Hero
        pageName="Seo Services"
        title="Increase Organic Visitors, Leads & Conversions"
        hiddenDesc="hidden"
      />

      <CeoMessage
        title="Grow Your Brand’s Footprint online at the Local, National"
        hidden="hidden"
        buttonText="Get Free Proposal"
        image={seoSec2Image}
        desc="SEO isn’t just about an optimized website. It’s the fusion of On-Page factors and Off-page factors engrossed with Technical Factors to rank organically. Organic Search Strategies with Link Building helps in connecting with new audiences, and generating revenue."
      />

      <Lead />

      <SeoContent />

      <OrganicMarketing />

      <PerfectStrategy />

      <GetInspired desc="we offer customized SEO plans tailored to your specific needs and goals. Here are a few for your satiation." />

      <Portfolio />

      <FooterForm desc="With EWD's SEO services, you can trust that your business is in good hands. We are committed to providing you with the highest level of service and support and are always here to answer your queries in a snap!" />

      <Footer />
    </>
  );
}