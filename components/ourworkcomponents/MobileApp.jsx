"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const g1 = "/assets/images/our-work/mobile-app/impulso.webp";
const g2 = "/assets/images/our-work/mobile-app/2.webp";
const g3 = "/assets/images/our-work/mobile-app/3.webp";
const g4 = "/assets/images/our-work/mobile-app/4.webp";
const g5 = "/assets/images/our-work/mobile-app/5.webp";

export const MobileApp = () => {
  const [open, setOpen] = useState(false);

  const slides = [
    { src: g1 },
    { src: g2 },
    { src: g3 },
    { src: g4 },
    { src: g5 },
  ];

  return (
    <section className="bg-center bg-no-repeat bg-cover pb-12">
      <div className="relative">

        {/* thumbnails (simple version) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {slides.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt=""
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
        />

      </div>
    </section>
  );
};