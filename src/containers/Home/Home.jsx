import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainSlide from '../../components/MainSlide/MainSlide';
import MainSlideItem from '../../components/MainSlide/MainSlideItem/MainSlideItem';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import CategoryItem from '../../components/CategoryGrid/CategoryItem/CategoryItem';
import CarouselProduct from '../../components/CarouselProduct/CarouselProduct';
import BoxProduct from '../../components/BoxProduct/BoxProduct';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Newsletter from '../../components/Newsletter/Newsletter';
import { loadProducts } from '../../actions';
import { HOST } from '../../../config';

const Home = (props) => {
  const { products } = props;

  useEffect(() => {
    fetch(`${HOST}/products?tags[]=destacado`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((response) => {
        props.loadProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(props);
  
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
        {
          products.map((product) => <BoxProduct slide key={product.id} {...product} />)
        }
      </CarouselProduct>
      <HeroBanner />
      <Newsletter />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
