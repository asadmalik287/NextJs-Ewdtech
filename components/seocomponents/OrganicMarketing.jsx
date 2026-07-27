import React from 'react';
const seo = '/assets/images/organic-marketing/socialAnalysis.svg';
const contentCreation = '/assets/images/organic-marketing/blogPost.svg';
const videos = '/assets/images/organic-marketing/videos.svg';
const audit = '/assets/images/organic-marketing/audit.svg';
const detailedAudit = '/assets/images/organic-marketing/guestPost.svg';
const businessProfile = '/assets/images/organic-marketing/profileList.svg';
const keyword = '/assets/images/organic-marketing/keyword.svg';
const communityManagement = '/assets/images/organic-marketing/communityManagement.svg';
export const OrganicMarketing = () => {
  const arr = [
    {
      id: 1,
      image: seo,
      title: 'SEO Competitor Analysis',
      desc: 'At EWD, we use various proven techniques and tactics to optimize your website for search engines. We conduct an time-to-time in-depth competitor analysis  in order to identify  new prospects.',
    },
    {
      id: 2,
      image: contentCreation,
      title: 'Content Creation & Marketing',
      desc: 'We offer High-quality, SEO-optimized content (articles, blogs, press releases, social media posts & guest posts) that establishes Google rankings. Further, It aids us in enhancing engagement organically.',
    },
    {
      id: 3,
      image: videos,
      title: 'Video/Infographics',
      desc: 'Let us divulge ideas into an imaginative outlook and increase turnover with engaging twists! Our Designers and Video Editors craft visionary infographics/videos to enrich the visualization of business. ',
    },
    {
      id: 4,
      image: audit,
      title: 'Website Audit & SEO Assessment',
      desc: "We hold a critical analysis from content and designers' perspectives to improve branding infrastructure while strengthening the brand array. Get a Free Website Audit Report in no time. ",
    },
    {
      id: 5,
      image: detailedAudit,
      title: 'Detailed Back-link Audit',
      desc: 'We scrutinize all links generated for a website to specify their value and withdraw spam links. We assure you of quality in Local optimization to sweeten the engagement. Get a Free Back-Link Audit in a flash.',
    },
    {
      id: 6,
      image: businessProfile,
      title: 'Business Profile Listings',
      desc: 'We target influential, industry-based directories to gain traction in Local SEO. From reaching out to the professionals to catch their interest, we get in touch with potential business profiles for long-term traction.',
    },
    {
      id: 7,
      image: seo,
      title: 'Extensive Keyword Research',
      desc: 'The most vital pillar of SEO is Keyword Research. We carry out extensive, and focused keyword research emphasizing "conversion" that brings leads. ',
    },
    {
      id: 8,
      image: communityManagement,
      title: 'Link-building Services',
      desc: 'We create linkages on authoritative sites that eventually link back to your website, leveraging the credibility and enhancing SEO. ',
    },
    {
      id: 9,
      image: detailedAudit,
      title: 'Community Management',
      desc: 'We help supervise the portrayal of your brand, devising a buzz on relevant platforms by effective social media marketing and keeping the target audience enthralled.',
    },
  ];
  return (
    <React.Fragment>
      <section className="bg-white   maindPadding py-12">
        <div className="text-4xl bold-font text-center mt-8">Masters Of Organic Marketing</div>
        <div className="lg:w-8/12 w-full text-lg m-auto text-center pt-3">
        Our devoted personnel, innovative designers, and proficient developers can build from scratch to revolutionize your organic approaches to an integrated, multichannel marketing strategy. Whether your business is just a bud or needs maintenance while setting up your local optimization or holistic expansion, EWDTech is ready to dive in and help. 
        </div>
        <div className="flex flex-wrap pt-12">
          {arr.map (e => {
            return (
              <div key={e.id} className="col__services p-3">

                <div className="bg-F5F7FA h-full py-5 px-6">
                  <div className="text-center">
                    <img src={e.image} alt="..." className="m-auto" />
                    <div className="text-lg font-black bold-font pt-4">
                      {e.title}
                    </div>
                    <div className="md:w-10/12 pt-4  m-auto w-full sm:w-full">
                      {e.desc}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </React.Fragment>
  );
};
