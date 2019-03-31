import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Statistic } from 'antd'

import './BasicSummary.scss'

const BasicStatistic = (props) => {
  const { title, value, color, ...resetProps } = props

  return (<Statistic 
    title={ title }
    value={ value }
    valueStyle={{ color: color}}
    precision={2}
    prefix="¥ "
    { ...resetProps }
  ></Statistic>)
}

BasicStatistic.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
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
        <BasicStatistic 
          title="总资产" 
          value={ totalAssets }
          color='#2c3e50'
        ></BasicStatistic>

        <BasicStatistic 
          title="本月收入" 
          value={ currentMonthIncome }
          color='#2c3e50'
        ></BasicStatistic>

        <BasicStatistic 
          title="本月支出" 
          value={ currentMonthOutlay }
          color='#2c3e50'
        ></BasicStatistic>
      </div>
    )
  }
}

export default BasicSummary