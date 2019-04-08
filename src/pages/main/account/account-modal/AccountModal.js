import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import AccountForm from '../account-form/AccountForm'


class AccountEditModal extends Component {
  static propTypes = {
    account: PropTypes.shape({
      cate: PropTypes.string,
      name: PropTypes.string,
      remark: PropTypes.string,
      balance: PropTypes.number,
    }),
    visible: PropTypes.bool,
    onCloseModal: PropTypes.func.isRequired
  }

  static defaultProps = {
    account: {
      cate: '',
      name: '',
      remark: '',
      balance: 0,
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      account: props.account
    }
  }


  handleInputChange(inputCate, e) {
    const changeValue = inputCate !== 'balance' ? e.target.value : e
    this.setState({ account: {
      ...this.state.account,
      [inputCate]: changeValue
    }
    })
  }

  render() {
    const { visible, onCloseModal } = this.props
    const { account } = this.state

    const isEdit = !!account.name

    return (
      <Modal 
        title={ isEdit ? '修改账户' : '新建账户'}
        visible={ visible }
        onOk={ onCloseModal }
        onCancel={ onCloseModal }
      >
        <AccountForm
          account={ account }
          onChangeInput={ this.handleInputChange.bind(this) }
        ></AccountForm>
      </Modal>
    )
  }
}

export default AccountEditModal