import React from 'react';
import productFront from '../../assets/static/temp/product-front.jpg';
import productBack from '../../assets/static/temp/product-back.jpg';

export default function CarouselItem() {
  return (
    <div className='swiper-slide'>
      <div className='carouselProduct__slide--item'>
        <figure className='img-product'>
          <span className='flag'>destacado</span>
          <img className='image-front' src={productFront} alt="" />
          <img className='image-back' src={productBack} alt="" />
        </figure>
        <div className="content-product">
          <h3 className='heading'>Name product</h3>
          <p className="price">$100.000</p>
          <div className="buttons">
            <button className="cart">
              <i className="icon-cart" />
            </button>
            <a href="#" className="view-more">
              <i className='icon-search'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
