import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AccountEditModal from '../account-modal/AccountModal'
import { Button } from 'antd'
import { formatPrecision } from '@/utils/utils'


import './AccountItem.scss'
import cashImg from '@/assets/img/cash.jpeg'

class AccountItem extends Component {
  static propTypes = {
    account: PropTypes.shape({
      cate: PropTypes.string,
      name: PropTypes.string,
      remark: PropTypes.string,
      balance: PropTypes.number,
      todayConsume: PropTypes.number
    })
  }

  static defaultProps = {
    account: {
      cate: '现金账户',
      name: '现金',
      remark: '身上现金',
      balance: 2000,
      todayConsume: 1000
    }
  }
  
  state = {
    visibleEditModal: false
  }

  handleEditModalStatus = (isOpen) => {
    return () => {
      this.setState({
        visibleEditModal: isOpen
      })
    }
  }

  render() {
    const { cate, name, balance, todayConsume } = this.props.account

    return (
      <div className="account-item">
        <div className="account-cate">
          <img src={ cashImg } alt="cash" />
          <span>{ cate }</span>
        </div>

        <div className="account-info">
          <div className="info-item">
            <span className="info-title">账户名称</span>
            <span className="info-title-value">{ name }</span>
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
          <AccountEditModal 
            onCloseModal={ this.handleEditModalStatus(false) }
            visible={ this.state.visibleEditModal }
            account={ this.props.account }
          ></AccountEditModal>
        </div>

        <div className="account-operator">
          <Button size="small">流水</Button>
          <Button size="small">转账</Button>
        </div>
      </div>
    )
  }
}

export default AccountItem