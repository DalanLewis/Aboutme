import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Aboutme from './about-me'
import Workexperience from './work-experience'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Aboutme}/>
            <Route path="/experience" component={Workexperience}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
