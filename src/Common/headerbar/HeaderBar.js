import React from 'react'
import { Link } from 'react-router-dom'

import './HeaderBar.scss'

const HeaderBar = () => {
  return (
    <nav className="header-bar">
      <div className="header-title-container">
        <Link 
          to='/' 
          className="header-title" 
        >每日帐薄</Link>
      </div>

      <div className="header-link-container">
        <div className="main-link">
          <Link to='/'>我的账户</Link>
          <Link to='/'>收入和支出</Link>
          <Link to='/'>统计分析</Link>
        </div>
        <div className="system-link">
          <Link to='/login'>登录</Link>
          <Link to='/register'>注册</Link>
        </div>
      </div>
    </nav>
  )
}

export default HeaderBar