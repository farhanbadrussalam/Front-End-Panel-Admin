import { Row, Col, Card, Button } from 'antd'
import { useState } from 'react'

import TableTitle from '../../components/custom-components/TableTitle'
import SearchTable from '../../components/custom-components/TableSearch'
import TableMaster from '../../components/custom-components/TableDisplay'

const MasterDisplay = () => {
  const [data, setData] = useState([])

  return (
    <Card bodyStyle={{ padding: "15px 20px" }} xs={{ padding: '100px' }} className="wedding-organizer">

      <Row>
        <Col>
          <TableTitle />
        </Col>
      </Row>

      <Row align='middle' justify='space-between' className='table-tools-container'>
        <Col lg={6} md={8} sm={10} span={12}>
          <SearchTable setData={setData} />
        </Col>
        <Col span={10} className='button-right' >
          <Button type="primary" size='small'>Tambah Data</Button>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <TableMaster data={data} />
        </Col>
      </Row>

    </Card>
  )
}

export default MasterDisplay