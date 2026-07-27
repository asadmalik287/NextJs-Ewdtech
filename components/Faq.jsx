import { useState } from "react";

const faqsData = [
  {
    question: "What does EWD Tech specialize in?",
    answer:
      "EWD Tech is a top-level digital solutions company specializing in UI/UX design, web development, app development, and eCommerce solutions. We focus on building scalable, user-centric digital products that help businesses grow long-term.",
  },
  {
    question: "Why is EWD Tech considered a top digital services company?",
    answer: (
      <>
        EWD Tech follows a development-first approach combined with growth strategies. We focus on:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>User experience & conversion psychology</li>
          <li>Scalable and secure development</li>
          <li>Modern technologies</li>
          <li>Long-term business growth</li>
        </ul>
        <p className="mt-2">
          This makes us a trusted digital partner, not just a service provider.
        </p>
      </>
    ),
  },
  {
    question: "Do you provide UI/UX design services for businesses?",
    answer:
      "Yes. We offer professional UI/UX design services focused on usability, user behavior, and conversion optimization. Our designs are research-driven and tailored for modern web, mobile, and eCommerce platforms.",
  },
  {
    question: "What type of web development services do you offer?",
    answer: (
      <>
        We provide custom web development services including:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Business websites</li>
          <li>CMS-based websites</li>
          <li>High-performance web applications</li>
          <li>SEO-ready and mobile-optimized solutions</li>
        </ul>
      </>
    ),
  },
  {
    question: "Do you develop mobile and web applications?",
    answer:
      "Yes. We offer mobile and web app development services focused on performance, usability, and seamless user experience.",
  },
  {
    question: "Can EWD Tech build eCommerce websites?",
    answer:
      "Absolutely. We build conversion-focused eCommerce solutions optimized for user experience, scalability, and sales growth.",
  },
  {
    question: "Do you also offer SEO and digital marketing services?",
    answer:
      "Yes. We provide SEO, branding, PPC management, lead generation, and social media marketing to scale digital products effectively.",
  },
  {
    question: "Is EWD Tech suitable for startups and growing businesses?",
    answer:
      "Yes. We work with startups, small businesses, and growing companies using scalable and flexible strategies aligned with business goals.",
  },
  {
    question: "How does EWD Tech help businesses rank on Google and AI search?",
    answer: (
      <>
        We optimize for both traditional and AI-powered platforms using:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Structured content</li>
          <li>FAQs and schema</li>
          <li>Entity-based SEO</li>
          <li>Authority-focused content</li>
        </ul>
      </>
    ),
  },
  {
    question: "How long does it take to see results?",
    answer: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Initial SEO signals: 4–6 weeks</li>
          <li>Strong growth: 2–3 months</li>
          <li>Authority & AI visibility: 3–6 months</li>
        </ul>
      </>
    ),
  },
  {
    question: "Are your services Google and AI compliant?",
    answer:
      "Yes. All our strategies are white-hat, compliant, and future-proof, focusing on sustainable long-term growth.",
  },
  {
    question: "Do you provide custom solutions or fixed packages?",
    answer:
      "We primarily offer custom solutions tailored to each business’s goals rather than fixed packages.",
  },
  {
    question: "Why should I choose EWD Tech over other agencies?",
    answer: (
      <>
        You should choose EWD Tech if you want:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>A professional, top-level company</li>
          <li>Strong UI/UX & development focus</li>
          <li>Scalable digital solutions</li>
          <li>Long-term growth partnership</li>
          <li>SEO & AI optimization support</li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I start a project with EWD Tech?",
    answer:
      "You can contact us through our website. Our team will review your requirements and guide you with the best possible solution.",
  },
];

export default function Faq() {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="md:text-4xl text-xl text-center font-bold text-gray-900 mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-4 faqs-data">
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
              <div className="px-6 py-4 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}