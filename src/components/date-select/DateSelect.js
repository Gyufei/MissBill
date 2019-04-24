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
  getMonth,
  getDate,
  addYears,
  addDays,
  differenceInYears,
  isSameYear,
  differenceInDays,
  isSameDay,
  isThisMonth
} from 'date-fns'
import zhCnLocale from 'date-fns/locale/zh_cn'

import './DateSelect.scss'

class DateSelect extends Component {
  constructor(props) {
    super(props)
    const dateState = props.initDate
    this.state = { dateState }
  }

  static propTypes = {
    initDate: PropTypes.instanceOf(Date),
    step: PropTypes.number,
    onChange: PropTypes.func.isRequired,

    dateFns: PropTypes.object,
    getDateFormatPattern: PropTypes.func,
    getChangePayload: PropTypes.func
  }

  static defaultProps = {
    step: 1,
    initDate: new Date()
  }

  changeDateTo(date) {
    this.setState({ dateState: date })
    const changePayload = this.props.getChangePayload(date)
    this.props.onChange(changePayload)
  }

  formatDate(date) {
    if (!isDate(date)) return
    const formatPattern = this.props.getDateFormatPattern(date)
    return format(date, formatPattern, { locale: zhCnLocale })
  }

  addDate = (addNum) => {
    const {add, differenceIn, isSame} = this.props.dateFns

    const newDateState = add(this.state.dateState, addNum)
    if (differenceIn(new Date(), newDateState) > 0 || isSame(new Date(), newDateState)) {
      this.changeDateTo(newDateState)
    }
  }

  render() {
    const { dateState } = this.state
    const { step } = this.props
    return (
      <div className="comp_month-select">
        <span
          className="left-btn"
          onClick={ this.addDate.bind(this, -step) }>
          &lt;
        </span>
        <span className="date-text">{ this.formatDate(dateState) }</span>
        <span 
          className="right-btn"
          onClick={ this.addDate.bind(this, step) }>
          &gt;
        </span>
      </div>
    )
  }
}

function WrapSelectHOC(Comp) {
  class wrapComponent extends Component {
    static propTypes = {
      type: PropTypes.oneOf(['year', 'month', 'day']),
    }

    getDateFn() {
      const { type } = this.props

      const dateFnsMap = {
        year: {
          add: addYears,
          differenceIn: differenceInYears,
          isSame: isSameYear,
        },
        month: {
          add: addMonths,
          differenceIn: differenceInMonths,
          isSame: isSameMonth
        },
        day: {
          add: addDays,
          differenceIn: differenceInDays,
          isSame: isSameDay
        },
      }
      return dateFnsMap[type]
    }

    getDateFormatPattern = (date) => {
      const { type } = this.props

      switch (type) {
      case 'year':
        return 'YY年'
      case 'month':
        return isThisYear(date) ? 'MMM' : 'YY年 MMM'
      case 'day':
        return (isThisMonth(date) ? 'D号' : (
          isThisYear(date) ? 'MMM D号' : 'YY年 MMM D号'
        ))
      default:
        break
      }
    }

    getChangePayload = (date) => {
      const { type } = this.props

      const year = getYear(date)
      const month = getMonth(date) + 1
      const day = getDate(date)

      const changePayload = ( type === 'year' ? { year } : (
        type === 'month' ? { year, month } :{ year, month, day }
      ))

      return changePayload
    }


    render () {
      const { type, ...extraProps } = this.props
      return <Comp 
        dateFns={ this.getDateFn(type) } 
        getDateFormatPattern = { this.getDateFormatPattern }
        getChangePayload = { this.getChangePayload }
        {...extraProps} />
    }
  }

  return wrapComponent
}

export default WrapSelectHOC(DateSelect)