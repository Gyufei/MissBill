import React, { Component } from 'react'

import { InputNumber, Select, Button } from 'antd'

class TransferInput extends Component {
  render() {
    return (
      <div>
        转账&nbsp; 
        <InputNumber size="small"></InputNumber> 
        &nbsp;到&nbsp; 
        <Select style={{ width: 120 }} size="small"></Select>
        &nbsp;
        <Button size="small">确认</Button>
      </div>
    )
  }
}

export default TransferInput