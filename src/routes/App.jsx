import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import Home from '../containers/Home/Home';
import Layout from '../components/Layout/Layout';
import GlobalStyles from '../styles/GlobalStyles';

const App = () => {

  return (
    <BrowserRouter>
      <GridThemeProvider>
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route exact to="/" component={Home}/>
          </Switch>
        </Layout>
      </GridThemeProvider>
    </BrowserRouter>
  );
};

export default App;
