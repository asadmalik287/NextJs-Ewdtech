import Head from 'next/head';
import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { Services } from "../components/brandingcomponents/Services";
import { GetInspired } from "../components/homecomponents/GetInspired";
import { Portfolio } from "../components/Portfolio";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
import { Lead } from "../components/homecomponents/Lead";
import { Secure } from "../components/brandingcomponents/Secure";
const seoSec2Image = "/assets/images/services-banner-2nd/branding.webp";



export default function Branding() {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://ewdtech.com/branding-services" />
                <title>Professional Branding Services – Logo, Identity & Strategy | EWDTech</title>
                <meta name="description" content="EWDTech offers professional branding services including logo design, brand identity, and strategy to build a strong and memorable business presence." />
                <meta name="keywords" content="branding agency for startups, brand identity design services, startup branding USA, logo design agency, creative branding agency USA" />
            </Head>
            <Navbar />

            <Hero
                pageName="Creative & Branding"
                title={`Grow your Business Through 
Strategic Branding & Creative Design`}
                hiddenDesc="hidden"
            />

            <CeoMessage
                title={`We’re a Leading
Branding Agency`}
                hidden="hidden"
                buttonText="Let’s Talk"
                image={seoSec2Image}
                desc="In the era of the swift Digitized revolution, where trends and brand loyalty are perpetually shifting, our digital-forward strategies are constant flux. We use an inventive story-telling approach, bold visuals, UX designs and creative content writing. Our methodology reinstates the brand, transforming it into the champion familiarizing audience on cross-channel platforms."
            />

            <Lead />

            <Services />

            <Secure />

            <GetInspired desc="Get a taste of our outstanding portfolio and relish the needs in a flash." />

            <Portfolio />

            <FooterForm desc="We invest in prospects to relish the needs of customers and build a social identity inspiring the community. Get in Touch to know more about our Digital Marketing Agency." />

            <Footer />
        </>
    );
}