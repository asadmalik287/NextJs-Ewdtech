import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const g1 = "/assets/images/our-work/funnels/1.webp";
const g2 = "/assets/images/our-work/funnels/2.webp";
const g3 = "/assets/images/our-work/funnels/3.webp";
const g4 = "/assets/images/our-work/funnels/4.webp";
const g5 = "/assets/images/our-work/funnels/5.webp";
const g6 = "/assets/images/our-work/funnels/6.webp";
const g7 = "/assets/images/our-work/funnels/7.webp";

export const Funnels = () => {
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