import React, { Component } from 'react'
import { Form, Input } from 'antd'

import './Login.scss'

class Login extends Component {

  render () {
    return (
      <div className="login-container">
        <h3 className="login-title">登录</h3>
        <Form className="login-form">
          <Form.Item label="用户名">
            <Input placeholder="username" />
          </Form.Item>
          <Form.Item label="密码">
            <Input placeholder="password"/>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login