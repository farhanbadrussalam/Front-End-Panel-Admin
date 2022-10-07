import { Row, Col, Card } from 'antd'
import { useState } from 'react'

import TableTitle from './TableTitle'
import ButtonAdd from './ButtonAdd'
import SearchTable from './SearchTable'
import TableMaster from './TableMaster'

const DataPengguna = () => {
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
          <ButtonAdd />
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

export default DataPengguna