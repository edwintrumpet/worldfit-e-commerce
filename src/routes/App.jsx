import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import UsersList from '../containers/UsersList/UsersList';
import ProductList from '../containers/ProductList/ProductList';
import Layout from '../components/Layout/Layout';
import SingleProduct from '../containers/SingleProduct/SingleProduct';

import { loginRequest } from '../actions';
import '../assets/styles/GlobalStyles.scss';
import { HOST } from '../../config';

const App = (props) => {

  useEffect(() => {
    fetch(`${HOST}/users/own`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message === 'Authenticated user data') {
          props.loginRequest(response.data);
        }
      })
      .catch(() => {
        // Aquí entra cuando no hay cookie de sesión
      });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/productos' component={ProductList} />
          <Route exact path='/users' component={UsersList} />
          <Route exact path='/producto/:id' component={SingleProduct} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(App);
