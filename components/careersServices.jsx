import React from 'react';
const drive = '/assets/images/webdesign-services/drive.svg';
const increase
    = '/assets/images/webdesign-services/increase-conversion.svg';
const buildbetter
    = '/assets/images/webdesign-services/build-better-customers.svg';
const makeecommerce
    = '/assets/images/buddy.svg';

export const CareersServices = () => {
    const obj = [
        {
            id: 1,
            image: drive,
            title: 'Space to fulfill your goals',
            desc: 'Every quarter, we have regular 1-on-1 sessions with our founders to discuss their career and personal development. Because we are here ',
        },
        {
            id: 2,
            image: increase,
            title: 'Choose your own career path',
            desc: 'You’re in the driver’s seat here. And you can turn your career in the direction that is right for you. We always encourages employees to expand their horizons and try new things.',
        },
        {
            id: 3,
            image: buildbetter,
            title: 'Funding for your development',
            desc: 'All of us at EWD Tech are always hungry to learn new things. That’s why a chunk of our annual budget goes towards training and education for all staff to develop their skills and expertise.',
        },
        {
            id: 4,
            image: makeecommerce,
            title: 'A buddy for new starters',
            desc: 'Starting a new job in a new area can be tough. That’s why we have a buddy program where a team member will show you the ropes, help you get settled in the EWD Tech',
        },
    ];

    return (
        <section className="bg-black mainMarginTop    maindPadding py-12">
            <h2 className="text-4xl bold-font text-center text-white  m-auto text-center w-full text-center">
                Start Your Digital Engine
            </h2>
            <p className=" text-white pt-3 md:w-5/12 m-auto mb-10 text-center">
                The foundation of your digital marketing strategy is your website. That’s why it’s absolutely essential for your site to be an engine that is built for your business goals. We help make sure your site will
            </p>
            <div className="flex flex-wrap">
                {obj.map(e => {
                    return (
                        <div key={e.id} className="social-services p-3">
                            <div className="bg-white  py-6 px-9 h-full text-center">
                                <img src={e.image} alt="..." className="m-auto" />
                                <div className="text-2xl font-black bold-font pt-4">
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
