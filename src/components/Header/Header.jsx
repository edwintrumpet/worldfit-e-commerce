import React from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu/Menu';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.scss';
import logo from '../../assets/styles/static/logo.png';
import calcTotalPrice from '../../utils/calcTotalPrice';

const Header = ({ cart }) => {
  const totalPrice = calcTotalPrice(cart);
  const productos = cart.length;
  const message = 'Por compras superiores a $300.000 COP obtienes envío gratis';
  return (
    <>
      <header className='header'>
        <Container>
          <Row className='header__topBarLeft'>
            <Col md={6} >
              <ul className='header__topBarLeft--social'>
                <li className='social-item'>
                  <a
                    href='https://www.facebook.com/worldfitcolombia1/'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='icon-facebook' />
                    <span className='content'>Facebook</span>
                  </a>
                </li>
                <li className='social-item'>
                  <a
                    href='https://www.instagram.com/worldfitcol/'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='icon-instagram' />
                    <span className='content'>Instagram</span>
                  </a>
                </li>
                <li className='social-item'>
                  <a
                    href='https://www.instagram.com/worldfitcol/'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <i className='icon-help' />
                    <span className='content'>Faq</span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} className='d-none'>
              <ul className='header__topBarLeft--user'>
                <li className='user-item'>
                  <a href="https://www.facebook.com/worldfitcolombia1/">
                    <i class="icon-user" />
                    <span className="content">Iniciar sesión</span>
                  </a>
                </li>
                <li className='user-item'>
                  <i class="icon-cart" />
                  <span className="content">
                    {`${productos} ${productos === 1 ? 'producto' : 'productos'} - $${totalPrice}`}
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className='header__topBarRight'>
            <Col>
              <div className='header__topBarLeft--social'>
                <div className="left-icons">
                  <button id='movilMenu' className="hamburger" type="button">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                  <a href="#">
                    <i className='icon-user'></i>
                  </a>
                </div>
                <div className="logo">
                  <img className='main-logo' src={logo} alt='worldfit' />
                  <img className='main-logo' src={logo} alt='worldfit' />
                </div>
                <div className="right-icons">
                  <Menu />
                  <a href="#">
                    <i className='icon-search'></i>
                  </a>
                  <a href="#">
                      <i class="icon-cart" />
                      <span className="content">
                        {`${productos}`}
                      </span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className='promo'>{message}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
