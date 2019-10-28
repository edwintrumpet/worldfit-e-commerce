import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './MainSlide.scss';

const MainSlide = ({ children }) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  const slide = document.querySelector('.callToAction');
  console.log(slide);
  return (
    <section className='boxSlide'>
      <Swiper {...params}>
        {children}
      </Swiper>
    </section>
  );
};

export default MainSlide;

