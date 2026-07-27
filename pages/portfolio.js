import Head from "next/head";
import React from "react";

import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { OurWork } from "../components/ourworkcomponents/OurWork";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>
          EWDTech Portfolio – Web, SEO & Digital Marketing Case Studies
        </title>

        <meta
          name="description"
          content="View EWDTech’s portfolio showcasing web design, SEO, ecommerce, branding, and digital marketing projects that deliver results for businesses across industries."
        />

        <link rel="canonical" href="https://ewdtech.com/portfolio" />
      </Head>

      <Navbar />

      <Hero
        pageName=""
        title={"PROJECTS BY FIT DESIGN"}
        desc=""
        hiddenDesc="hidden"
      />

      <OurWork />

      <FooterForm />

      <Footer />
    </>
  );
};

export default Portfolio;