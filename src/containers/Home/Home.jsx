import React from 'react';
import MainSlide from '../../components/MainSlide/MainSlide';
import MainSlideItem from '../../components/MainSlide/MainSlideItem/MainSlideItem';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import CategoryItem from '../../components/CategoryGrid/CategoryItem/CategoryItem';
import CarouselProduct from '../../components/CarouselProduct/CarouselProduct';
import CarouselItem from '../../components/CarouselProduct/CarouselItem';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <MainSlide>
        <MainSlideItem />
        <MainSlideItem />
        <MainSlideItem />
      </MainSlide>
      <CategoryGrid>
        <CategoryItem />
        <CategoryItem />
      </CategoryGrid>
      <CarouselProduct>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </CarouselProduct>
      <HeroBanner />
      <Newsletter />
    </>
  )
}

export default Home;

