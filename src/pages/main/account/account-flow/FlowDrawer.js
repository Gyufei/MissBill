import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd'

import FlowInfo from './FlowInfo'
import FlowDayItem from './FlowDayItem'

import './Flow.scss'
import FlowItem from './FlowItem'

class AccountFlowDrawer extends Component {
  static propTypes = {
    account: PropTypes.shape({
      id: PropTypes.number.isRequired,
      cate: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    showFlowDrawer: PropTypes.bool,
    onCloseFlowDrawer: PropTypes.func
  }

  state={
    flowWidth: '30%',
    daliyFlows: [
      { date: '19-05-22',
        flows: [
          { type: 'daliy', remark: '', money: 2000 },
          { type: 'food', remark: '吃饭', money: -500 }
        ]
      },
      { date: '19-05-23',
        flows: [
          { type: 'daliy', remark: '', money: 2000 },
          { type: 'food', remark: '吃饭', money: -500 }
        ]
      },
      { date: '19-05-24',
        flows: [
          { type: 'daliy', remark: '', money: 2000 },
          { type: 'food', remark: '吃饭', money: -500 }
        ]
      },
      { date: '19-05-25',
        flows: [
          { type: 'daliy', remark: '', money: 2000 },
          { type: 'food', remark: '吃饭', money: -500 }
        ]
      },
      { date: '19-05-26',
        flows: [
          { type: 'daliy', remark: '', money: 2000 },
          { type: 'food', remark: '吃饭', money: -500 }
        ]
      }
    ]
  }

  render() {
    const { daliyFlows } = this.state
    const { showFlowDrawer, onCloseFlowDrawer, account } = this.props

    return (
      <Drawer
        visible={ showFlowDrawer }
        onClose={ onCloseFlowDrawer }
        closable={ false }
        width={ this.state.flowWidth }>
        <FlowInfo account={ account } />

        <div className="account-flow-desc">
          {
            daliyFlows.map(flowItem => (
              <FlowDayItem date={ flowItem.date } flows={ flowItem.flows } key={ flowItem.date } />
            ))
          }
        </div>
      </Drawer>
    )
  }
}

export default AccountFlowDrawer