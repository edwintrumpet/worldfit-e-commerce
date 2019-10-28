import React from 'react';
import imgTemp from '../../../assets/static/temp/slide-1.jpg';

const MainSlideItem = () => {
  
  return (
    <div className="swiper-slide boxSlide--container__item" style={{backgroundImage: `url(${imgTemp})`}}>
      <h2>Collection for men 2019</h2>
      <button>Shop now</button>
    </div>
  )
}

export default MainSlideItem;
