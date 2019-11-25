import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './CarouselProduct.scss';

export default function CarouselProduct({ children }) {
  const [swiper, useSwiper] = useState(null);
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
  useEffect(() => {
    let timeout ;
    if (swiper !== null) {
      timeout = setTimeout(() => swiper.update(), 500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [swiper]);
  return (
    <section className='carouselProduct'>
      <Container>
        <Row>
          <Col xs={12} className='carouselProduct__head'>
            <h2 className='heading'>productos destacados</h2>
          </Col>
          <Col xs={12} className='carouselProduct__slide'>
            <Swiper {...params} getSwiper={useSwiper}>
              {children}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
