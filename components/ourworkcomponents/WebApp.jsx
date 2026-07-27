"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const g1 = "/assets/images/our-work/web-app/1.webp";
const g2 = "/assets/images/our-work/web-app/2.webp";
const g3 = "/assets/images/our-work/web-app/3.webp";
const g4 = "/assets/images/our-work/web-app/4.webp";
const g5 = "/assets/images/our-work/web-app/5.webp";
const g6 = "/assets/images/our-work/web-app/6.webp";
const g7 = "/assets/images/our-work/web-app/7.webp";
const g8 = "/assets/images/our-work/web-app/8.webp";
const g9 = "/assets/images/our-work/web-app/9.webp";
const g10 = "/assets/images/our-work/web-app/10.webp";
const g11 = "/assets/images/our-work/web-app/11.webp";
const g12 = "/assets/images/our-work/web-app/12.webp";

export const WebApp = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: g1 },
    { src: g2 },
    { src: g3 },
    { src: g4 },
    { src: g5 },
    { src: g6 },
    { src: g7 },
    { src: g8 },
    { src: g9 },
    { src: g10 },
    { src: g11 },
    { src: g12 },
  ];

  return (
    <section className="pb-12">
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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </section>
  );
};