import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import AccountForm from './AccountForm'

class AccountModal extends Component {
  static propTypes = {
    account: PropTypes.shape({
      id: PropTypes.number,
      cate: PropTypes.string,
      name: PropTypes.string,
      remark: PropTypes.string,
      balance: PropTypes.number,
    }),
    showFormModal: PropTypes.bool,
    onCloseFormModal: PropTypes.func.isRequired
  }

  static defaultProps = {
    account: {
      id: 0,
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

  get isEdit() {
    return !!this.props.account.id
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
    const { showFormModal, onCloseFormModal } = this.props
    const { account } = this.state

    return (
      <Modal 
        title={ this.isEdit ? '修改账户' : '新建账户'}
        visible={ showFormModal }
        onOk={ onCloseFormModal }
        onCancel={ onCloseFormModal }
      >
        <AccountForm
          account={ account }
          onChangeInput={ this.handleInputChange.bind(this) }
        ></AccountForm>
      </Modal>
    )
  }
}

export default AccountModal