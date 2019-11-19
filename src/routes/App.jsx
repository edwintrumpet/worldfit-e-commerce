import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import ProductList from '../containers/ProductList/ProductList';
import Layout from '../components/Layout/Layout';
import '../assets/styles/GlobalStyles.scss';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/productos' component={ProductList} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
