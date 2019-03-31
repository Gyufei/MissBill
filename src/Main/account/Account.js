import React, { Component } from 'react'
import BasicSummary from './basic-summary/BasicSummary'


class Account extends Component {
  state = {
    totalAssets: 2333,
    currentMonthIncome: 1000,
    currentMonthOutlay: 2000,
  }

  render() {
    return (
      <div className="main-container">
        <BasicSummary 
          totalAssets={ this.state.totalAssets }
          currentMonthIncome={ this.state.currentMonthIncome }
          currentMonthOutlay={ this.state.currentMonthOutlay }
        ></BasicSummary>
      </div>
    )
  }
}

export default Account