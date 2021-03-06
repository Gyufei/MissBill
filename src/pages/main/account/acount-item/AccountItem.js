import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormModal from '../account-form/FormModal'
import FlowDrawer from '../account-flow/FlowDrawer'
import TransferBtn from '../transfer-btn/TransferBtn'
import { Button } from 'antd'
import { formatPrecision } from '@/utils/utils'


import './AccountItem.scss'
import xianjinImg from '@/assets/img/account/xianjin.png'

class AccountItem extends Component {
  static propTypes = {
    account: PropTypes.shape({
      id: PropTypes.number,
      cate: PropTypes.string,
      name: PropTypes.string,
      remark: PropTypes.string,
      balance: PropTypes.number,
      todayConsume: PropTypes.number
    })
  }
  
  state = {
    showFormModal: false,
    showFlowDrawer: false
  }

  handleEditModalStatus = (isShow) => () => {
    this.setState({
      showFormModal: isShow
    })
  }
 

  handleFlowDrawerStatus = (isShow) => () => {
    this.setState({
      showFlowDrawer: isShow
    })
  }
 

  render() {
    const { showFormModal, showFlowDrawer } = this.state
    const { cate, name, balance, remark, todayConsume } = this.props.account

    return (
      <div className="account-item">
        <div className="account-cate">
          <img src={ xianjinImg } alt="cash" />
          <span>{ cate }</span>
        </div>

        <div className="account-info">
          <div className="info-item">
            <span className="info-title">账户名称</span>
            <span className="info-title-value">
              { name }
              { remark ? <span className="info-remark">({ remark })</span> : null}
            </span>
          </div>
          <div className="info-item">
            <span className="info-title">账户余额</span>
            <span className="info-money-value">¥ { formatPrecision(balance, 2) }</span>
          </div>
          <div className="info-item">
            <span className="info-title">今日消费</span>
            <span className="info-money-value">¥ { formatPrecision(todayConsume, 2) }</span>
          </div>
        </div>

        <div className="account-edit">
          <Button onClick={ this.handleEditModalStatus(true) } size="small">编辑</Button>
        </div>

        <div className="account-operator">
          <Button onClick={ this.handleFlowDrawerStatus(true) } size="small">流水</Button>
          <TransferBtn />
        </div>

        <FormModal 
          onCloseFormModal={ this.handleEditModalStatus(false) }
          showFormModal={ showFormModal }
          account={ this.props.account } />

        <FlowDrawer
          onCloseFlowDrawer={ this.handleFlowDrawerStatus(false) }
          showFlowDrawer={ showFlowDrawer }
          account={ this.props.account } />
      </div>
    )
  }
}

export default AccountItem