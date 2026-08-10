import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../../components/Navbar";
import { Hero } from "../../components/contactuscomponents/Hero";
import { FooterForm } from "../../components/FooterForm";
import { Footer } from "../../components/Footer";

import blogData from "../Logs.json";

const time = "/assets/images/time.png";
const calendar = "/assets/images/calendar.png";
const righticonwhite = "/assets/images/righticonwhite.png";

// ✅ Slugify - same function
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

// ✅ Ab yeh server par chalta hai - direct URL bhi kaam karega
export async function getStaticPaths() {
  const paths = blogData.map((item) => ({
    params: { slug: slugify(item.title) },
  }));

  return {
    paths,
    fallback: false, // unknown slug = 404
  };
}

export async function getStaticProps({ params }) {
  const blog = blogData.find((item) => slugify(item.title) === params.slug);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: { blog },
  };
}

// ✅ Ab props se directly blog milta hai - useEffect/useState nahi chahiye
export default function BlogDetail({ blog }) {
  const slug = slugify(blog.title);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.shortContent} />
        <link rel="canonical" href={`https://ewdtech.com/blog/${slug}/`} />
      </Head>

      <Navbar />

      <Hero pageName="" title="Blog Details" desc="" hiddenDesc="hidden" as="p" />

      <div className="container m-auto pt-[80px] px-5">
        <div className="md:flex gap-[24px]">
          {/* LEFT */}
          <div className="md:w-8/12">
            <Image
              src={blog.image}
              width={1200}
              height={700}
              className="rounded-[12px] w-full"
              alt={blog.title}
            />

            <div className="pt-[24px]">
              <div className="flex items-center mb-[16px]">
                <Image src={calendar} width={16} height={16} alt="calendar" />
                <span className="text-[12px] text-[#475467] pl-[12px]">
                  {blog.date}
                </span>
              </div>

              <h1 className="text-[#10171E] text-[32px] font-[700]">
                {blog.title}
              </h1>

              <div
                className="prose max-w-none longdesc md:pr-5"
                dangerouslySetInnerHTML={{ __html: blog.longContent }}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-4/12">
            <div className="bg-[#F8F8F8] p-4 rounded-[12px]">
              <h3 className="text-[#10171E] text-[20px] font-[600]">
                Recent Posts
              </h3>

              {blogData.slice(0, 4).map((item, index) => (
                <Link
                  key={index}
                  href={`/blog/${slugify(item.title)}`}
                  className="block rounded-2xl transition"
                >
                  <div className="mt-[24px]">
                    <Image
                      src={item.image}
                      width={500}
                      height={300}
                      className="w-full rounded-[8px]"
                      alt={item.title}
                    />

                    <div className="p-3">
                      <div className="flex items-center">
                        <Image
                          src={calendar}
                          width={16}
                          height={16}
                          className="w-4"
                          alt="calendar"
                        />
                        <span className="text-[12px] text-[#475467] pl-[12px]">
                          {item.date}
                        </span>
                      </div>

                      <h2 className="text-[#10171E] text-[18px] pt-[16px] font-[600]">
                        {item.title}
                      </h2>

                      <p className="text-[#475467] leading-[28px] pt-[10px]">
                        {item.shortContent}
                      </p>

                      <div className="bg-[#10171E] w-fit hover:bg-yellow-500 text-white rounded-lg mt-[12px] font-semibold py-2 px-4 flex items-center">
                        Read More
                        <Image
                          alt="arrow"
                          className="w-3 ml-2"
                          src={righticonwhite}
                          width={12}
                          height={12}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterForm />
      <Footer />
    </>
  );
}
