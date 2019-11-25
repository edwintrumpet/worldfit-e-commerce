import React from 'react';
import { connect } from 'react-redux';
import { removeCart } from '../../actions';
import { Container, Row, Col } from 'react-bootstrap';
import calcTotalPrice from '../../utils/calcTotalPrice';
import './Cart.scss';

const Cart = (props) => {
  const { cart } = props;
  // eslint-disable-next-line global-require
  const numeral = require('numeral');
  const totalPrice = calcTotalPrice(cart);
  const handleRemoveCart = (e) => {
    const cartFilter = cart.filter((product) => product.id !== e.target.parentElement.dataset.id && product);
    props.removeCart(cartFilter);
  };
  return (
    <section className='cart'>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h1 className='heading'>Cart</h1>
            <ul className='cart__listProducts'>
              {
                cart.map((product, index) => (
                  <li data-id={product.id} key={product.id} className='cart__listProducts--product'>
                    <figure className='product-image'>
                      <img src={product.images[0]} alt='' />
                    </figure>
                    <div className='content'>
                      <h2 className='name'>{product.nameProduct}</h2>
                      <p className='price'>{numeral(product.maxPrice).format('$ 0,0[.]00')}</p>
                      <div className='size'>Talla: M</div>
                      <label className='quantity-label' htmlFor=''>Cantidad:</label>
                      <input className='quantity-value' type='number' name='' id='' defaultValue={cart.length} />
                    </div>
                    <button type='button' className='close-button' onClick={handleRemoveCart}>
                      <i className='icon-cross' />
                    </button>
                  </li>
                ))
              }
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <div className='cart__summary'>
              <h2 className='heading'>Resumen de la compra</h2>
              <ul className='cart__summary--list'>
                <li className='listItem'>
                  <h3 className='value'>Subtotal</h3>
                  <span className='price'>
                    $
                    {totalPrice}
                  </span>
                </li>
                <li className='listItem'>
                  <h3 className='value'>Impuestos</h3>
                  <span className='price'>$0</span>
                </li>
                <li className='listItem'>
                  <h3 className='value'>Total</h3>
                  <span className='price'>
                    $
                    {totalPrice}
                  </span>
                </li>
              </ul>
              <button className='btn' type='button'>Checkout</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

