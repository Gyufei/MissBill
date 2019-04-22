import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd'

import AccountInfo from './AccountFlowInfo'
import FlowItem from './AccountFlowItem'

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

  state={
    flowWidth: '30%'
  }

  render() {
    const { showFlowDrawer, onCloseFlowDrawer, account } = this.props

    return (
      <Drawer
        visible={ showFlowDrawer }
        onClose={ onCloseFlowDrawer }
        closable={ false }
        width={ this.state.flowWidth }
      >
        <AccountInfo account={ account }></AccountInfo>
        <FlowItem type='day' flowItemRemark='日常' flowItemMoney={ 2000 }></FlowItem>
      </Drawer>
    )
  }
}

export default AccountFlowDrawer