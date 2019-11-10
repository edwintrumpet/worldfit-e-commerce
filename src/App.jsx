import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <h1>Views are here!</h1>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
