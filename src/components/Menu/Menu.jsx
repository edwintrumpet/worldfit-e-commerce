import React, { useState } from 'react';
import search from '../../assets/static/search.svg';
import shopping from '../../assets/static/shopping.svg';

const Menu = (props) => {
  const { active } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`menu${active ? ' open' : ''}`}>
      <button className='menu__panel--index' disable='true'>Menu</button>
      <ul className='main__menu'>
        <li className='main__menu--link'>
          <a href='#'>
            hombre
          </a>
          <i className='menu-forward-arrow icon-arrow-right' />
          <div className='submenu'>
            <button className='menu__panel--index menu-back'>
                hombre
              <i className='menu-backward-arrow icon-arrow-left' />
            </button>
            <ul className='main__submenu'>
              <li className='main__submenu--link'>
                <a href=''>
                    Buzos
                </a>
              </li>
              <li className='main__submenu--link'>
                <a href=''>
                    Camisetas
                </a>
              </li>
              <li className='main__submenu--link'>
                <a href=''>
                    Chaquetas
                </a>
              </li>
              <li className='main__submenu--link'>
                <a href=''>
                    Joggers
                </a>
              </li>
              <li className='main__submenu--link'>
                <a href=''>
                    Pantalonetas
                </a>
              </li>
              <li className='main__submenu--link'>
                <a href=''>
                    Zapatillas
                </a>
              </li>
              <li className='main__submenu--link'>
                <a href=''>
                    Nueva Colección
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className='main__menu--link'>
          <a href='#'>
            mujer
          </a>
          <i className='menu-forward-arrow icon-arrow-right' />
        </li>
        <li className='main__menu--link'>
          <a href='#'>
            ¿necesitas ayuda?
          </a>
          <i className='menu-forward-arrow icon-arrow-right' />
        </li>
        <li className='main__menu--link'>
          <a href='#'>
            ¿quienes somos?
          </a>
          <i className='menu-forward-arrow icon-arrow-right' />
        </li>
        <li className='main__menu--link'>
          <a href='#'>
            contáctanos
          </a>
          <i className='menu-forward-arrow icon-arrow-right' />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
