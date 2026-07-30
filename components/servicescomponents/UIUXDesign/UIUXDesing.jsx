import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Process from "./Process";
import WhyUs from "./WhyUs";
import Tools from "./Tools";
import Industries from "./Industries";
import FAQ from "./FAQ";
import RelatedLinks from "./RelatedLinks";
import CTA from "./CTA";

export default function UIUXDesign() {
  return (
    <div
      className="bg-white text-[#1A1A1A]"
      style={{
        fontFamily: "OpenSans, sans-serif",
        lineHeight: 1.7,
        fontSize: 16,
      }}
    >
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Tools />
      <Industries />
      <FAQ />
      <RelatedLinks />
      <CTA />
    </div>
  );
}
