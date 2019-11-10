import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Layout from '../components/Layout/Layout';
import '../assets/styles/GlobalStyles.scss';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact to='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
