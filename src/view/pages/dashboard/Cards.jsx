import React from 'react'
import { Col, Card } from 'antd'

const Cards = ({ data }) => {
  return (
    <Col lg={6} sm={12} span={24}>
      <Card bordered={false} size="small" className="cards">
        <div className="content">
          <data.icon className="icon" />
          <div className="desc">
            <p>{data.value}</p>
            <p>{data.text}</p>
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default Cards