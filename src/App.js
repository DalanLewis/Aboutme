import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Aboutme from './about-me'
import Workexperience from './work-experience'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Aboutme />
          <Router>
            <Switch>
              <Route> </Route>
              <Route> </Route>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
