import React from 'react';
import { Ul, Li, Img } from './styles';
import search from '../../assets/search.svg';

const Menu = () => (
  <Ul>
    <Li>inicio</Li>
    <Li>hombre</Li>
    <Li>mujer</Li>
    <Li>¿necesitas ayuda?</Li>
    <Li>tips y nutrición</Li>
    <Li>¿quienes somos?</Li>
    <Li>contáctanos</Li>
    <Li><Img src={search} alt='búsqueda' /></Li>
  </Ul>
);

export default Menu;
