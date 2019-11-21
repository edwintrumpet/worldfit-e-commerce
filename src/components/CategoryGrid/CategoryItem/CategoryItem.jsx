import React from 'react';
import { Col } from 'react-bootstrap';
import categoryBg from '../../../assets/static/temp/category.jpg';

export default function CategoryItem() {
  return (
    <Col xs={12} sm={6}>
      <a href='/' className='categorySection__item' style={{ backgroundImage: `url(${categoryBg})` }}>
        <h2 className='heading'>Ropa de urban fit</h2>
      </a>
    </Col>
  );
}
