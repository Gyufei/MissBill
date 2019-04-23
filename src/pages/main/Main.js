import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Account from './account/Account'

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path='/account' component={ Account } />
      </Switch>
    )
  }
}

export default Main