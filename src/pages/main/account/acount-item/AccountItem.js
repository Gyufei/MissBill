import React, { Component } from 'react'

class AccountItem extends Component {
  render() {
    return (
      <div>
        <div className="account-cate">
         网络账户
        </div>

        <div className="account-info">
          <div>
            <span>账户名称</span>
            <span>现金(身上现金)</span>
          </div>
          <div>
            <span>账户余额</span>
            <span>1234</span>
          </div>
          <div>
            <span>今日消费</span>
            <span>2321</span>
          </div>
        </div>

        <div className="account-operator">
          <button>流水</button>
          <button>编辑</button>
          <button>转账</button>
        </div>
      </div>
    )
  }
}

export default AccountItem