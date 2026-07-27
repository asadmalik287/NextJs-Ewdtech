import React from 'react';
const blogPost = '/assets/images/content-marketing/blogPost.svg';
const guestsposts = '/assets/images/content-marketing/guestPost.svg';
const pressReleases = '/assets/images/content-marketing/pressRelease.svg';
const infographics = '/assets/images/content-marketing/infoGraphics.svg';
const videos = '/assets/images/content-marketing/videos.svg';
const socialmediaPosts = '/assets/images/content-marketing/socialPosts.svg';
export const SeoContent = () => {
  const arr = [
    {
      id: 1,
      image: blogPost,
      title: 'Blog Post',
      desc: 'Well-written, SEO-optimized Quality Blog Posts That Bring Traffic and Improve Domain Authority.',
    },
    {
      id: 2,
      image: guestsposts,
      title: 'Guests Posts',
      desc: 'Detailed, High Quality Guest Posts That Bring Google Rankings and Strengthen Branding',
    },
    {
      id: 3,
      image: pressReleases,
      title: 'Press Releases',
      desc: 'Industry-Specific Press Releases That Promote Products/Service and Company Brands rank on the top',
    },
    {
      id: 4,
      image: infographics,
      title: 'Infographics',
      desc: 'Visually Stunning Infographics That Showcase Your Company Products and Services on the Top.',
    },
    {
      id: 5,
      image: videos,
      title: 'Videos',
      desc: 'Professionally Designed Videos That Go Viral, Create Interest and Generate Buzz through videography.',
    },
    {
      id: 6,
      image: socialmediaPosts,
      title: 'Social Media Posts',
      desc: 'Engaging Content that lets you connect with your Target Audience and facilitate their needs with effective Social Media Marketing.',
    },
  ];
  return (
    <React.Fragment>
      <section className="mainMarginTop maindPadding bg-031017 py-12">
        <div className="text-white text-4xl bold-font text-center ">
          Salient Features of
          Our Content Marketing Mix{' '}
        </div>
        <div className="flex flex-wrap pt-12">
          {arr.map(e => {
            return (
              <div key={e.id} className="col__services p-3">

                <div className="bg-white py-6 px-6 h-full">
                  <div className="text-center">
                    <img src={e.image} alt='...' className="m-auto" />
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
