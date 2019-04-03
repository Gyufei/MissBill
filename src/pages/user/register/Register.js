import React, { Component } from 'react'
import { Typography } from 'antd'
import RegisterForm from './RegisterForm'
import './Register.scss'

const { Title } = Typography

class Register extends Component {
  handleRegister = (registerInfo) => {
    console.log(registerInfo)
  }
  
  render() {
    return (
      <div className="main-container">
        <Title level={4}>注册</Title>
        <RegisterForm onRegister={ this.handleRegister }></RegisterForm>
      </div>
    )
  }
}

export default Register