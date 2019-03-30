import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

import HeaderBar from './Common/headerbar/HeaderBar'
import User from './User/User'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <HeaderBar></HeaderBar>
          <User></User>
          <Route path="/"></Route>
        </div>
      </Router>
    )
  }
}

export default App
