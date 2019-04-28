import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatPrecision } from '@/utils/utils'

import DateSelect from '@/components/date-select/DateSelect'

import xianjinImg from '@/assets/img/account/xianjin.png'

class AccountFlowInfo extends Component {
  static propTypes = {
    account: PropTypes.shape({
      cate: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    monthInput: PropTypes.number,
    monthOutlay: PropTypes.number,
    onDateChange: PropTypes.func
  }

  render() {
    const { monthInput, monthOutlay, account: { name }} = this.props
    return (
      <div className="account-flow-info">
        <img alt="account" src={ xianjinImg }></img>
        <span className="account-name">{ name }</span>
        <span className="account-month-input">本月收入 { formatPrecision(monthInput, 2)}</span>
        <span className="account-month-outlay">本月支出 { formatPrecision(monthOutlay, 2)}</span>
        <span className="month-select"> 
          <DateSelect type="month" onChange={ this.props.onDateChange } />
        </span>
      </div>
    )
  }
}

export default AccountFlowInfo