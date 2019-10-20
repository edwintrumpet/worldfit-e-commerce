import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/Layout/Layout';

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact to="/" component={Home}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
