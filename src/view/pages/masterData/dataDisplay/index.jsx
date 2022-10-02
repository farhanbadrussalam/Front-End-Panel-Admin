import { Input, Row, Col, Button, Card, Table } from 'antd'
import React from 'react'

import Column from './dummyColumn'
import Data from './dummyData'

const DataPengguna = () => {
  const url = window.location.href
  const splitUrl = url.split('/')

  const splitTitle = splitUrl[splitUrl.length - 1].split('-')
  const title = splitTitle.map((titles) => {
    return titles.charAt(0).toUpperCase() + titles.slice(1)
  })

  return (
    <Card bodyStyle={{ padding: "15px 30px" }} style={{ borderRadius: '10px' }}>

      <Row>
        <Col>
          <p style={{ marginBottom: '30px', fontSize: '1.2em', fontWeight: '500' }}>Data {title.join(' ')}</p>
        </Col>
      </Row>

      <Row align='middle' style={{ marginBottom: '30px' }}>
        <Col span={6}>
          <Input placeholder="Search..." style={{ height: '35px' }} />
        </Col>
        <Col span={5} offset={13}>
          <Button type="primary" style={{ height: '35px' }}>Tambah Data</Button>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Table columns={Column} dataSource={Data} />;
        </Col>
      </Row>

    </Card>
  )
}

export default DataPengguna