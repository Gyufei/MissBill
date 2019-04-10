import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd'


class AccountFlowDrawer extends Component {
  static propTypes = {
    showFlowDrawer: PropTypes.bool,
    onCloseFlowDrawer: PropTypes.func
  }

  render() {
    const { showFlowDrawer, onCloseFlowDrawer } = this.props

    return (
      <Drawer
        visible={ showFlowDrawer }
        onClose={ onCloseFlowDrawer }
        closable={ false }
        width='50%'
      >
        AccountFlow
      </Drawer>
    )
  }
}

export default AccountFlowDrawer