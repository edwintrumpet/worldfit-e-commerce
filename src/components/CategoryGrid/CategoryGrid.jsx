import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './CategoryGrid.scss';

export default function CategoryGrid({ children }) {
  return (
    <section className='categorySection'>
      <Container fluid>
        <Row>
          {children}
        </Row>
      </Container>
    </section>
  );
}
