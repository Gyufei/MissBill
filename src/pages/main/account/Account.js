import React, { Component } from 'react'
import BasicSummary from './basic-summary/BasicSummary'
import AccountItem from './acount-item/AccountItem'
import AddAccountBtn from './add-account-btn/AddAccountBtn'
import FormModal from './account-form/FormModal'
import './Account.scss'

class Account extends Component {
  state = {
    showAddAccountModal: false,
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
    const mainContainer = document.querySelector('.account-main-container')
    const addBtnContainer = document.querySelector('.account-add-btn-container')
    document.addEventListener('scroll', () => {
      const overflow = mainContainer.getBoundingClientRect().top
      addBtnContainer.style.bottom = overflow - 39 + 'px'
    })
  }

  handleAddModalStatus = (isShow) => () => {
    this.setState({
      showAddAccountModal: isShow
    })
  }

  render() {
    const { accounts, showAddAccountModal } = this.state
    return (
      <div className="account-main-container">
        <BasicSummary 
          totalAssets={ this.state.totalAssets }
          currentMonthIncome={ this.state.currentMonthIncome }
          currentMonthOutlay={ this.state.currentMonthOutlay }
        />

        <div>
          {
            accounts.map(account => (
              <AccountItem account={ account } key={ account.id } />
            ))
          }
        </div>

        <div className="account-add-btn-container">
          <AddAccountBtn onClick={ this.handleAddModalStatus(true) } />
        </div>

        <FormModal 
          showFormModal={ showAddAccountModal }
          onCloseFormModal={ this.handleAddModalStatus(false) }
        />
      </div>
    )
  }
}

export default Account