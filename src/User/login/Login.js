import React, { Component } from 'react'
import { Typography } from 'antd'

import LoginForm from './LoginForm'

import './Login.scss'

const { Title } = Typography

class Login extends Component {
  handleLogin = (loginInfo) => {
    console.log(loginInfo)
  }

  render () {
    return (
      <div className="main-container">
        <Title level={4}>登录</Title>
        <LoginForm
          onLogin={ this.handleLogin }
        ></LoginForm>
      </div>
    )
  }
}

export default Login