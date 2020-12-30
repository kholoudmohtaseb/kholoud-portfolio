import { Container, Grid } from '@material-ui/core';
import React from 'react';

import Profile from './component/Profile/Profile';
import Header from './component/header/Header';
import Footer from './component/Footer';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className={'top-60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
            <Header />
            <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route path='/'>
                <Resume />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
