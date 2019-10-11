import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children, carrito }) => (
  <>
    <Header carrito={carrito} />
    {children}
    <Footer />
  </>
);

export default Layout;
