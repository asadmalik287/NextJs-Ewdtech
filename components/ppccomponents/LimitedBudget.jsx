import React from 'react';
const onGoing = '/assets/images/ppc-management/payPerClick.svg';
const audit = '/assets/images/ppc-management/audit.svg';
const timeSetup = '/assets/images/ppc-management/ppcSetup.svg';
const ppcConsulting
  = '/assets/images/ppc-management/ppcConsultant.svg';
const ppcPurePerformance
  = '/assets/images/ppc-management/performance.svg';
export const LimitedBudget = () => {
  const obj = [
    {
      id: 1,
      image: onGoing,
      title: 'Ongoing PPC Management',
      desc: 'Didn’t go into business to be a PPC expert? Let us do it for you',
    },
    {
      id: 2,
      image: audit,
      title: 'One-Time PPC Audit',
      desc: 'Don’t waste more time and money. Let’s show you exactly what to test',
    },
    {
      id: 3,
      image: timeSetup,
      title: 'One-Time PPC Setup',
      desc: 'We build the PPC engine so you can avoid costly mistakes from the begning',
    },
    {
      id: 4,
      image: ppcConsulting,
      title: 'Ongoing PPC Consulting',
      desc: 'You do the work but we show you how to get the most out of your efforts',
    },
    {
      id: 5,
      image: ppcPurePerformance,
      title: 'Pure PPC Performance',
      desc: 'A stronger revenue sharing partnership that lets us invest in your growth',
    },
  ];

  return (
    <React.Fragment>
      <section className=" maindPadding bg-F5F7FA">
        <section className="lgPaddingLeftRight py-12">
          <h2 className=" text-4xl md:w-8/12 m-auto bold-font text-center mt-8">
            Got a Limited Marketing Budget Right Now? We will Help You Increase Sales, Leads & Traffic For Your Business
          </h2>
          <div className="flex flex-wrap justify-center mt-10">
            {obj.map(e => {
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
      </section>
    </React.Fragment>
  );
};
