import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroBanner.scss';
import imgTemp from '../../assets/static/temp/hero-banner.jpg';

export default function HeroBanner() {
  return (
    <section className="heroBanner" style={{backgroundImage: `url(${imgTemp})`}}>
      <Container>
        <Row>
          <Col className='heroBanner__content'>
            <h4 className="heading">
              tips y noticias
            </h4>
            <a href="" className='btn'>Ver más</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
