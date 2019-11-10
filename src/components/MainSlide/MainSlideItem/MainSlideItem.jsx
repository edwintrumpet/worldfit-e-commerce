import React from 'react';
import imgTemp from '../../../assets/static/temp/slide-1.jpg';

const MainSlideItem = () => {
  return (
    <div className="swiper-slide boxSlide--container__item" style={{backgroundImage: `url(${imgTemp})`}}>
      <div className="content">
        <h2 className="heading">Collection for men 2019</h2>
        <a className="btn" href="#">Shop now</a>
      </div>
    </div>
  )
}

export default MainSlideItem;
