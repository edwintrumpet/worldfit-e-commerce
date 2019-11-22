import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { loadProducts } from '../../actions';
import 'swiper/swiper.scss';
import './SingleProduct.scss';
import { HOST } from '../../../config';

const SingleProduct = (props) => {
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
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  };
  const [product, setProduct] = useState({
    id: '5dd7356006798308475f5016',
    // images: props.products[0].images,
  });
  useEffect(() => {
    fetch(`${HOST}/products/?id=${product.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((response) => {
        props.loadProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, [product]);
  console.log(product);
  return (
    <section className="singleProduct">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="singleProduct__gallery">
              <div className="singleProduct__gallery--heading">
                <div className="tags">Hombre, mujer </div>
                <h1 className="heading">Nombre del producto</h1>
                <div className="prices">
                  50.000 - <span className='discount'>100.000</span>
                </div>
              </div>
              <div className="singleProduct__gallery--slide">
                <Swiper {...params}>
                  <div className="swiper-slide">
                    {/* {props.products[0].images.map((image) => console.log(image))} */}
                  </div>
                  <div className="swiper-slide">2</div>
                  <div className="swiper-slide">3</div>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            Detalle
          </Col>
        </Row>  
      </Container>
    </section>
     
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);