import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import BoxProduct from '../../components/BoxProduct/BoxProduct';
import './ProductList.scss';

const ProductList = (props) => {
  const { products } = props;
  const [state, setState] = useState({
    filter: false,
  });
  const handleFilter = (e, filter) => {
    e.preventDefault();
    if (!filter) {
      e.target.classList.toggle('active');
    } else {
      e.target.parentElement.previousElementSibling.innerHTML = e.target.innerHTML;
      e.target.parentElement.previousElementSibling.classList.remove('active');
      setState({
        ...state,
        filter: e.target.parentElement.previousElementSibling.innerHTML.toLowerCase(),
      })
    }
  };
  
  return (
    <section className='productList'>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <aside className='productList__sidebar'>
              <h3 className='heading'>Comprar por categoria</h3>
              <div className='productList__sidebar--filter'>
                <button className='filter-type' onClick={handleFilter}>Sexo</button>
                <ul className='filters'>
                  <li className='filter-item' onClick={(e) => handleFilter(e, true)}>
                    Hombre
                  </li>
                  <li className='filter-item' onClick={(e) => handleFilter(e, true)}>
                    Mujer
                  </li>
                </ul>
              </div>
            </aside>
          </Col>
          <Col xs={12} md={8}>
            <div className='productList__list'>
              { state.filter === false ? products.map((product) => <BoxProduct list key={product.id} {...product} />)
                : products.map((product) => product.tags.find(e => e === state.filter) != null && <BoxProduct list key={product.id} {...product} />)
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductList);
