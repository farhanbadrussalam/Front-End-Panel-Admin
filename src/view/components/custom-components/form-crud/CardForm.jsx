import { Card } from 'antd'
import React from 'react'

const CardForm = ({ children, title }) => {
  return (
    <Card className='form-crud' title={title}>
      {children}
    </Card>
  )
}

export default CardForm