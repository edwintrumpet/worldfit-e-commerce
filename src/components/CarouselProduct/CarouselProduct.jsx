import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './CarouselProduct.scss';

export default function CarouselProduct({ children }) {
  const params = {
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <section className='carouselProduct'>
      <Container>
        <Row>
          <Col xs={12} className='carouselProduct__head'>
            <h2 className='heading'>productos destacados</h2>
          </Col>
          <Col xs={12} className='carouselProduct__slide'>
            <Swiper {...params}>
              {children}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
