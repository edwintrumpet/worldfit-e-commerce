import React from 'react';
import { Container, Row } from 'react-bootstrap';
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

