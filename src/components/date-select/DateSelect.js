import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  isDate,
  isThisYear,
  format,
  addMonths,
  differenceInMonths,
  isSameMonth,
  getYear,
  getMonth
} from 'date-fns'
import zhCnLocale from 'date-fns/locale/zh_cn'

import './DateSelect.scss'

class DateSelect extends Component {
  constructor() {
    super()
    this.state = {
      dateState: ''
    }
  }
  
  UNSAFE_componentWillMount() {
    this.changeDate(new Date())
  }

  static propTypes = {
    onDateChange: PropTypes.func.isRequired
  }

  changeDate(date) {
    this.setState({ dateState: date })
    this.props.onDateChange({ 
      year: getYear(date) ,
      month: getMonth(date) + 1
    })
  }

  _parseDateToMonth(date) {
    if (!isDate(date)) return
    const formatPattern = isThisYear(date) ?
      'MMM' :
      'YY年 MMM'
    return format(date, formatPattern, {
      locale: zhCnLocale
    })
  }

  _addDateByMonth = (monthNum) => {
    const newDateState = addMonths(this.state.dateState, monthNum)
    if (differenceInMonths(new Date(), newDateState) > 0 
        || isSameMonth(new Date(), newDateState)) {
      this.changeDate(newDateState)
    }
  }

  render() {
    const { dateState } = this.state
    return (
      <div className="comp_month-select">
        <span
          className="left-btn"
          onClick={ this._addDateByMonth.bind(this, -1) }>
          &lt;
        </span>
        <span className="month-text">{ this._parseDateToMonth(dateState) }</span>
        <span 
          className="right-btn"
          onClick={ this._addDateByMonth.bind(this, 1) }>
          &gt;
        </span>
      </div>
    )
  }
}

export default DateSelect