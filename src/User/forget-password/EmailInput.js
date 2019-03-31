import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Typography } from 'antd'
import { isEmail } from '../../utils/utils'
import './ForgetPassword.scss'

const { Text } = Typography

const emailTipMessages = {
  InIt: {
    message: '',
    type: ''
  },
  EMPTY: {
    message: '*邮箱不能为空',
    type: 'danger'
  },
  ERRORFORMAT: {
    message: '*邮箱格式错误',
    type: 'danger'
  }
}

class EmailInput extends Component {
  static propTypes = {
    changeEmail: PropTypes.func,
    changeIsCanSubmit: PropTypes.func
  }
  
  constructor (props) {
    super(props)
    this.state = {
      emailTipMessage: {
        message: '',
        type: ''
      }
    }
  }

  handleEmailChange = (e) => {
    const email = e.target.value
    this.setState({ email })
    this.validateEmail(email)
  }
  
  validateEmail (email) {
    const { changeEmail, changeIsCanSubmit } = this.props

    let emailTipMessage
    if (!email) {
      emailTipMessage = emailTipMessages.EMPTY
      changeIsCanSubmit(false)
    } else if(!isEmail(email)) {
      emailTipMessage = emailTipMessages.ERRORFORMAT
      changeIsCanSubmit(false)
    } else {
      emailTipMessage = emailTipMessages.InIt
      changeIsCanSubmit(true)
    }

    changeEmail(email)
    this.setState({ emailTipMessage })
  }

  render() {
    const { emailTipMessage } = this.state

    return (
      <div className="email-input">
        <label>注册邮箱:</label>
        <Input onChange={ this.handleEmailChange } />
        <span className="tip-message-text">
          <Text type={ emailTipMessage.type }>{ emailTipMessage.message }</Text>
        </span>
      </div>
    )
  }
}

export default EmailInput