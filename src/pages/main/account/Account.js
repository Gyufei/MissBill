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

  componentDidMount() {
    this.addScrollListener()
    this.getAccounts()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener())
  }

  getAccounts() {
    getAccounts().then(res => {
      this.setState({
        accounts: res.data.data.accounts
      })
    })
  }

  scrollListener () {
    const mainContainer = document.querySelector('.main-container')
    const addBtnContainer = document.querySelector('.account-add-btn-container')

    const scrollFunc = () => {
      const overflow = mainContainer.getBoundingClientRect().top
      addBtnContainer.style.bottom = overflow + 30 + 'px'
    }

    return scrollFunc
  }

  addScrollListener() {
    document.addEventListener('scroll', this.scrollListener())
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