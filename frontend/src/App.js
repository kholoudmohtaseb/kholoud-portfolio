import { Container, Grid } from '@material-ui/core';
import React from 'react';

import Profile from './component/Profile/Profile';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className={'top-60'}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
            <Header />
            <div className="main-content">
              <Switch>
                <Route path='/contact'>
                  <Contact />
                </Route>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/resume'>
                  <Resume />
                </Route>
                <Route path='/'>
                  <About />
                </Route>
              </Switch>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
