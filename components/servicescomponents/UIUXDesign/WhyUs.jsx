// WhyUs.tsx
import React from "react";
import SectionHeading from "./SectionHeading";

// Placeholder artwork borrowed from the web design services icon set —
// swap these for real UI/UX icons later.
const whyItems = [
  {
    color: "purple",
    image: "/assets/images/webdesign-services/increase-conversion.svg",
    title: "Results-Driven Design",
    text: "Our designs are built to convert. We track metrics like task completion rate, bounce rate, and conversion rate — not just aesthetics.",
  },
  {
    color: "green",
    image: "/assets/images/webdesign-services/build-better-customers.svg",
    title: "Transparent Collaboration",
    text: "You're involved at every stage. Weekly check-ins, shared Figma access, and a dedicated project manager keep you informed and in control.",
  },
  {
    color: "pink",
    image: "/assets/images/webdesign-services/drive.svg",
    title: "Fast Turnaround",
    text: "We respect your deadlines. Our agile design sprints and experienced team ensure we deliver high-quality work on schedule, every time.",
  },
  {
    color: "amber",
    image: "/assets/images/webdesign-services/ux.svg",
    title: "Accessible & Inclusive Design",
    text: "All our designs follow WCAG 2.1 accessibility guidelines — ensuring your product works for every user, regardless of ability.",
  },
  {
    color: "green",
    image: "/assets/images/webdesign-services/site.svg",
    title: "Scalable Design Systems",
    text: "We build with growth in mind. Our design systems use atomic design principles so your product scales without design debt.",
  },
  {
    color: "purple",
    image: "/assets/images/webdesign-services/ecommerce-efficient.svg",
    title: "Global Clients, Local Expertise",
    text: "Based in Pakistan with clients across the USA, UK, UAE, and Europe — we bring world-class design standards at competitive rates.",
  },
];

const whyIconColors = {
  purple: "bg-[rgba(91,94,223,0.08)] text-[#5B5EDF]",
  green: "bg-[rgba(61,187,160,0.08)] text-[#3DBBA0]",
  pink: "bg-[rgba(217,83,79,0.08)] text-[#D9534F]",
  amber: "bg-[rgba(240,181,24,0.08)] text-[#F0B518]",
};

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeading
          label="Why Choose EWDTech"
          title="Why Businesses Trust EWDTech for UI/UX Design"
          sub="We don't just make things look good. We design with purpose — every decision backed by user data and business goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E0E0E0] p-7 flex gap-[18px] items-start transition-all hover:border-[#3DBBA0] hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              <div
                className={`w-12 h-12 flex-shrink-0 rounded flex items-center justify-center ${whyIconColors[item.color]}`}
              >
                <img src={item.image} alt={item.title} className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className="text-lg mb-[6px] font-black bold-font text-[#1A1A1A]">{item.title}</h3>
                <p className="text-base leading-[1.7] opacity-70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
