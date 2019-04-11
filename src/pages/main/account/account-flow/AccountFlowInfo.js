import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatPrecision } from '@/utils/utils'

import cashImg from '@/assets/img/cash.jpeg'

class AccountFlowInfo extends Component {
  static propTypes = {
    account: PropTypes.shape({
      cate: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    monthInput: PropTypes.number,
    monthOutlay: PropTypes.number
  }

  static defaultProps = {
    monthInput: 0,
    monthOutlay: 0
  }

  render() {
    const { monthInput, monthOutlay, account: { name }} = this.props
    return (
      <div className="account-flow-info">
        <img alt="account" src={ cashImg }></img>
        <span className="account-name">{ name }</span>
        <span className="account-month-input">{ formatPrecision(monthInput, 2)}</span>
        <span className="account-month-outlay">{ formatPrecision(monthOutlay, 2)}</span>
      </div>
    )
  }
}

export default AccountFlowInfo