import React, { useState, useEffect } from 'react';

const HeroSlider = ({ data, activeClass, descClass, imgClass }) => {
  const [currentSlider, setCurrentSlider] = useState(1);

  let number = data.length;

  useEffect(() => {
    const autoSlider = setInterval(() => {
      setCurrentSlider(currentSlider === number ? 1 : currentSlider + 1);
    }, 8000);
    return () => clearInterval(autoSlider);
  }, [currentSlider, number]);

  return (
    <section className='w-full h-full'>
      {data?.map((data, index) => {
        const show = data?.id === currentSlider;
        return (
          <React.Fragment key={index}>
            {show && (
              <div className='w-full h-[20vh] md:h-[50vh] relative'>
                <img
                  src={data?.image}
                  alt={data?.alt}
                  className='w-full h-[20vh] md:h-[50vh] object-cover '
                />
                <p className='z-50  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-2xl backdrop-blur-md hover:backdrop-blur-lg bg-yellow/100 "ease-out duration-300 px-2 py-1 uppercase font-bold text-white text-center shadow-md rounded'>
                  {data?.desc}
                </p>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default HeroSlider;
