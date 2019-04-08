import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { Link } from 'react-router-dom'

import { Form, Input, Button, Checkbox, Icon } from 'antd'

import './Login.scss'

class LoginForm extends Component {
  static propTypes = {
    form: PropTypes.object,
    onLogin: PropTypes.func.isRequired
  }

  handleLoginFormSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values)
      }
    })
  } 

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form 
        className="horizontal-form"
        hideRequiredMark={ true }
        onSubmit={ this.handleLoginFormSubmit } >
        <Form.Item label="用户名">
          {
            getFieldDecorator('username', {
              rules: [{ required: true, message: '请填写用户名'}]
            })(
              <Input 
                prefix={
                  <Icon type="user"></Icon>
                }
                placeholder="Username" />
            )
          }
        </Form.Item>
        <Form.Item label="密码">
          {
            getFieldDecorator('password', {
              rules: [{ required: true, message: '请填写密码'}]
            })(
              <Input.Password
                prefix={
                  <Icon type="lock"></Icon>
                }
                placeholder="Password"/>
            )
          }
          <Link className="forget-password-link" to="/forget-password">忘记密码 ?</Link>
        </Form.Item>
        <Form.Item className="remeber-checkbox">
          {
            getFieldDecorator('remeber', {
              initialValue: true
            })(
              <Checkbox></Checkbox>
            )
          }
          <span>在这台电脑记住我</span>
        </Form.Item>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    )
  }
}

const wrappedLoginForm = Form.create({ name: 'login-form' })(LoginForm)

export default wrappedLoginForm