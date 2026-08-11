import Head from 'next/head';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import UIUXDesign from '@/components/servicescomponents/UIUXDesign/UIUXDesing';
import React from 'react'

function UIUXDesing() {
  return (
    <>
    <Head>
      <title>UI/UX Design Services | EWDTech</title>
      <meta
        name="description"
        content="EWDTech delivers UI/UX design services for web apps, mobile apps, and SaaS products — from user research and wireframing to pixel-perfect interface design."
      />
      <meta
        name="keywords"
        content="UI UX design services, UX design agency USA, mobile app UI UX design, SaaS product design, user experience design company"
      />
      <link rel="canonical" href="https://ewdtech.com/ui-ux-design/" />
    </Head>
    <Navbar />
    <UIUXDesign/>
    <Footer />
    </>
  )
}

export default UIUXDesing;