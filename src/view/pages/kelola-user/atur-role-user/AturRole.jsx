import { Col, Row } from 'antd'
import React, { useState } from 'react'
import TableCard from '../../../components/custom-components/TableCard'
import TableDisplay from '../../../components/custom-components/TableDisplay'
import Data from './RoleData'
import Column from './RoleColumn'

const AturRole = () => {
  const [data, setData] = useState([])

  return (
    <TableCard setData={setData} Data={Data}>

      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} />
        </Col>
      </Row>

    </TableCard>
  )
}

export default AturRole