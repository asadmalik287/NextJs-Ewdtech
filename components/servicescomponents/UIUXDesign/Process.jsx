// Process.tsx
import React from "react";
import SectionHeading from "./SectionHeading";

// Data kept local to this component — only used here.
const processSteps = [
  {
    num: "01",
    title: "Discovery",
    text: "We learn your business goals, users, and market. Stakeholder interviews, competitor audit, and project scoping.",
  },
  {
    num: "02",
    title: "UX Research",
    text: "User personas, journey maps, and behavioral research to understand exactly who we're designing for.",
  },
  {
    num: "03",
    title: "Wireframes",
    text: "Low-fidelity layouts and user flows that define structure before visual design begins.",
  },
  {
    num: "04",
    title: "UI Design",
    text: "Pixel-perfect screens in Figma — full visual design with your brand identity baked in.",
  },
  {
    num: "05",
    title: "Prototype & Test",
    text: "Interactive prototypes tested with real users. Iterations based on feedback and data.",
  },
  {
    num: "06",
    title: "Handoff",
    text: "Developer-ready Figma files with specs, assets, and design system documentation.",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-[#F4F5F7]">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeading
          label="How We Work"
          title="Our UI/UX Design Process"
          sub="A proven, collaborative process that keeps you in the loop at every stage and delivers results on time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="text-center py-11 px-7 pb-9 bg-white border border-[#E0E0E0] relative transition-all hover:border-[#3DBBA0] hover:shadow-[0_4px_20px_rgba(61,187,160,0.08)]"
            >
              <div className="w-14 h-14 rounded-full bg-[#3DBBA0] text-white flex items-center justify-center mx-auto mb-[22px] text-[1.1rem] font-extrabold bold-font shadow-[0_4px_16px_rgba(61,187,160,0.3)]">
                {step.num}
              </div>
              <h3 className="text-lg mb-[10px] text-[#1A1A1A] font-black bold-font">{step.title}</h3>
              <p className="text-base leading-[1.7] opacity-70">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}