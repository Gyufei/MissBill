import React, { Component } from 'react'
import BasicSummary from './basic-summary/BasicSummary'
import AccountItem from './acount-item/AccountItem'
import AddAccountBtn from './add-account-btn/AddAccountBtn'
import './Account.scss'

class Account extends Component {
  state = {
    totalAssets: 2333,
    currentMonthIncome: 1000,
    currentMonthOutlay: 2000,
    accounts: [
      {
        id: 123,
        cate: '现金账户',
        name: '现金',
        remark: '身上现金',
        balance: 2000,
        todayConsume: 1000
      },
      {
        id: 456,
        cate: '网络账户',
        name: '花呗',
        remark: '蚂蚁花呗',
        balance: -3000,
        todayConsume: 40
      },
      {
        id: 789,
        cate: '信用卡',
        name: '信用卡',
        remark: '',
        balance: 10000,
        todayConsume: 300
      }
    ]
  }

  componentDidMount() {
    const mainContainer = document.querySelector('.main-container')
    const addBtnContainer = document.querySelector('.add-account-btn-container')
    document.addEventListener('scroll', () => {
      const overflow = mainContainer.getBoundingClientRect().top
      console.log(overflow)
      addBtnContainer.style.bottom = overflow - 39 + 'px'
    })
  }

  render() {
    const { accounts } = this.state
    return (
      <div className="main-container">
        <BasicSummary 
          totalAssets={ this.state.totalAssets }
          currentMonthIncome={ this.state.currentMonthIncome }
          currentMonthOutlay={ this.state.currentMonthOutlay }
        ></BasicSummary>
        <div>
          {
            accounts.map(account => (
              <AccountItem account={ account } key={ account.id }></AccountItem>
            ))
          }
        </div>
        <div className="add-account-btn-container">
          <AddAccountBtn></AddAccountBtn>
        </div>
      </div>
    )
  }
}

export default Account