"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const g2 = "/assets/images/our-work/E-Commerce/2.webp";
const g3 = "/assets/images/our-work/E-Commerce/3.webp";
const g4 = "/assets/images/our-work/E-Commerce/4.webp";
const g5 = "/assets/images/our-work/E-Commerce/5.webp";
const g6 = "/assets/images/our-work/E-Commerce/6.webp";

export const Ecommerce = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: g2 },
    { src: g3 },
    { src: g4 },
    { src: g5 },
    { src: g6 },
  ];

  return (
    <section className="bg-center bg-no-repeat bg-cover pb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {slides.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            className="cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />

      </div>
    </section>
  );
};