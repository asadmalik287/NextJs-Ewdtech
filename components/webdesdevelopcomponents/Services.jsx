import React from 'react';
const moodboards = '/assets/images/webdesign-services/moodBoard.svg';
const siteArchi = '/assets/images/webdesign-services/site.svg';
const wireframes = '/assets/images/webdesign-services/wireframe.svg';
const visual = '/assets/images/webdesign-services/visual.svg';
const userInterface = '/assets/images/webdesign-services/ui.svg';
const userExperience = '/assets/images/webdesign-services/ux.svg';

export const Services = () => {
  const obj = [
    {
      id: 1,
      image: moodboards,
      title: 'Mockup',
      desc: 'We assure creative mockup UX/UI designs and includes some placeholder data. It helps us refine elements before final UX/UI Design.',
    },
    {
      id: 2,
      image: siteArchi,
      title: 'Site Architecture',
      desc: 'We design an attractive hierarchical structure for your website pages development, reflected through internal linking',
    },
    {
      id: 3,
      image: wireframes,
      title: 'Wireframes',
      desc: 'We produce three-dimensional interactive designs and layouts with functional UX designs',
    },
    {
      id: 4,
      image: visual,
      title: 'Visual Concepts',
      desc: 'We focus on aesthetics and related fabrics. Our Visual designs grasp the attention of customers making them stop and scroll.',
    },
    {
      id: 5,
      image: userInterface,
      title: 'User Interface',
      desc: 'We design easy-to-use and pleasing UX designs. The creative and smooth user interface grasps attention promptly.',
    },
    {
      id: 6,
      image: userExperience,
      title: 'User Experience',
      desc: 'Our Interactive UX Design and Agile UX design catches the attention of users. We help users relish the joy of smooth user experience.',
    },
  ];

  return (
    <section className="bg-F5F7FA mainMarginTop    maindPadding py-12">
      <h2 className="text-4xl bold-font text-center  m-auto text-center w-full text-center">
      We design high-end marketing websites for ambitious brands.
      </h2>
      <p className='opacity-70 pt-3 md:w-5/12 m-auto  mb-10 text-center'>
      We frame your views on a social space through your creativity and build a creative with intuitive UX design.
      </p>
      <div className="flex flex-wrap">
        {obj.map (e => {
          return (
            <div key={e.id} className="col__services p-3 text-center">
              <div className="bg-white  py-6 px-9 h-full text-center">
                <img src={e.image} alt="..." className="m-auto" />
                <div className="text-lg font-black bold-font pt-4">
                  {e.title}
                </div>
                <div className="md:w-10/12 pt-4 m-auto w-full sm:w-full">
                  {e.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
