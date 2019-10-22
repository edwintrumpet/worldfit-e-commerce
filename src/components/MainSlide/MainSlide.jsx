import React from 'react';
import {Container, Row, Col} from 'styled-bootstrap-grid';
import Swiper from 'react-id-swiper';
import {Box, Mierda} from './styles'

const MainSlide = ({children}) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
  return (
    <Box>
      {/* <Mierda /> */}
      <Swiper {...params}>
          {children}
      </Swiper>
    </Box>
  )
};

export default MainSlide
