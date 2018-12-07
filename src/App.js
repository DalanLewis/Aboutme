import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Aboutme from './about-me'
import Workexperience from './work-experience'
import ProjectPage from './project-page'
import './App.css'

class App extends Component {
  render = () => {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Aboutme}/>
            <Route path="/experience" component={Workexperience}/>
            <Route path="/projects" component={ProjectPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
