// Services.tsx
import React from "react";
import SectionHeading from "./SectionHeading";

// Placeholder artwork borrowed from the existing service icon sets —
// swap these for real UI/UX icons later.
const services = [
  {
    image: "/assets/images/our-services/search-engine.svg",
    title: "UX Research & Strategy",
    text: "We start with deep user research — interviews, surveys, heatmaps, and competitor analysis — to build a UX strategy grounded in real data, not assumptions.",
    link: "https://ewdtech.com/services/ux-research",
    linkText: "Learn about UX Research →",
  },
  {
    image: "/assets/images/main-services/web-design.svg",
    title: "Wireframing & Information Architecture",
    text: "We map out your product's structure, user flows, and content hierarchy before a single pixel is designed — ensuring every screen makes logical sense.",
    link: "https://ewdtech.com/services/wireframing",
    linkText: "Explore Wireframing →",
  },
  {
    image: "/assets/images/main-services/creative.svg",
    title: "High-Fidelity UI Design",
    text: "Visually stunning, brand-aligned interfaces designed in Figma. Every component is crafted with attention to typography, color, spacing, and accessibility.",
    link: "https://ewdtech.com/services/ui-design",
    linkText: "View UI Design Work →",
  },
  {
    image: "/assets/images/our-services/webdesign.svg",
    title: "Mobile App UI/UX Design",
    text: "iOS and Android app design that follows platform-specific guidelines (HIG & Material Design) while delivering a consistent, branded experience your users will love.",
    link: "https://ewdtech.com/services/mobile-app-design",
    linkText: "Mobile Design Services →",
  },
  {
    image: "/assets/images/main-services/drop.svg",
    title: "Interactive Prototyping",
    text: "Clickable, high-fidelity Figma prototypes that simulate the real product — perfect for stakeholder presentations, user testing, and developer handoff.",
    link: "https://ewdtech.com/services/prototyping",
    linkText: "See Prototype Examples →",
  },
  {
    image: "/assets/images/main-services/ecom.svg",
    title: "Design System & Component Library",
    text: "Scalable Figma design systems with reusable components, tokens, and documentation — ensuring design consistency across your entire product ecosystem.",
    link: "https://ewdtech.com/services/design-system",
    linkText: "Design System Details →",
  },
  {
    image: "/assets/images/main-services/seo.svg",
    title: "SaaS & Dashboard UI Design",
    text: "Complex data, made clear. We design intuitive dashboards and SaaS products where users can find what they need fast and accomplish their goals effortlessly.",
    link: "https://ewdtech.com/services/saas-design",
    linkText: "SaaS Design Cases →",
  },
  {
    image: "/assets/images/main-services/lead.svg",
    title: "UX Audit & Redesign",
    text: "We audit your existing product, identify UX friction points and conversion blockers, and deliver a prioritized redesign roadmap backed by evidence.",
    link: "https://ewdtech.com/services/ux-audit",
    linkText: "Get a UX Audit →",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeading
          label="What We Offer"
          title="Complete UI/UX Design Services"
          sub="From the first wireframe to the final handoff — EWDTech covers every stage of the design process with expertise and precision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E0E0E0]">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-white hover:bg-[#F4F5F7] border-r border-b border-[#E0E0E0] py-11 px-8 pb-9 text-center transition-colors hover:shadow-[inset_0_-3px_0_#3DBBA0]"
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                <img src={s.image} alt={s.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-black bold-font text-[#1A1A1A] mb-3 text-center">{s.title}</h3>
              <p className="text-base leading-[1.7] opacity-70 text-center">{s.text}</p>
              <a
                href={s.link}
                className="inline-flex items-center gap-[5px] hover:gap-[9px] mt-[18px] text-[0.75rem] font-bold bold-font tracking-[0.08em] uppercase text-[#3DBBA0] transition-all"
              >
                {s.linkText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
