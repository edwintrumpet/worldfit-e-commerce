import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <h1>Views are here!</h1>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
