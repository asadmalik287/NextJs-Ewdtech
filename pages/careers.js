// pages/careers.js
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { CareerForm } from "../components/careerForm";
import { Footer } from "../components/Footer";
import { CeoMessage } from "../components/servicescomponents/CeoMessage";
import { CareersServices } from "../components/careersServices";
const seoSec2Image = "/assets/images/services-banner-2nd/clients.webp";
const right = "/assets/images/right.webp";

const positions = [
  { positionTitle: "Admin and HR Manager" },
  { positionTitle: "Business Development Intern" },
  { positionTitle: "Digital Marketer" },
  { positionTitle: "Script Writer" },
  { positionTitle: "UX/UI Designer" },
  { positionTitle: "Python Developer" },
  { positionTitle: "Laravel Expert" },
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers – EWDTech | Join Our Growing Team</title>
        <meta
          name="description"
          content="Explore career opportunities at EWDTech. Join our team of innovators in web development, digital marketing, design, and more."
        />
        <link rel="canonical" href="https://ewdtech.com/careers/" />
      </Head>

      <Navbar />
      <Hero
        pageName="new opportunities."
        title="We're Expanding Our Team Grow With Us"
        desc="Innovation, Diligence, and Excellence when it comes to working together, we know a thing or two about teamwork."
      />
      <CeoMessage
        title="Innovate and grow with EWDTech"
        hidden="hidden"
        buttonText="Get Free Proposal"
        image={seoSec2Image}
        desc={`EWDTech has been delivering premium IT-enabled business solutions to a wide array of client organizations for over four decades. We have remained at the cutting edge of enterprise technology by making employee excellence our top priority.

        We give you opportunities to excel and achieve the global recognition that you deserve!`}
      />

      <section className="mainMarginTop maindPadding">
        <h5 className="text-md uppercase text-dark text-center">
          Current openings
        </h5>
        <h5 className="text-3xl bold-font uppercase text-center pt-3 font-thin">
          Join Our Team
        </h5>
        <p className="opacity-70 pt-3 md:w-5/12 m-auto text-center pt-3">
          We are committed to providing an inclusive and welcoming environment
          for everyone. We believe in equality and fairness for all.
        </p>

        <section className="md:w-8/12 m-auto pt-12">
          {positions.map((e) => (
            <a
              key={e.positionTitle}
              href="#applynow"
              className="flex justify-between py-6 border-bottom-8F8F8F"
            >
              <div>{e.positionTitle}</div>
              <div className="flex items-center">
                <div className="pr-4 text-16A085">Apply Now</div>
                <img src={right} alt="arrow" width={16} height={16} />
              </div>
            </a>
          ))}
        </section>

        <div className="text-center text-lg font-semibold pt-8">
          Even if you don't find a suitable position, you can still send your
          resume to
        </div>
        <a
          href="mailto:hr@ewdtech.com"
          className="bg-16A085 m-auto mt-6 text-white h-full flex items-center wfc font-semibold px-12 py-4 text-center"
        >
          hr@ewdtech.com
        </a>
      </section>

      <CareersServices />
      <CareerForm desc="Lead Generation Marketing is like playing the chess, where the Queen rules making knights grumble with her tact. Let us revolutionize you and build strategic Lead Generation." />
      <Footer />
    </>
  );
}