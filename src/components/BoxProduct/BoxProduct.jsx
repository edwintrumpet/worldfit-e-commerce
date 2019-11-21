import React from 'react';
import './BoxProduct.scss';

export default function BoxItem(props) {
  const numeral = require('numeral');
  const { slide, list, id, nameProduct, minPrice, maxPrice, images, tags } = props;

  return (
    <div className={`${slide ? 'swiper-slide' : ''} ${list ? 'productList__list--item' : ''}`}>
      <div className='boxProduct'>
        <div className='top-product'>
          <figure className='img-product'>
            { tags.map((dest, index) => (dest === 'destacado' && <span className='flag' key={index}>destacado</span>))}
            <img className='image-front' src={images[0]} alt='' />
            <img className='image-back' src={images[1]} alt='' />
          </figure>
          <div className='buttons'>
            <button className='cart'>
              <i className='icon-cart' />
            </button>
            <a href='#' className='view-more'>
              <i className='icon-search' />
            </a>
          </div>
        </div>
        <div className='content-product'>
          <h3 className='heading'>{nameProduct}</h3>
          <p className='price'>
            { minPrice ? (
              <>
                {`${numeral(minPrice).format('$ 0,0[.]00')} - `}
                <span className='discount'>
                  {numeral(maxPrice).format('$ 0,0[.]00')}
                </span>
              </>
            ) : numeral(maxPrice).format('$ 0,0[.]00') }
          </p>
        </div>
      </div>
    </div>

  );
}
