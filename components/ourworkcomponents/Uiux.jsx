"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const g1 = "/assets/images/our-work/uiux/1.webp";
const g2 = "/assets/images/our-work/uiux/2.webp";
const g3 = "/assets/images/our-work/uiux/3.webp";
const g4 = "/assets/images/our-work/uiux/4.webp";
const g5 = "/assets/images/our-work/uiux/5.webp";

export const Uiux = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: g1 },
    { src: g2 },
    { src: g3 },
    { src: g4 },
    { src: g5 },
  ];

  return (
    <section className="pb-12">
      {/* Grid Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {slides.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            className="cursor-pointer w-full h-auto"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </section>
  );
};