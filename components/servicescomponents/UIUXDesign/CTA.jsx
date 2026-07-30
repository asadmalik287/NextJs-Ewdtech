// CTA.tsx
import React from "react";

export default function CTA() {
  return (
    <div className="bg-[#1A1A1A] py-[72px]" id="contact">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-12 py-[52px] px-8 md:px-[60px] bg-[#222222] border-l-4 border-[#3DBBA0]">
          <div>
            <span className="block text-[0.68rem] font-bold bold-font tracking-[0.22em] uppercase text-[#3DBBA0] mb-[10px]">
              Ready to Get Started?
            </span>
            <h2
              className="text-white mb-[10px] font-extrabold bold-font leading-[1.2]"
              style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
            >
              Let's Design Your Next Digital Product
            </h2>
            <p className="text-white/55 max-w-[460px] text-base leading-[1.7]">
              Tell us about your project and get a free consultation from our UI/UX design experts. No commitment
              required.
            </p>
          </div>
          <div className="flex gap-[14px] flex-wrap">
            <a
              href="https://ewdtech.com/contact"
              className="inline-block bg-[#3DBBA0] hover:bg-[#2A9E88] text-white font-bold bold-font text-[0.72rem] tracking-[0.14em] uppercase py-[15px] px-9 transition-colors"
            >
              Book a Free Consultation
            </a>
            <a
              href="https://ewdtech.com/portfolio"
              className="inline-block border-2 border-white/25 hover:border-white hover:bg-white/[0.06] text-white font-bold bold-font text-[0.72rem] tracking-[0.14em] uppercase py-[13px] px-[34px] bg-transparent transition-all"
            >
              See Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}