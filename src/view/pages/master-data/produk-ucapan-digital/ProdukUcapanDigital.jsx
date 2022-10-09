import { Row, Col, Card, Button } from 'antd'
import { useState } from 'react'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './ProductColumn'
import Data from './ProductData'

const MasterDisplay = () => {
  const [data, setData] = useState([])

  return (
    <TableCard setData={setData} Data={Data} >

      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} />
        </Col>
      </Row>

    </TableCard>
  )
}

export default MasterDisplay