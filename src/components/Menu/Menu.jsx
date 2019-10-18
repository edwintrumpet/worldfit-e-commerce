import React, { useState } from 'react';
import { Ul, Li, Img, SmallMenu, Bar, Movil, ImgMovil, MenuMovil, Exit, Line, Cover } from './styles';
import search from '../../assets/search.svg';
import shopping from '../../assets/shopping.svg';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
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
      <Movil>
        <ImgMovil src={search} alt='búsqueda' />
        <ImgMovil src={shopping} alt='carrito' />
        <SmallMenu onClick={() => setShowMenu(true)}>
          <Bar />
          <Bar />
          <Bar />
        </SmallMenu>
      </Movil>
      {showMenu && (
        <>
          <Cover onClick={() => setShowMenu(false)} />
          <MenuMovil>
            <Li>inicio</Li>
            <Li>hombre</Li>
            <Li>mujer</Li>
            <Li>¿necesitas ayuda?</Li>
            <Li>tips y nutrición</Li>
            <Li>¿quienes somos?</Li>
            <Li>contáctanos</Li>
            <Exit onClick={() => setShowMenu(false)}>
              <Line />
              <Line />
            </Exit>
          </MenuMovil>
        </>
      )}
    </>
  );
};

export default Menu;
