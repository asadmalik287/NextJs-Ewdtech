import React from 'react';
const rails = '/assets/images/webdesign-services/rails-logo 1.svg';
const php = '/assets/images/webdesign-services/php-logo 1.svg';
const graphql = '/assets/images/webdesign-services/graphql.svg';
const liquid
  = '/assets/images/webdesign-services/Shopify-liquid 1.svg';
const js_
  = '/assets/images/webdesign-services/javascript-vector-logo-yellow-png-transparent-javascript-vector-12 1.svg';
const nodejs
  = '/assets/images/webdesign-services/node-js-736399_1280 1.svg';
const mysql
  = '/assets/images/webdesign-services/kisspng-mysql-database-insert-table-mysql-png-logos-free-download-5c064d0cbd5129 1.svg';
const python
  = '/assets/images/webdesign-services/Python_logo_and_wordmark 1.svg';
export const TechnoExpertLogos = () => {
  const arr = [
    { id: 1, image: rails },
    { id: 2, image: php },
    { id: 3, image: graphql },
    { id: 4, image: liquid },
    { id: 1, image: js_ },
    { id: 2, image: nodejs },
    { id: 3, image: mysql },
    { id: 4, image: python },
  ];
  return (
    <React.Fragment>

      <section className="mainPaddingTop maindPadding">
        <h2 className="text-4xl bold-font text-center   m-auto text-center w-full">
          Technologies we are Expert With
        </h2>
        <div className="counter pt-12 justify-between flex flex-wrap">
          {arr.map(e => {
            return (
              <div
                key={e.id}
                className="counter-child flex items-center justify-center mb-7 bg-f2f2f2 p-7"
              >
                <img src={e.image} alt="..." className="m-auto" />
              </div>
            );
          })}

        </div>
      </section>
    </React.Fragment>
  );
};
