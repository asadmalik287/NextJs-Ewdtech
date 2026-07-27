import React from 'react';
const shopify = '/assets/images/shopify.svg';
const magento = '/assets/images/magento.svg';
const woocommerce = '/assets/images/woocommerce.svg';
const webflow = '/assets/images/webflow.svg';
export const TrusedByStories = () => {
  const arr = [
    {id: 1, image: shopify},
    {id: 2, image: magento},
    {id: 3, image: woocommerce},
    {id: 4, image: webflow},
  ];
  return (
    <React.Fragment>

      <section className="mainPaddingTop maindPadding">
        <h2 className="text-4xl bold-font text-center   m-auto text-center w-full">
          Trusted by Top Stores
        </h2>
        <div className="counter pt-12 justify-between flex flex-wrap">
          {arr.map (e => {
            return (
              <div
                key={e.id}
                className="counter-child animation__image__div flex items-center justify-center  bg-f2f2f2 p-7"
              >
                <img
                  src={e.image}
                  alt="..."
                  className="m-auto animation__image"
                />
              </div>
            );
          })}

        </div>
      </section>
    </React.Fragment>
  );
};
