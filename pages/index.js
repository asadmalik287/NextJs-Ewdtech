// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/homecomponents/Hero';
import { BookMeeting } from '../components/homecomponents/BookMeeting';
import { Lead } from '../components/homecomponents/Lead';
import { ClientLogos } from '../components/homecomponents/ClientLogos';
import { GetInspired } from '../components/homecomponents/GetInspired';
import { OurServices } from '../components/homecomponents/OurServices';
import { Reviews } from '../components/homecomponents/Reviews';
import { Portfolio } from '../components/Portfolio';
import { FooterForm } from '../components/FooterForm';
import { Footer } from '../components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://ewdtech.com" />
        <title>EWDTech – Full-Service Web Development & SEO Agency for Business Growth</title>
        <meta
          name="description"
          content="Looking to grow your business online? EWDTech offers professional web development, SEO, PPC, and digital marketing services to boost traffic, leads, and sales."
        />
      </Head>

      {/* ✅ Loader overlays the page — does NOT hide content from crawlers */}
      {isLoading && (
        <video
          autoPlay
          muted
          onEnded={() => setIsLoading(false)}
          className="w-full fixed left-0 top-0 object-cover h-full z-[9999]"
        >
          <source src="/assets/images/loader.mp4" type="video/mp4" />
        </video>
      )}

      {/* ✅ Real content always in DOM — visible to crawlers immediately */}
      <div className={isLoading ? 'invisible' : 'visible'}>
        <Navbar />
        <section className="relative banner-home-bg video-main-banner">
          <div className="absolute flex items-center justify-center h-full w-full">
            <Hero />
          </div>
          <div className="ewd-offic-video">
            <video autoPlay muted loop className="w-100 video-1">
              <source src="/assets/video/ewd-video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <BookMeeting />
        <Lead />
        <ClientLogos
          title="Our Clients"
          desc="Our data-driven approach excites us to help our clients thrive by evergreen support"
          bgColor="bg-1e1e1e"
        />
        <GetInspired desc="In today's fast-paced and competitive digital marketplace, it is more important than ever to have a robust digital presence. That is where we come in." />
        <OurServices />
        <Reviews />
        <Portfolio />
        <FooterForm desc="We believe in transforming generations through innovation and displaying the remarkable services. We would love to add engaging and refreshing spotlight at your brand." />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}