import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import Layout from '../components/Layout/Layout';
import '../assets/styles/GlobalStyles.scss';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
