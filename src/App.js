import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Donate from './Donate';

class App extends Component {
  render () {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={Homepage} />
        <Route exact path = '/donate' component={Donate}/>
      </Switch>
    </Router>
  );

  }
}

export default App;
