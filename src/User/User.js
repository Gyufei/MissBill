import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './login/Login'
import Register from './register/Register'
import ForgetPassword from './forget-password/ForgetPassword'
import ResetPassword from './reset-password/ResetPassword'


class User extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={ Login }></Route>
        <Route path='/register' component={ Register }></Route>
        <Route path='/forget-password' component={ ForgetPassword }></Route>
        <Route path='/reset-password' component={ ResetPassword }></Route>
      </Switch>
    )
  }
}

export default User