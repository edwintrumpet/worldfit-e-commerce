import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { loadProducts } from '../../actions';
import 'swiper/swiper.scss';
import './SingleProduct.scss';
import { HOST } from '../../../config';

const SingleProduct = (props) => {
  const numeral = require('numeral');
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
  const { products } = props;
  const [product, setProduct] = useState({
    id: '5dd80f069496dc52c91d9867',
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
    console.log(products);
  return (
    <section className="singleProduct">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className="singleProduct__gallery">
              <div className="singleProduct__gallery--heading">
                <div className="tags">Hombre, mujer </div>
                <h1 className="heading">
                  {products.map((product) => product.nameProduct)}
                </h1>
                <div className="prices">
                  { products.map((product) => product.minPrice ? (
                    <>
                      {numeral(product.minPrice).format('$ 0,0[.]00')} - <span className='discount'>{numeral(product.maxPrice).format('$ 0,0[.]00')}</span>
                    </>
                  ) : product.maxPrice)}
                </div>
              </div>
              <div className="singleProduct__gallery--slide">
                <ul className="gallery">
                  {products.map((product) => product.images.map((img) => <li className="img-item"><img src={img} /></li>))}
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="singleProduct__description">
              <div className="singleProduct__description--heading">
                  <div className="tags">Hombre, mujer </div>
                  <h1 className="heading">
                    {products.map((product) => product.nameProduct)}
                  </h1>
                  <div className="prices">
                    { products.map((product) => product.minPrice ? (
                      <>
                        {numeral(product.minPrice).format('$ 0,0[.]00')} - <span className='discount'>{numeral(product.maxPrice).format('$ 0,0[.]00')}</span>
                      </>
                    ) : product.maxPrice)}
                  </div>
              </div>
              <div className="singleProduct__description--content">
                  <p className="description">
                    Top sin arco con copas triangulartes y con buen cubrimiento del busto, al interior están forradas con tela suave para dar mayor confort y evitar marcas. Suave elástico ancho en la base que se ajusta perfectamente al cuerpo brindando gran sostenimiento y cuenta con cargaderas ajustables
                  </p>
              </div>
              <div className="singleProduct__description--actions">
                  <form action="">
                    <label htmlFor="">Cantidad</label>
                    <input type="number" name="" id="" placeholder="1" />
                    <label htmlFor="">Talla</label>
                    <select name="" id="">
                      <option value="s">s</option>
                      <option value="m">m</option>
                    </select>
                    <input type="submit" value="añadir al carrito"/>
                  </form>
              </div>
            </div>
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