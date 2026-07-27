import Head from "next/head";
import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { Services } from "../components/socialcomponents/Services";
import { GetInspired } from "../components/homecomponents/GetInspired";
import { Portfolio } from "../components/Portfolio";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
import { Lead } from "../components/homecomponents/Lead";
import { Secure } from "../components/socialcomponents/Secure";
const seoSec2Image = "/assets/images/services-banner-2nd/Social-100.webp";

export default function Social() {
  return (
    <>
      <Head>
        <title>
          Social Media Marketing Services | SMM & Growth Agency – EWDTech
        </title>

        <meta
          name="description"
          content="EWDTech offers expert social media marketing services including content creation, ads management, and audience growth to boost engagement, leads, and sales."
        />

        <link
          rel="canonical"
          href="https://ewdtech.com/social-media-marketing"
        />
      </Head>

      <Navbar />

      <Hero
        pageName="SocialMedia"
        title="We Make Sure Your Brand is Miles Ahead Across Every Channel"
        hiddenDesc="hidden"
      />

      <CeoMessage
        title="Not A One-Trick Pony"
        hidden="hidden"
        buttonText="Let’s Talk"
        image={seoSec2Image}
        desc="We believe in knowing the audience and engaging more to get refreshing influence and an extensive turnover. We work differently as we believe when millions are watching, it's a dire need to engage consistently to flourish smartly. EWDTech is a Social Media Marketing Agency formulating layouts from creative writing to Agile UX designing. Let’s get in touch to formulate the needs focused on creative branding."
      />

      <Lead />

      <Services />

      <Secure />

      <GetInspired desc="Learn about our finest and revolutionary outcomes before taking a life-changing decision." />

      <Portfolio />

      <FooterForm desc="We believe in discovering new perspectives and diving into propelling differences. Our Social Media Marketing Agency can help you formulate the innovative digital solutions." />

      <Footer />
    </>
  );
}