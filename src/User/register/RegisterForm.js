import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { Form, Input, Button } from 'antd'

import './Register.scss'

class RegisterForm extends Component {
  static propTypes = {
    form: PropTypes.object,
    onRegister: PropTypes.func.isRequired
  }

  handleRegisterFormSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onRegister(values)
      }
    })
  } 

  compareToSecondPassword = (rule, val, callback) => {
    const { getFieldValue, validateFields } = this.props.form

    const secondPassword = getFieldValue('confirm-password')

    if (val && secondPassword) {
      validateFields(['confirm-password'], { force: true})
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
        onSubmit={ this.handleRegisterFormSubmit } >
        <Form.Item label="用户名">
          {
            getFieldDecorator('username', {
              rules: [{ required: true, message: '请填写用户名'}]
            })(
              <Input placeholder="Username" />
            )
          }
        </Form.Item>
        <Form.Item label="邮箱">
          {
            getFieldDecorator('email', {
              rules: [
                { required: true, message: '请填写邮箱'},
                { type: 'email', message: '请输入正确的邮箱格式'}
              ]
            })(
              <Input placeholder="Email" />
            )
          }
        </Form.Item>
        <Form.Item label="密码">
          {
            getFieldDecorator('password', {
              rules: [
                { required: true, message: '请填写密码'},
                { min: 6, message: '密码长度不能小于六位'},
                { validator: this.compareToSecondPassword }
              ]
            })(
              <Input.Password
                visibilityToggle={ false }
                placeholder="Password"/>
            )
          }
        </Form.Item>
        <Form.Item label="确认密码">
          {
            getFieldDecorator('confirm-password', {
              rules: [
                { required: true, message: '请确认密码'},
                { validator: this.compareToFirstPassword }
              ]
            })(
              <Input.Password
                visibilityToggle={ false }
                placeholder="Confirm Password"/>
            )
          }
        </Form.Item>
        <Button 
          className="register-submit-btn"
          type="primary" 
          htmlType="submit">注册</Button>
      </Form>
    )
  }
}

const wrappedRegisterForm = Form.create({ name: 'register-form' })(RegisterForm)

export default wrappedRegisterForm