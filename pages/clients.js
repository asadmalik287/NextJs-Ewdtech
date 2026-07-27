"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
const seoSec2Image = "/assets/images/services-banner-2nd/clients.webp";
import { ClientLogos } from "../components/homecomponents/ClientLogos";

const stars = "/assets/images/yellow-star.svg";
const client1 = "/assets/images/client-1.webp";
const client2 = "/assets/images/client-2.webp";
const client3 = "/assets/images/client-3.webp";
const client4 = "/assets/images/client-4.webp";
const client5 = "/assets/images/client-5.webp";
const client6 = "/assets/images/client-6.webp";
const client7 = "/assets/images/client-7.webp";
const client8 = "/assets/images/client-8.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { EqualHeight, EqualHeightElement } from "react-equal-height";

export const Clients = () => {
  const obj = [
    {
      clientName: "Amelia",
      clientDesc:
        "We have been particularly happy with the active and professional development team that has offered us valuable insights in setting up our needed site. I would warmly recommend them.",
      clientImage: client1,
    },
    {
      clientName: "Ronald Richards",
      clientDesc:
        "Have worked with Maqsood and team for over 6 years on numerous projects and websites. They always deliver on time and can handle any special requests. They are an important partner in our business and highly recommended!",
      clientImage: client2,
    },
    {
      clientName: "Savannah Nguyen",
      clientDesc:
        "What we appreciated most about working with EWDTech and his team was their ability to cut through the predictable problems of a project, keep everyone happy, and deliver the expected results.",
      clientImage: client3,
    },
    {
      clientName: "Amelia.",
      clientDesc:
        "We have been particularly happy with the active and professional development team that has offered us valuable insights in setting up our needed site. I would warmly recommend them.",
      clientImage: client4,
    },
    {
      clientName: "Michael Richards",
      clientDesc:
        "Whether it’s a new development, update or maintenance – EWDTech always shines through. Their turnaround time is always stellar, it’s a pleasure to work with them.",
      clientImage: client5,
    },
    {
      clientName: "Isabella",
      clientDesc:
        "We were extraordinarily pleased with the functionality and depth of understanding that EWDTech solution exhibited after a relatively brief but incisive, project kickoff meeting.",
      clientImage: client6,
    },
    {
      clientName: "Floyd Miles",
      clientDesc:
        "EWDTech has developed our award winning cross platform app on the Deep Touch framework and we are very happy with the implementation and the capabilities of the product.",
      clientImage: client7,
    },
    {
      clientName: "David Rock",
      clientDesc:
        "We work together for several years since the very early days of our company. We have been able to offload a significant portion of our development effort to their team. They have been reliable and responsive to our needs.",
      clientImage: client8,
    },
  ];
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <Navbar />

      <Hero
        pageName="Our Honourable Clients"
        title="Our Clients Get Quality Work Across the World"
        desc="We have delivered multiple successful projects..."
      />

      <CeoMessage
        title="Marketing Must Yield Results"
        hidden="hidden"
        buttonText="Get Free Proposal"
        image={seoSec2Image}
      />

      <ClientLogos
        title="Our Clients"
        desc="Data-driven approach helping clients grow"
        bgColor="bg-1e1e1e"
      />

      <section className="py-16 bg-efefef maindPadding">
        <h4 className="text-3xl bold-font text-center">
          Don’t take our word for it
        </h4>

        <section className="pt-12 client-carousel">
          <EqualHeight>
            <Slider {...settings}>
              {obj.map((e, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl">
                  <div className="flex justify-between">
                    <img src={e.clientImage} alt="" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <img width="18px" key={i} src={stars} alt="star" />
                      ))}
                    </div>
                  </div>

                  <EqualHeightElement>
                    <h4 className="text-xl pt-3">{e.clientName}</h4>
                    <p className="pt-3">{e.clientDesc}</p>
                  </EqualHeightElement>
                </div>
              ))}
            </Slider>
          </EqualHeight>
        </section>
      </section>

      <FooterForm />
      <Footer />
    </>
  );
};
export default Clients; // ← Add this
