// pages/terms.js
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Hero } from "../components/contactuscomponents/Hero";
import Link from "next/link";
export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions – EWDTech</title>
        <meta
          name="description"
          content="Read EWDTech's Terms & Conditions to understand the rules and guidelines governing the use of our website and services."
        />
        <link rel="canonical" href="https://ewdtech.com/terms-of-use/" />
      </Head>

      <Hero pageName="" title="Terms Of Use" desc="" hiddenDesc="hidden" />

      <section className="container mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Terms & Conditions
        </h2>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: February 2026
        </p>

        <p className="mb-6">
          By accessing or using the {""}
          <Link href="/">EWDTech</Link> website and services, you agree to be
          bound by these Terms & Conditions. If you do not agree, please
          discontinue use immediately.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Use of Website
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the website for lawful purposes only</li>
          <li>No unauthorized access or hacking attempts</li>
          <li>No malicious or harmful content</li>
          <li>Respect intellectual property rights</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Intellectual Property
        </h2>
        <p>
          All content including text, graphics, logos, designs, and code is the
          property of EWDTech and may not be reproduced without written
          permission.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          services & Payments
        </h2>
        <p>
          Services, pricing, and timelines are defined in written agreements or
          proposals. Late payments may result in service suspension.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Limitation of Liability
        </h2>
        <p>
          EWDTech shall not be liable for indirect, incidental, or consequential
          damages, including loss of data or revenue.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Third-Party Services
        </h2>
        <p>
          We may use or recommend third-party platforms. EWDTech is not
          responsible for their policies, performance, or availability.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Termination
        </h2>
        <p>
          We reserve the right to terminate or restrict access if these Terms
          are violated.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Contact Information
        </h2>
        <p>
          For questions regarding these Terms, contact us at:
          <br />
          <strong>+1 919-321-9995</strong>
        </p>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
