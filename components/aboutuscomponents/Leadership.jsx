import React from 'react';
const team1 = '/assets/images/team/waseem.webp';
const team2 = '/assets/images/team/sarfaraz.webp';
const team3 = '/assets/images/team/asad.webp';
const team4 = '/assets/images/team/noman-deisgner.webp';
const team5 = '/assets/images/team/numan.webp';
const team6 = '/assets/images/team/muneeb.webp';
const team7 = '/assets/images/team/hammad.webp';
const team8 = '/assets/images/team/tahir.webp';
export const Leadership = () => {
  const arrTeam = [
    {
      id: 1,
      image: team1,
      title: 'Muhammad Waseem',
      desc: 'PHP/Laravel Developer',
    },
    {
      id: 2,
      image: team2,
      title: 'Muhammad Sarfraz',
      desc: 'PHP/Laravel Developer',
    },
    {
      id: 3,
      image: team3,
      title: 'M. Asad Ullah',
      desc: 'Frontend Developer',
    },
    {
      id: 4,
      image: team4,
      title: 'Numan Ali',
      desc: 'Graphic Designer',
    },
    {
      id: 5,
      image: team5,
      title: 'Noman Ali Aslam',
      desc: 'Marketer',
    },
    {
      id: 6,
      image: team6,
      title: 'Muneeb Altaf',
      desc: 'Expert Researcher ',
    },
    {
      id: 7,
      image: team7,
      title: 'M. Hammad Ahmad ',
      desc: 'Business Developement Manager',
    },
    {
      id: 8,
      image: team8,
      title: 'Muhammad Tahir Ali',
      desc: 'Angular JS Developer ',
    },
  ];
  return (
    <React.Fragment>
      <section className="mainMarginTop maindPadding">
        <h2 className="text-4xl bold-font  font-black">
          Leadership
        </h2>
        <p className="md:w-4/12 leading-6 opacity-70 w-full sm:w-full pt-5">
        We serve with dignity, shoot for the moon and dive to explore that makes us shining Experts transforming industries.
        </p>
        <div className="flex flex-wrap pt-6 justify-between">
          {arrTeam.map (e => {
            return (
              <div key={e.id} className="team-col mb-8">
              <figure className='photo'>
              <img src={e.image} alt="..."  className="w-full filter_img" />
              </figure>
                <h3 className="text-2xl bold-font  font-black pt-4">
                  {e.title}
                </h3>
                {/* <p className="opacity-70 pt-2">{e.desc}</p> */}
              </div>
            );
          })}

        </div>
      </section>
    </React.Fragment>
  );
};
