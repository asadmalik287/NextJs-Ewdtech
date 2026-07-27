import React from 'react';
import {Uiux} from './Uiux';
import {WebApp} from './WebApp';
import {MobileApp} from './MobileApp';
import {Funnels} from './Funnels';
import {Ecommerce} from './Ecommerce';
export const OurWork = () => {
  const [openTab, setOpenTab] = React.useState (1);
  return (
    <React.Fragment>
      <div className="mainMarginTop maindPadding  ">
        <ul
          className="flex mb-0 justify-center list-none flex-wrap flex-row"
          role="tablist"
        >
          <li className="mr-2  last:mr-0 casesTabs text-center w-full mb-2 sm:w-auto md:w-auto md:mb-2">
            <a
              className={
                'px-9 py-4 tab-items block  font-normal ' +
                  (openTab === 1 ? 'active' : 'inactive')
              }
              onClick={e => {
                e.preventDefault ();
                setOpenTab (1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Web App
            </a>
          </li>
          <li className="mr-2  last:mr-0 casesTabs text-center w-full mb-2 sm:w-auto md:w-auto md:mb-2">
            <a
              className={
                'px-9 py-4 block tab-items ' +
                  (openTab === 2 ? 'active' : 'inactive')
              }
              onClick={e => {
                e.preventDefault ();
                setOpenTab (2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Mob Apps
            </a>
          </li>
          <li className="mr-2  last:mr-0 casesTabs text-center w-full mb-2 sm:w-auto md:w-auto md:mb-2">
            <a
              className={
                'px-9 py-4 block tab-items ' +
                  (openTab === 3 ? 'active' : 'inactive')
              }
              onClick={e => {
                e.preventDefault ();
                setOpenTab (3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              UIUX Designing
            </a>
          </li>
          <li className="mr-2  last:mr-0 casesTabs text-center w-full mb-2 sm:w-auto md:w-auto md:mb-2">
            <a
              className={
                'px-9 py-4 block tab-items ' +
                  (openTab === 4 ? 'active' : 'inactive')
              }
              onClick={e => {
                e.preventDefault ();
                setOpenTab (4);
              }}
              data-toggle="tab"
              href="#link4"
              role="tablist"
            >
              Funnel Design
            </a>
          </li>
          <li className="mr-2  last:mr-0 casesTabs text-center w-full mb-2 sm:w-auto md:w-auto md:mb-2">
            <a
              className={
                'px-9 py-4 block tab-items ' +
                  (openTab === 5 ? 'active' : 'inactive')
              }
              onClick={e => {
                e.preventDefault ();
                setOpenTab (5);
              }}
              data-toggle="tab"
              href="#link4"
              role="tablist"
            >
              E-commerce
            </a>
          </li>
        </ul>
        <div className="relative w-full mt-12">
          <div className="flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                <WebApp />
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                <MobileApp />
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                <Uiux />
              </div>
              <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                <Funnels />
              </div>
              <div className={openTab === 5 ? 'block' : 'hidden'} id="link5">
                <Ecommerce />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
