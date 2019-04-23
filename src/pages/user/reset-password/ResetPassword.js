import React, { Component } from 'react'
import { Typography } from 'antd'
import ResetPasswordForm from './ResetPasswordForm'

import './ResetPassword.scss'

const { Title } = Typography

class ResetPassword extends Component {
  state = {
    email: '812773673@qq.com'
  }

  handleSubmitResetPassword = (passwordInfo) => {
    console.log(passwordInfo)
  }

  render() {
    const { email } = this.state
    return (
      <div className="main-container">
        <Title level={4}>设置新密码</Title>
        <ResetPasswordForm 
          onSubmit={ this.handleSubmitResetPassword }
          email={ email } />
      </div>
    )
  }
}

export default ResetPassword