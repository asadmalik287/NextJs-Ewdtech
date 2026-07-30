// RelatedLinks.tsx
import React from "react";
import SectionHeading from "./SectionHeading";

// Data kept local to this component — only used here.
const relatedLinks = [
  { name: "Web Development", href: "https://ewdtech.com/services/web-development" },
  { name: "Mobile App Development", href: "https://ewdtech.com/services/mobile-app-development" },
  { name: "E-Commerce Development", href: "https://ewdtech.com/services/ecommerce-development" },
  { name: "Digital Marketing", href: "https://ewdtech.com/services/digital-marketing" },
  { name: "Brand Identity Design", href: "https://ewdtech.com/services/branding" },
  { name: "SEO Services", href: "https://ewdtech.com/services/seo" },
  { name: "UI/UX Portfolio", href: "https://ewdtech.com/portfolio/ui-ux" },
  { name: "UI/UX Design Blog", href: "https://ewdtech.com/blog/ui-ux-design" },
];

export default function RelatedLinks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-8">
        <SectionHeading
          label="Explore More"
          title="Related Services by EWDTech"
          sub="UI/UX design works best when paired with strong development. Explore our full-service digital solutions."
        />

        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {relatedLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="bg-white border border-[#E0E0E0] py-4 px-5 flex items-center justify-between text-[#666666] text-base font-semibold bold-font transition-all hover:border-[#3DBBA0] hover:text-[#3DBBA0] hover:translate-x-1"
            >
              <span>{l.name}</span>
              <span>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}