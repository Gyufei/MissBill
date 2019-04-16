import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatPrecision } from '@/utils/utils'

import DateSelect from '@/components/date-select/DateSelect'

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

  onDateChange = ({ year, month }) => {
    console.log(year,month)
  }

  render() {
    const { monthInput, monthOutlay, account: { name }} = this.props
    return (
      <div className="account-flow-info">
        <img alt="account" src={ cashImg }></img>
        <span className="account-name">{ name }</span>
        <span className="account-month-input">本月收入 { formatPrecision(monthInput, 2)}</span>
        <span className="account-month-outlay">本月支出 { formatPrecision(monthOutlay, 2)}</span>
        <span className="month-select"> 
          <DateSelect onDateChange={ this.onDateChange }></DateSelect>
        </span>
      </div>
    )
  }
}

export default AccountFlowInfo