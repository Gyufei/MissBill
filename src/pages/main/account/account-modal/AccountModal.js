import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

class AccountEditModal extends Component {
  static propTypes = {
    visible: PropTypes.bool
  }

  render() {
    return (
      <Modal 
        title="修改账户"
        visible={ this.props.visible }>
        
      </Modal>
    )
  }
}

export default AccountEditModal