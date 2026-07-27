import Head from 'next/head';

import Navbar from '../components/Navbar';
import { FooterForm } from '../components/FooterForm';
import { Footer } from '../components/Footer';
import { Whoweare } from '../components/aboutuscomponents/Whoweare';
import { CeoMessage } from '../components/aboutuscomponents/CeoMessage';
import { KeepFocus } from '../components/aboutuscomponents/KeepFocus';
import { Leadership } from '../components/aboutuscomponents/Leadership';
import { Jointeam } from '../components/aboutuscomponents/Jointeam';
import { Portfolio } from '../components/Portfolio';
import { Hero } from '../components/contactuscomponents/Hero';

export default function About() {
  return (
    <>
      <Head>
        <title>
          About EWD Tech | Global SEO & Digital Marketing Agency
        </title>

        <meta
          name="description"
          content="Learn about EWD Tech, a global digital marketing agency specializing in SEO, PPC, and web development. We help businesses worldwide grow with proven strategies and measurable results."
        />

        <link
          rel="canonical"
          href="https://ewdtech.com/about"
        />
      </Head>

      <Navbar />

      <Hero
        classBg="about-image"
        pageName="About EWDTECH"
        title="We are intimating your business with a digitized outlook."
        hiddenDesc="hidden"
      />

      <Whoweare />

      <CeoMessage />

      <KeepFocus />

      <Leadership />

      <Jointeam />

      <Portfolio />

      <FooterForm desc="Let’s come and share the table to uncover prospective solutions that can mount economic progress in no time." />

      <Footer />
    </>
  );
}