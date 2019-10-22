import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <h1>Views are here!</h1>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
