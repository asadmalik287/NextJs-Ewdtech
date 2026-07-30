import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/Navbar";
import { Hero } from "../components/contactuscomponents/Hero";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";

import blogData from "./Logs.json";

const time = "/assets/images/time.png";
const calendar = "/assets/images/calendar.png";
const righticonwhite = "/assets/images/righticonwhite.png";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  };

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <>
    
      {/* SEO (App Router alternative) */}
      <Head>
        <link rel="canonical" href="https://ewdtech.com/blogs/" />
        <title>EWDTech Blog – Digital Marketing, SEO & Tech Insights</title>
        <meta name="description" content="Explore expert articles and insights on digital marketing, SEO strategies, web development,
UX/UI trends, and technology updates on the EWDTech blog." />
      </Head>

      <Navbar />

      <Hero
        pageName=""
        title="Our Blogs"
        desc=""
        hiddenDesc="hidden"
      />

      {/* BLOG GRID */}
      <div className="container m-auto pt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${slugify(blog.title)}`}
              className="block p-5 rounded-2xl mb-4 border border-[#D9DBE9] shadow hover:shadow-lg transition bg-white"
            >
              <Image
                src={blog.image}
                width={600}
                height={400}
                className="w-full rounded-[12px]"
                alt={blog.title}
              />

              <div className="pt-[24px] flex items-center gap-[24px]">
                <div className="flex items-center">
                  <Image src={calendar} width={16} height={16} alt="calendar" />
                  <span className="text-[12px] text-[#475467] pl-[12px]">
                    {blog.time}
                  </span>
                </div>

                <div className="flex items-center">
                  <Image src={time} width={16} height={16} alt="time" />
                  <span className="text-[12px] text-[#475467] pl-[12px]">
                    {blog.date}
                  </span>
                </div>
              </div>

              <h2 className="text-[#10171E] text-[24px] pt-[24px] font-[600]">
                {blog.title}
              </h2>

              <p className="text-[#475467] leading-[30px] pt-[16px]">
                {blog.shortContent}
              </p>

              <div className="bg-[#10171E] w-fit hover:bg-yellow-500 text-white rounded-lg mt-[16px] font-semibold py-3 px-6 flex items-center">
                Read More
                <Image
                  src={righticonwhite}
                  width={12}
                  height={12}
                  className="ml-2"
                  alt="arrow"
                />
              </div>
            </Link>
          ))}

        </div>
      </div>

      <FooterForm />
      <Footer />
    </>
  );
}