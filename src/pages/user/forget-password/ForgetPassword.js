import React, { Component } from 'react'
import { Typography, Button } from 'antd'
import EmailInput from './EmailInput'

import './ForgetPassword.scss'

const { Title, Text } = Typography
class ForgetPassword extends Component {
  state = {
    email: '',
    canSubmit: false,
    hasSubmitted: false,
    isSubmitting: false
  }

  changeEmail = (email) => {
    this.setState({ email })
  }

  changeIsCanSubmit = (canSubmit) => {
    this.setState({ canSubmit })
  }

  handleSubmitEmail = () => {
    const { email, canSubmit } = this.state
    if (!canSubmit) return

    this.setState({
      isSubmitting: true
    })
    setTimeout(() => {
      console.log(email)
      this.setState({
        hasSubmitted: true,
        isSubmitting: false
      })
    }, 1000)
  }

  render() {
    const { email, hasSubmitted, isSubmitting } = this.state
    
    const tipText = ` 重置密码邮件已发送到您的收件箱，
                      请注意查收, 
                      如果在收件箱中未找到，请检查垃圾箱，或者尝试仔细回忆密码
              `
    return (
      <div className="main-container">
        <Title level={4}>{ hasSubmitted? '提示' : '重置密码' }</Title>
        { hasSubmitted ? 
          (
            <Text>{ tipText }</Text>
          )
          :(<>
        <EmailInput 
          email={ email }
          changeEmail={ this.changeEmail }
          changeIsCanSubmit={ this.changeIsCanSubmit }
        />
        <Button 
          className="submit-email-btn" 
          loading={ isSubmitting }
          type="primary"
          onClick={ this.handleSubmitEmail }
        >重置密码</Button>
        </>)
        }
      </div>
    )
  }
}

export default ForgetPassword