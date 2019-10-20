import React from 'react';
import { connect } from 'react-redux';
import { Box, Div, Ul, Li, Img, Span, Logo } from './styles';
import Menu from '../Menu/Menu';
import shopping from '../../assets/shopping.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import logo from '../../assets/logo.png';
import calcTotalPrice from '../../utils/calcTotalPrice';

const Header = ({ cart }) => {
  const totalPrice = calcTotalPrice(cart);
  const productos = cart.length;
  const message = 'Por compras superiores a $300.000 COP obtienes envío gratis';

  return (
    <Box>
      <Div>
        <span>{message}</span>
        <Ul>
          <Li>Iniciar sesión</Li>
          <Li><Img src={facebook} alt='facebook' /></Li>
          <Li><Img src={instagram} alt='instagram' /></Li>
          <Li>
            <Img src={shopping} alt='carrito de compras' />
            <Span>{`${productos} ${productos === 1 ? 'producto' : 'productos'} - $${totalPrice}`}</Span>
          </Li>
        </Ul>
      </Div>
      <Div>
        <Logo src={logo} alt='worldfit' />
        <Menu />
      </Div>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
