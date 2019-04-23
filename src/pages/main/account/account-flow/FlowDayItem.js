import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FlowItem from './FlowItem'

class FlowDayItem extends Component {
  static propTypes = {
    date: PropTypes.string,
    flows: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        remark: PropTypes.string,
        money: PropTypes.number
      })
    )
  }

  render() {
    const { date, flows } = this.props
    return (
      <div>
        <span className="account-flows-date">{ date }</span>
        {
          flows.map(({type, remark, money}, idx) => (
            <FlowItem type={ type } remark={ remark } money={ money } key={ idx } />
          ))
        }
      </div>
    )
  }
}

export default FlowDayItem