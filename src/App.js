import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;