import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

import HeaderBar from './headerbar/HeaderBar'
import Login from './login/Login'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <HeaderBar></HeaderBar>
          <Route path='/login' component={ Login }></Route>
          <Route path="/" component={ Login }></Route>
        </div>
      </Router>
    )
  }
}

export default App
