import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd'

import AccountInfo from './AccountFlowInfo'

import './AccountFlow.scss'

class AccountFlowDrawer extends Component {
  static propTypes = {
    account: PropTypes.shape({
      id: PropTypes.number.isRequired,
      cate: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    showFlowDrawer: PropTypes.bool,
    onCloseFlowDrawer: PropTypes.func
  }

  render() {
    const { showFlowDrawer, onCloseFlowDrawer, account } = this.props

    return (
      <Drawer
        visible={ showFlowDrawer }
        onClose={ onCloseFlowDrawer }
        closable={ false }
        width='50%'
      >
        <AccountInfo account={ account }></AccountInfo>
      </Drawer>
    )
  }
}

export default AccountFlowDrawer