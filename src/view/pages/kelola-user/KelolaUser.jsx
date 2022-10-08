import { Row, Col, Card, Button } from 'antd'
import { useState } from 'react'

import TableDisplay from '../../components/custom-components/TableDisplay'
import TableCard from '../../components/custom-components/TableCard'
import Column from '../MasterColumn'

const index = () => {
  const [data, setData] = useState([])

  return (
    <TableCard setData={setData}>

      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} />
        </Col>
      </Row>

    </TableCard>
  )
}

export default index