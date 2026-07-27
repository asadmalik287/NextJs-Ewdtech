// pages/privacy-policy.js
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Hero } from "../components/contactuscomponents/Hero";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – EWDTech</title>
        <meta
          name="description"
          content="Read EWDTech's Privacy Policy to understand how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href="https://ewdtech.com/privacy-policy" />
      </Head>

      <Hero pageName="" title="Privacy Policy" desc="" hiddenDesc="hidden" />

      <section className="container m-auto pt-[80px] text-gray-700">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
        <p className="text-sm text-gray-500 mb-10">Last updated: February 2026</p>

        <p className="mb-6">
          EWDTech ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our
          website or use our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Information We Collect
        </h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Personal Information</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full Name</li>
          <li>Company Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Project details and messages</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Automatically Collected Information
        </h3>
        <p>
          We may collect IP address, browser type, device information, pages visited, and usage
          behavior through cookies and analytics tools.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to inquiries and provide services</li>
          <li>Improve website performance and experience</li>
          <li>Send updates if you opt in</li>
          <li>Analyze trends and user behavior</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Cookies</h2>
        <p>
          We use cookies to enhance functionality and analyze traffic. You may disable cookies in
          your browser, though some features may not work properly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your information, but no
          online transmission is completely secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Contact Us</h2>
        <p className="leading-relaxed">
          <strong>EWDTech</strong>
          <br />
          6210 Plantation Center Dr Suite 105, Raleigh, NC, 27616 USA
          <br />
          5th Floor Mezan Executive Tower, Liaquat Road, Faisalabad, Pakistan
          <br />
          Phone: +1 919-321-9995
        </p>
      </section>

      <br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}