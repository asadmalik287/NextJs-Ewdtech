// Hero.tsx
import React from "react";
// stats data kept local to this component (only used here)

const stats = [
  { num: "150+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "6+", label: "Years Experience" },
  { num: "3×", label: "Avg. Conversion Lift" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1D1C1C] shadow-[0px_1px_1px_rgba(0,0,0,0.25)] text-center">
      <div className="relative">
        <div className="max-w-[1180px] mx-auto px-[15px] pt-[60px] md:pt-[120px]">
          <p className="text-2xl uppercase text-white opacity-70 text-center font-thin tracking-[5px]">
            UI/UX Design Services
          </p>
          <h1 className="text-white lg:w-8/12 m-auto text-center text-5xl font-black pt-8 max-[768px]:text-[25px] max-[768px]:leading-[1.2] max-[768px]:pt-[13px]">
            Design Experiences
            <br />
            Users <span className="text-[#3DBBA0]">Love</span>
          </h1>
          <p className="pt-6 text-white opacity-70 text-2xl md:w-6/12 m-auto text-center max-[400px]:text-base max-[400px]:leading-[1.8]">
            EWDTech crafts intuitive, beautiful, and high-performing digital experiences for web apps, mobile
            apps, and SaaS products. From research to pixel-perfect design — we do it all.
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-10">
            <a
              href="https://ewdtech.com/contact"
              className="inline-block bg-[#3DBBA0] hover:bg-[#2A9E88] text-white font-bold text-[0.72rem] tracking-[0.14em] uppercase py-[15px] px-9 transition-colors"
            >
              Get a Free Design Audit
            </a>
            <a
              href="https://ewdtech.com/portfolio"
              className="inline-block border-2 border-white/35 hover:border-white hover:bg-white/[0.06] text-white font-bold text-[0.72rem] tracking-[0.14em] uppercase py-[13px] px-[34px] bg-transparent transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="flex justify-center flex-wrap mt-16 border-t border-white/[0.08] bg-[#111111]">
          {stats.map((stat, i, arr) => (
            <div
              key={stat.label}
              className={`text-center py-[30px] px-[52px] max-[480px]:px-7 max-[480px]:py-6 border-white/[0.08] ${
                i !== arr.length - 1 ? "border-r max-[480px]:border-r-0 max-[480px]:border-b" : ""
              }`}
            >
              <div className="text-[2.8rem] font-extrabold text-[#3DBBA0] leading-none">{stat.num}</div>
              <div className="text-[0.68rem] text-white/55 mt-[6px] uppercase tracking-[0.1em] font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}