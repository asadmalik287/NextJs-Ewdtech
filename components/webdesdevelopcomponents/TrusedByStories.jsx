import React from 'react';
const figma = '/assets/images/webdesign-services/figma-logo 1.svg';
const sketch = '/assets/images/webdesign-services/Sketch-logo-light 1.svg';
const xd = '/assets/images/webdesign-services/xd 1.svg';
const adobe = '/assets/images/webdesign-services/illustrator 1.svg';
export const TrusedByStories = () => {
  const arr = [
    { id: 1, image: figma },
    { id: 2, image: sketch },
    { id: 3, image: xd },
    { id: 4, image: adobe },
  ];
  return (
    <React.Fragment>

      <section className="mainPaddingTop maindPadding">
        <h2 className="text-4xl bold-font text-center   m-auto text-center w-full">
          Tools we Use to Design
        </h2>
        <div className="counter pt-12 justify-between flex flex-wrap">
          {arr.map(e => {
            return (
              <div
                key={e.id}
                className="counter-child animation__image__div flex items-center justify-center  bg-f2f2f2 p-7"
              >
                <img src={e.image} alt="..." className="m-auto animation__image" />
              </div>
            );
          })}

        </div>
      </section>
    </React.Fragment>
  );
};
