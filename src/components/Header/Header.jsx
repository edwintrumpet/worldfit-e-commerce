import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import Search from '../Menu/Search';
import './Header.scss';
import mainLogo from '../../assets/static/main-logo.png';
import secondaryLogo from '../../assets/static/secondary-logo.png';
import calcTotalPrice from '../../utils/calcTotalPrice';

const Header = ({ cart, userActive, user }) => {

  const [menu, setMenu] = useState({
    menuActive: false,
    searchActive: false,
  });

  const totalPrice = calcTotalPrice(cart);
  const productos = cart.length;
  const message = 'Por compras superiores a $300.000 COP obtienes envío gratis';
  const toggleMenu = (e) => {
    setMenu({
      ...menu,
      menuActive: !menu.menuActive,
    });
    document.body.classList.toggle('overlay');
  };
  return (
    <>
      <header className='header'>
        <Container>
          <Row className='header__topBarLeft'>
            <Col sm={3}>
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
            <Col sm={9} className='d-none d-sm-block'>
              <ul className='header__topBarLeft--user'>
                <li className='user-item'>
                  { userActive !== false ?
                    (
                      <>
                        <i className='icon-user' />
                        <span className='content'>{`Hola, ${user.name}`}</span>
                      </>
                    ) :
                    (
                      <Link to='/login'>
                        <i className='icon-user' />
                        <span className='content'>Iniciar sesión</span>
                      </Link>
                    )}
                </li>
                <li className='user-item'>
                  <i className='icon-cart' />
                  <span className='content'>
                    {`${productos} ${productos === 1 ? 'producto' : 'productos'} - $${totalPrice}`}
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className='header__topBarRight'>
            <Col>
              <div className='header__topBarRight--social'>
                <div className='left-icons'>
                  <button
                    id='movilMenu'
                    className={`hamburger hamburger--spin${menu.menuActive ? ' is-active' : ''}`}
                    type='button'
                    onClick={(e) => toggleMenu(e)}
                  >
                    <span className='hamburger-box'>
                      <span className='hamburger-inner' />
                    </span>
                  </button>
                  <a href='#' className='user-link'>
                    <i className='icon-user' />
                  </a>
                </div>
                <div className='logo'>
                  <Link to='/'>
                    <img className='main-logo' src={mainLogo} alt='worldfit' />
                  </Link>
                  <Link to='/'>
                    <img className='secondary-logo' src={secondaryLogo} alt='worldfit' />
                  </Link>
                </div>
                <div className='right-icons'>
                  <Menu active={menu.menuActive} />
                  <Search active={menu.searchActive} />
                  <button className='search-link'>
                    <i className='icon-search' />
                  </button>
                  <a href='#' className='cart-link'>
                    <i className='icon-cart' />
                    <span className='content'>
                      {`${productos}`}
                    </span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className='callToAction'>
        <Container>
          <Row>
            <Col>
              <p className='callToAction__message'>
                {message}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    userActive: state.userActive,
    user: state.users[state.userActive],
  };
};

export default connect(mapStateToProps, null)(Header);
