import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

import HeaderBar from './components/headerbar/HeaderBar'
import User from './pages/user/User'
import Main from './pages/main/Main'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <HeaderBar />
          <User />
          <Main />
          <Route path="/" />
        </div>
      </Router>
    )
  }
}

export default App
