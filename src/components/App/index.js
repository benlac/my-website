import React from 'react';
import { Route } from 'react-router-dom';
import './app.scss';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Portfolio from '../Portfolio';

import datas from '../../datas/projects';
import Project from '../Project';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio projets={datas} />
        </Route>
        <Route path="/projet">
          <Project />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
