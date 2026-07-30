// Industries.jsx
import React from "react";

// NOTE: placeholder logos borrowed from the client-logos set — swap these
// out for real industry artwork later.
const industries = [
  { name: "HealthTech & MedTech", image: "/assets/images/client-logos/assure.webp" },
  { name: "FinTech & Banking", image: "/assets/images/client-logos/bluecascade.webp" },
  { name: "E-Commerce & Retail", image: "/assets/images/client-logos/missionarias.webp" },
  { name: "EdTech & E-Learning", image: "/assets/images/client-logos/neoncrafts.webp" },
  { name: "SaaS & B2B Software", image: "/assets/images/client-logos/california.webp" },
  { name: "Real Estate & PropTech", image: "/assets/images/client-logos/startsortscale.webp" },
  { name: "Automotive & Mobility", image: "/assets/images/client-logos/wedding.webp" },
  { name: "Gaming & Entertainment", image: "/assets/images/client-logos/neonoutshine.webp" },
  { name: "Enterprise & Logistics", image: "/assets/images/client-logos/vintage.webp" },
  { name: "Sustainability & GreenTech", image: "/assets/images/client-logos/vcc.webp" },
];

export default function Industries() {
  return (
    <section className="bg-[#1E1E1E] px-[15px] md:px-5 min-[1301px]:px-[160px]">
      <div className="py-12">
        <p className="text-center text-[0.68rem] font-bold bold-font tracking-[0.22em] uppercase text-[#3DBBA0]">
          Industries We Serve
        </p>

        <h2 className="text-white text-4xl font-extrabold text-center pt-3">
          UI/UX Design Across Every Industry
        </h2>

        <p className="text-white lg:w-2/4 w-full text-lg mx-auto text-center pt-3">
          Our designers bring domain expertise across a wide range of industries
          — so we understand your users before we design for them.
        </p>

        <div className="mt-10 grid grid-cols-2 min-[1001px]:grid-cols-4 gap-3 lg:gap-8">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group bg-[#031017] min-h-[119px] px-5 py-6 flex flex-col items-center justify-center text-center"
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="max-h-[44px] w-auto max-w-full object-contain transition-transform duration-[250ms] ease-in-out group-hover:scale-[0.8875]"
              />
              <span className="block mt-4 text-white text-[0.9rem] font-semibold">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
