import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatPrecision } from '@/utils/utils'

import './BasicSummary.scss'

const SummaryItem = (props) => {
  const { title, value } = props

  return (
    <div className="summary-item">
      <span className="summary-item-title">
        { title }
      </span>
      <span className="summary-item-value">
        ¥ { formatPrecision(value, 2) }
      </span>
    </div>
  )
}

SummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

class BasicSummary extends Component {
  static propTypes = {
    totalAssets: PropTypes.number.isRequired,
    currentMonthIncome: PropTypes.number.isRequired,
    currentMonthOutlay: PropTypes.number.isRequired
  }
  

  render() {
    const { totalAssets, currentMonthIncome, currentMonthOutlay } = this.props
    return (
      <div className="total-assets-container">
        <SummaryItem 
          title="总资产" 
          value={  totalAssets }
        ></SummaryItem>

        <SummaryItem 
          title="本月收入" 
          value={ currentMonthIncome }
        ></SummaryItem>

        <SummaryItem 
          title="本月支出" 
          value={ currentMonthOutlay }
        ></SummaryItem>
      </div>
    )
  }
}

export default BasicSummary