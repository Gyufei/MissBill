import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

import HeaderBar from './Common/headerbar/HeaderBar'
import User from './User/User'
import Main from './Main/Main'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <HeaderBar></HeaderBar>
          <User></User>
          <Main></Main>
          <Route path="/"></Route>
        </div>
      </Router>
    )
  }
}

export default App
