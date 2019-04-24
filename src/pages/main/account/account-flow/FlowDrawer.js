import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd'

import FlowInfo from './FlowInfo'
import FlowDayItem from './FlowDayItem'
import './Flow.scss'

import { getAccountInfo } from '@/api/account'

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

  UNSAFE_componentWillMount() {
    const params = {
      type: 'month',
      date: new Date
    }
    this.getAccountInfo(params)
  }

  getAccountInfo(params) {
    const id = this.props.account.id
    getAccountInfo(id, params).then(res => {
      this.setState({
        monthInput: res.data.data.input,
        monthOutlay: res.data.data.outlay,
        daliyFlows: res.data.data.flows
      })
    })
  } 

  state={
    flowWidth: '30%',
    monthInput: 0,
    monthOutlay: 0,
    daliyFlows: []
  }

  render() {
    const { daliyFlows, monthInput, monthOutlay } = this.state
    const { showFlowDrawer, onCloseFlowDrawer, account } = this.props

    return (
      <Drawer
        visible={ showFlowDrawer }
        onClose={ onCloseFlowDrawer }
        closable={ false }
        width={ this.state.flowWidth }>

        <FlowInfo account={ account } monthInput={ monthInput } monthOutlay={ monthOutlay } />

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