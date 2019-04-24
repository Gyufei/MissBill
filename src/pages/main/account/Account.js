import React, { Component } from 'react'

import BasicSummary from './basic-summary/BasicSummary'
import AccountItem from './acount-item/AccountItem'
import AddAccountBtn from './add-account-btn/AddAccountBtn'
import FormModal from './account-form/FormModal'

import './Account.scss'

import { getAccounts } from '@/api/account'

class Account extends Component {
  state = {
    showAddAccountModal: false,
    totalAssets: 2333,
    currentMonthIncome: 1000,
    currentMonthOutlay: 2000,
    accounts: []
  }

  UNSAFE_componentWillMount() {
    getAccounts().then(res => {
      this.setState({
        accounts: res.data.data.accounts
      })
    })
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
      <div className="main-container">
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