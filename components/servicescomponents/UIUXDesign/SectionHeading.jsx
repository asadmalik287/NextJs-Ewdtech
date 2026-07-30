// SectionHeading.tsx
import React from "react";


export default function SectionHeading({ label, title, sub, subClassName = "" }) {
  return (
    <>
      <p className="block text-[0.68rem] font-bold bold-font tracking-[0.22em] uppercase text-[#3DBBA0] mb-[10px]">
        {label}
      </p>
      <h2
        className="mb-[14px] font-extrabold bold-font text-[#1A1A1A] leading-[1.2]"
        style={{ fontSize: "clamp(1.6rem,3.5vw,2.2rem)" }}
      >
        {title}
      </h2>
      <p className={`text-[#666666] max-w-[600px] text-[0.975rem] leading-[1.8] mb-12 ${subClassName}`}>{sub}</p>
    </>
  );
}