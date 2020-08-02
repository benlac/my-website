import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';

import './app.scss';
import datas from '../../datas/projects';
import ProjectDetail from '../ProjectDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        lastname: '',
        firstname: '',
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
          <Route path="/portfolio" exact>
            <Portfolio projets={datas} />
          </Route>
          <Route path="/portfolio/:id" component={(props) => <ProjectDetail {...props} projects={datas} />} />
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
