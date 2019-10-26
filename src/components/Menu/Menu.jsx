import React, { useState } from 'react';
import './Menu.scss';
import search from '../../assets/styles/static/search.svg';
import shopping from '../../assets/styles/static/shopping.svg';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <ul className='menu'>
        <li className='menu'>inicio</li>
        <li className='menu'>hombre</li>
        <li className='menu'>mujer</li>
        <li className='menu'>¿necesitas ayuda?</li>
        <li className='menu'>tips y nutrición</li>
        <li className='menu'>¿quienes somos?</li>
        <li className='menu'>contáctanos</li>
      </ul>
    </>
  );
};

export default Menu;
