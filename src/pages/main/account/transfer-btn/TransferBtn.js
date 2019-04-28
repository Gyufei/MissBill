import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import TransferInput from './TransferInput'
import { Popover, Button } from 'antd'

class AccountTransfer extends Component {
  render() {
    return (
      <Popover content={ <TransferInput /> } trigger="click" placement="right"> 
        <Button size="small">转账</Button>
      </Popover>
    )
  }
}

export default AccountTransfer