import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { loadProducts } from '../../actions';
import 'swiper/swiper.scss';
import './SingleProduct.scss';
import { HOST } from '../../../config';

const SingleProduct = (props) => {
  const numeral = require('numeral');
  const { products } = props;
  const [product, setProduct] = useState({
    id: '5dd7356006798308475f5016',
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
  return (
    <section className='singleProduct'>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className='singleProduct__gallery'>
              <div className='singleProduct__gallery--heading'>
                <div className='tags'>Hombre, mujer </div>
                <h1 className='heading'>
                  {products.map((product) => product.nameProduct)}
                </h1>
                <div className='prices'>
                  { products.map((product) => (product.minPrice ? (
                    <>
                      {numeral(product.minPrice).format('$ 0,0[.]00')}
                      {' '}
                      -
                      {' '}
                      <span className='discount'>{numeral(product.maxPrice).format('$ 0,0[.]00')}</span>
                    </>
                  ) : numeral(product.maxPrice).format('$ 0,0[.]00')))}
                </div>
              </div>
              <div className='singleProduct__gallery--slide'>
                <ul className='gallery'>
                  {products.map((product) => product.images.map((img, index) => <li key={index} className='img-item'><img src={img} /></li>))}
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className='singleProduct__description'>
              <div className='singleProduct__description--heading'>
                <div className='tags'>Hombre, mujer </div>
                <h1 className='heading'>
                  {products.map((product) => product.nameProduct)}
                </h1>
                <div className='prices'>
                  { products.map((product) => (product.minPrice ? (
                    <>
                      {numeral(product.minPrice).format('$ 0,0[.]00')}
                      {' '}
                      -
                      {' '}
                      <span className='discount'>{numeral(product.maxPrice).format('$ 0,0[.]00')}</span>
                    </>
                  ) : numeral(product.maxPrice).format('$ 0,0[.]00')))}
                </div>
              </div>
              <div className='singleProduct__description--content'>
                <p className='description'>
                  Top sin arco con copas triangulartes y con buen cubrimiento del busto, al interior están forradas con tela suave para dar mayor confort y evitar marcas. Suave elástico ancho en la base que se ajusta perfectamente al cuerpo brindando gran sostenimiento y cuenta con cargaderas ajustables
                </p>
              </div>
              <div className='singleProduct__description--actions'>
                <form action=''>
                  <label htmlFor='quantity'>Cantidad</label>
                  <input type='number' name='quantity' id='quantity' placeholder='1' />
                  <label htmlFor='size'>Talla</label>
                  <select name='size' id='size'>
                    <option value='s'>S</option>
                    <option value='m'>M</option>
                  </select>
                  <input type='submit' value='añadir al carrito' />
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
