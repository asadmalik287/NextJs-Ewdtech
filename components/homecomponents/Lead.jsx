import React from 'react';
import CountUp from 'react-countup';

export const Lead = () => {
  return (
    <section className="mainMarginTop maindPadding">
      <section className="lgPaddingLeftRight counter justify-between flex flex-wrap">

        <div className="counter-child bg-f2f2f2 p-7">
          <p className="text-4xl font-black bold-font text-center">
            <CountUp end={6271747} duration={5} separator="," />
          </p>
          <p className="opacity-70 text-center pt-3">Leads Generated</p>
        </div>

        <div className="counter-child bg-f2f2f2 p-7">
          <p className="text-4xl font-black bold-font text-center">
            <CountUp end={4191222} duration={5} separator="," />
          </p>
          <p className="opacity-70 text-center pt-3">Calls Generated</p>
        </div>

        <div className="counter-child bg-f2f2f2 p-7">
          <p className="text-4xl font-black bold-font text-center">
            <CountUp end={11550403} duration={5} separator="," />
          </p>
          <p className="opacity-70 text-center pt-3">eCommerce Transactions</p>
        </div>

        <div className="counter-child bg-f2f2f2 p-7">
          <p className="text-4xl font-black bold-font text-center">
            <CountUp end={579} duration={5} />
          </p>
          <p className="opacity-70 text-center pt-3">Client Testimonials</p>
        </div>

      </section>
    </section>
  );
};