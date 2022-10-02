import { Input, Row, Col, Button, Card, Table } from 'antd'
import React, { useEffect, useState } from 'react'

import Column from './dummyColumn'
import Data from './dummyData'

const DataPengguna = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(Data)
  }, [])

  const userSearch = (input) => {
    if (input == '') return setData(Data)

    const filteredData = Data.filter((person) => {
      return person.name.toLowerCase().includes(input.toLowerCase())
    })

    setData(filteredData)
  }

  return (
    <Card bodyStyle={{ padding: "15px 20px" }} xs={{ padding: '100px' }} style={{ borderRadius: '10px' }}>

      <Row>
        <Col>
          <p style={{ marginBottom: '30px', fontSize: '1.2em', fontWeight: '500' }}>Data Pengguna</p>
        </Col>
      </Row>

      <Row align='middle' style={{ marginBottom: '30px' }} justify='space-between'>
        <Col lg={6} span={12}>
          <Input placeholder="Search..." style={{ height: '35px' }} onChange={(value) => userSearch(value.target.value)} />
        </Col>
        <Col lg={5} span={9} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" style={{ height: '35px', width: '100%', maxWidth: '150px' }}>Tambah Data</Button>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Table columns={Column} dataSource={data} scroll={{ x: 400 }} />;
        </Col>
      </Row>

    </Card>
  )
}

export default DataPengguna