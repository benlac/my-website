import React from 'react';
import { Route } from 'react-router-dom';
import './app.scss';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Portfolio from '../Portfolio';

import datas from '../../datas/projects';
import Project from '../Project';
import Contact from '../Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        lastname: '',
        firstname: '',
        company: '',
        mail: '',
        message: '',
      }
    }
  }

  setValue = (target) => {
    this.setState({
      contact: {
        ...this.state.contact,
      [target.name]: target.value
      }
    })
  }
  render() {
    const { contact } = this.state;
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
          <Route path="/contact">
            <Contact contactValue={contact} handleChange={this.setValue} />
          </Route>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
