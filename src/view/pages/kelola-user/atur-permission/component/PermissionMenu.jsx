import { Checkbox, Col, Row } from 'antd'
import React from 'react'

export const PermissionMenu = ({ menus }) => {
  return (
    <Row>
      {menus?.map((menu, i) => (
        <Col span={6}>
          <Checkbox key={i} value="lihat_user" style={{ lineHeight: '32px' }}>
            {menu}
          </Checkbox>
        </Col>
      ))}
    </Row >
  )
}