import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button, Icon } from 'antd'

import './ResetPassword.scss'

class ResetPasswordForm extends Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    form: PropTypes.object
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    })
  }

  compareToSecondPassword = (rule, val, callback) => {
    const { getFieldValue, validateFields } = this.props.form

    const secondPassword = getFieldValue('confirm-password')

    if (val && secondPassword) {
      validateFields(['confirm-password'], { force: true })
    }
    callback()
  }

  // 在第二次输入密码时，和第一次进行比较
  compareToFirstPassword = (rule, val, callback) => {
    const { getFieldValue } = this.props.form

    if (val && val !== getFieldValue('password')) {
      callback('两次输入密码不一致')
    } else {
      callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form 
        hideRequiredMark={ true }
        onSubmit={ this.handleSubmit }>
        <Form.Item label="邮箱">
          <Input
            disabled
            defaultValue={ this.props.email }
            prefix={ <Icon type="mail"></Icon> }
          />
        </Form.Item>
        <Form.Item label="新密码">
          {
            getFieldDecorator('password', {
              rules: [
                { required: true, message: '请输入新密码' },
                { validator: this.compareToSecondPassword }
              ]
            })( 
              <Input.Password
                visibilityToggle={ false }
                prefix={ <Icon type="lock"></Icon> }
              />
            )
          }
        </Form.Item>
        <Form.Item label="再次确认新密码">
          {
            getFieldDecorator('confirm-password', {
              rules: [
                { required: true, message: '请再次确认密码' },
                { validator: this.compareToFirstPassword }
              ]
            })( 
              <Input.Password
                visibilityToggle={ false }
                prefix={ <Icon type="lock"></Icon> }
              />
            )
          }
        </Form.Item>
        <Button 
          className="submit-btn"
          type="primary" 
          htmlType="submit">提交</Button>
      </Form>
    )
  }
}

const wrappedResetPasswordForm = Form.create('reset-password')(ResetPasswordForm)

export default wrappedResetPasswordForm