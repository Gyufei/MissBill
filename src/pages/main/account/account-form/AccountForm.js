import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber } from 'antd'

class AccountForm extends Component {
  static propTypes = {
    account: PropTypes.shape({
      cate: PropTypes.string,
      name: PropTypes.string,
      remark: PropTypes.string,
      balance: PropTypes.number,
    }),
    onChangeInput: PropTypes.func.isRequired
  }

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    }

    const { cate, name, remark, balance } = this.props.account
    const { onChangeInput } = this.props

    return (
      <Form {...formItemLayout}>
        <Form.Item label="名称">
          <Input 
            value={ name }
            onChange={ onChangeInput.bind(this, 'name')}
          ></Input>
        </Form.Item>

        <Form.Item label="类别">
          <Input 
            value={ cate }
            onChange={ onChangeInput.bind(this, 'cate')}
          ></Input>
        </Form.Item>

        <Form.Item label="金额">
          <InputNumber 
            value={ balance }
            onChange={ onChangeInput.bind(this, 'balance')}
          ></InputNumber>
        </Form.Item>

        <Form.Item label="备注">
          <Input 
            value={ remark }
            onChange={ onChangeInput.bind(this, 'remark')}
          ></Input>
        </Form.Item>
      </Form>
    )
  }
}

export default AccountForm