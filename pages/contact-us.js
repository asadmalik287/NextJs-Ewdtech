import React from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Hero } from "../components/contactuscomponents/Hero";
import { Form } from "../components/contactuscomponents/Form";

export const Contactus = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Us | EWDTech</title>
        <meta
          name="description"
          content="Contact EWDTech for web design, SEO, ecommerce, branding, and digital marketing services."
        />
      </Head>

      <Hero
        pageName="Contact Us"
        title="Let us know About your Business."
        desc="Working with us means Thinking Like A Challenger..."
      />

      <Form />

      <Footer />
    </React.Fragment>
  );
};
export default Contactus; // ← Add this
