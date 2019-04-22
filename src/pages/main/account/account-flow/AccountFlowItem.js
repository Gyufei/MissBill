import React, { Component } from 'react'
import { formatPrecision } from '@/utils/utils'
import PropTypes from 'prop-types'

class FlowItem extends Component {
  static propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    remark: PropTypes.string,
    money: PropTypes.number
  }


  formatMoney (val, num) {
    const formatedVal = formatPrecision(val, num)
    return val > 0 ? `+${formatedVal}`: `-${formatedVal}`
  } 

  render() {
    const { icon, name, remark, money } = this.props
    return (
      <div className="account-flow-item">
        <span className="item-info">
          <span className="type-icon">{ icon }</span>
          <span className="type-text">
            <span className="type-name">{ name }</span>
            <span className="type-remark">{ remark }</span>
          </span>
        </span>

        <span className="item-money">
          { this.formatMoney(money, 2) }
        </span>
      </div>
    )
  }
}

function FlowItemHOC (Comp) {
  class WrapFlowItem extends Component {
    static propTypes = {
      type: PropTypes.string,
      flowItemRemark: PropTypes.string,
      flowItemMoney: PropTypes.number
    }

    getImgAndNameByType(type) {
      console.log(type)
      return {
        icon: '',
        name: '日常消费'
      }
    }

    render() {
      const { type, flowItemRemark, flowItemMoney } = this.props
      const { icon, name } = this.getImgAndNameByType(type)
      return (<Comp 
        icon={icon}
        name={name}
        remark={ flowItemRemark }
        money={ flowItemMoney }
      ></Comp>)
    }
  }

  return WrapFlowItem
}

export default FlowItemHOC(FlowItem)