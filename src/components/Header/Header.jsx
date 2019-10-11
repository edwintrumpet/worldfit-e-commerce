import React from 'react';
import { Box, Div, Ul, Li, Img, Span, Logo } from './styles';
import Menu from '../Menu/Menu';
import cart from '../../assets/shoping.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import logo from '../../assets/logo.png';
import useCosto from '../../hooks/useCosto';

const Header = ({ carrito }) => {
  const costo = useCosto(carrito);
  const productos = carrito.length;
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
            <Img src={cart} alt='carrito de compras' />
            <Span>{`${productos} ${productos === 1 ? 'producto' : 'productos'} - $${costo}`}</Span>
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

export default Header;
