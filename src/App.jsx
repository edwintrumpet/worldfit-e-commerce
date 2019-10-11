import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';

const App = () => {
  const carrito = [
    {
      producto: 'chaqueta premium gris',
      precio: 865000,
    },
    {
      producto: 'chaqueta slowmotion negra',
      precio: 764000,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <Layout carrito={carrito}>
        <h1>Views are here!</h1>
      </Layout>
    </>
  );
};

export default App;
