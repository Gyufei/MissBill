import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AddAccountBtn.scss'

class AddAccountBtn extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  
  render() {
    return (
      <div onClick={ this.props.onClick } className="add-account-btn">
        <span className="add-account-btn-text">+</span>
      </div>
    )
  }
}

export default AddAccountBtn