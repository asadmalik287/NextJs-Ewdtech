// FAQ.tsx
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

const faqsData = [
  {
    question: "What is UI/UX design and why does my business need it?",
    answer: (
      <>
        <p>
          UI (User Interface) design focuses on the visual and interactive
          elements of your digital product — what users see and click. UX (User
          Experience) design focuses on how the entire experience feels — how
          easy, logical, and enjoyable it is to use your product.
        </p>
        <p className="mt-3">
          A well-designed UI/UX increases user engagement, reduces bounce rate,
          improves conversion rates, and builds long-term brand trust. Research
          shows that every $1 invested in UX returns an average ROI of 9,900% —
          making it one of the highest-leverage investments a business can make.
        </p>
      </>
    ),
  },
  {
    question: "What UI/UX design services does EWDTech offer?",
    answer: (
      <p>
        EWDTech offers a complete range of UI/UX design services including: UX
        research and user interviews, competitive analysis, information
        architecture, wireframing, interactive prototyping, high-fidelity UI
        design, design system creation, mobile app UI/UX design (iOS and
        Android), web app and SaaS dashboard design, and usability testing. We
        also offer{" "}
        <a
          href="https://ewdtech.com/services/ux-audit"
          className="text-[#3DBBA0] hover:text-[#2A9E88]"
        >
          UX audits and redesign
        </a>{" "}
        for existing products.
      </p>
    ),
  },
  {
    question: "How much do UI/UX design services cost at EWDTech?",
    answer: (
      <p>
        Pricing depends on project scope and complexity. A simple landing page
        UI design starts from $500. A complete mobile app UI/UX project
        typically ranges from $2,000–$8,000. Enterprise SaaS product design can
        start from $10,000+. We offer flexible engagement models including
        fixed-price projects and monthly retainers.{" "}
        <a
          href="https://ewdtech.com/contact"
          className="text-[#3DBBA0] hover:text-[#2A9E88]"
        >
          Contact us for a custom quote
        </a>
        .
      </p>
    ),
  },
  {
    question: "How long does a UI/UX design project take?",
    answer: (
      <p>
        Timelines vary based on scope. A landing page redesign typically takes
        1–2 weeks. A complete mobile app UI/UX design project takes 4–8 weeks.
        Enterprise SaaS product design can take 8–16 weeks. EWDTech provides a
        detailed timeline during the discovery phase before any work begins.
      </p>
    ),
  },
  {
    question: "Which tools does EWDTech use for UI/UX design?",
    answer: (
      <p>
        EWDTech primarily uses Figma for all UI/UX design work, including
        wireframing, high-fidelity design, interactive prototyping, and design
        system management. We also use FigJam for collaborative UX workshops,
        Maze and UserTesting for usability testing, and Hotjar for behavioral
        analytics and heatmaps on existing products.
      </p>
    ),
  },
  {
    question: "Does EWDTech provide UI/UX design for startups?",
    answer: (
      <p>
        Yes. EWDTech proudly works with startups at every stage — from pre-seed
        to Series B. We offer startup-friendly packages focused on MVP UI
        design, rapid prototyping, and scalable design systems. Our goal is to
        help early-stage businesses launch fast with a product that users
        actually love to use.
      </p>
    ),
  },
  {
    question: "Can EWDTech redesign my existing website or app?",
    answer: (
      <p>
        Absolutely. Redesign projects are one of EWDTech's specialties. We begin
        with a comprehensive{" "}
        <a
          href="https://ewdtech.com/services/ux-audit"
          className="text-[#3DBBA0] hover:text-[#2A9E88]"
        >
          UX audit
        </a>{" "}
        to identify what's working and what isn't, then deliver a redesigned
        experience that improves usability, reduces friction, and improves
        conversion rates.
      </p>
    ),
  },
  {
    question: "What makes EWDTech different from other UI/UX design agencies?",
    answer: (
      <p>
        Three things set EWDTech apart: (1) We are data-informed — every design
        decision is backed by user research and analytics, not gut feeling. (2)
        We are outcomes-focused — we measure success by business metrics like
        conversion rate and retention, not just deliverables. (3) We are
        collaborative — you have full access to our design process, Figma files,
        and a dedicated point of contact throughout the project.
      </p>
    ),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="md:text-4xl text-xl text-center font-bold text-gray-900 mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-4 faqs-data mt-10">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="font-semibold text-gray-900">
                {faq.question}
              </span>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
