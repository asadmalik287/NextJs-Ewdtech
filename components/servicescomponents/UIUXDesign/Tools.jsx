import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "./SectionHeading";

// Borrowed from the "Trusted by Top Stores" section as stand-in artwork —
// cycled across the tools until the real logos land. To swap one in, add
// `logo: "/assets/images/tools/figma.svg"` to that entry.
const placeholderLogos = [
  "/assets/images/shopify.svg",
  "/assets/images/magento.svg",
  "/assets/images/woocommerce.svg",
  "/assets/images/webflow.svg",
];

// Data kept local to this component — only used here.
const tools = [
  { name: "Figma" },
  { name: "FigJam" },
  { name: "Adobe XD" },
  { name: "Maze (User Testing)" },
  { name: "Hotjar" },
  { name: "Zeplin" },
  { name: "Notion (Documentation)" },
  { name: "Lottie (Animations)" },
  { name: "Principle" },
  { name: "Jira / Linear" },
].map((tool, index) => ({
  ...tool,
  logo: tool.logo || placeholderLogos[index % placeholderLogos.length],
}));

const Arrow = ({ direction, onClick }) => (
  <button
    type="button"
    className="inline-flex items-center justify-center w-[38px] h-[38px] border border-[#E0E0E0] rounded-full bg-white text-[#666666] cursor-pointer transition-colors duration-[250ms] hover:text-white hover:bg-[#3DBBA0] hover:border-[#3DBBA0]"
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous tools" : "Next tools"}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="w-4 h-4"
    >
      {direction === "prev" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  </button>
);

export default function Tools() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots: (dots) => (
      <div>
        <Arrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
        {/* slick-theme.css is unlayered, so it outranks Tailwind's layered
            utilities — the dot overrides below need the `!` modifier to win. */}
        <ul className="flex items-center gap-2 m-0 p-0 list-none [&_li]:w-auto! [&_li]:h-auto! [&_li]:m-0! [&_li>button]:w-2! [&_li>button]:h-2! [&_li>button]:p-0! [&_li>button]:border-0! [&_li>button]:rounded-full [&_li>button]:bg-[#CFD4DA]! [&_li>button]:text-[0px]! [&_li>button]:leading-none! [&_li>button]:cursor-pointer [&_li>button]:transition-all [&_li>button]:duration-[250ms] [&_li>button::before]:hidden [&_li.slick-active>button]:w-[22px]! [&_li.slick-active>button]:bg-[#3DBBA0]!">
          {dots}
        </ul>
        <Arrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="pt-30 pb-20 max-[640px]:pt-[50px] max-[640px]:pb-8 bg-[#F4F5F7]">
      <div className="max-w-[1180px] mx-auto px-8 max-[640px]:px-5">
        <div className="[&_h2]:text-center [&>p:last-of-type]:text-center [&>p:last-of-type]:mx-auto">
          <SectionHeading
            label="Our Design Stack"
            title="Tools & Technologies We Use"
            sub="Industry-standard tools for professional, handoff-ready UI/UX design deliverables."
          />
        </div>
        <div className="-mx-[10px] [&_.slick-dots]:static! [&_.slick-dots]:flex! [&_.slick-dots]:items-center [&_.slick-dots]:justify-center [&_.slick-dots]:gap-5 [&_.slick-dots]:w-full! [&_.slick-dots]:mx-0! [&_.slick-dots]:mt-[34px]! [&_.slick-dots]:mb-0! [&_.slick-dots]:p-0!">
          <Slider ref={sliderRef} {...settings}>
            {tools.map((tool) => (
              <div key={tool.name} className="px-[10px] outline-none">
                <div className="group flex items-center justify-center min-h-[110px] py-6 px-5 bg-white border border-transparent transition-[border-color] duration-[250ms] hover:border-[#3DBBA0]">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    title={tool.name}
                    loading="lazy"
                    className="block max-w-full h-auto mx-auto transition-transform duration-[250ms] group-hover:scale-[0.8875]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
