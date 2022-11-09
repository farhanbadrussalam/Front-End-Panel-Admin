import { Col, Row } from 'antd'
import React from 'react'
import TableCard from '../../../components/custom-components/TableCard'
import TableDisplay from '../../../components/custom-components/TableDisplay'
import Column from './RoleColumn'
import { getRoles } from '../../../../api/role/getRoles'

const AturRole = () => {

  let { data, deleteProduct } = getRoles()
  data?.map((value) => (
    { ...value, deleteProduct: deleteProduct }
  ))

  return (
    <TableCard >
      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} addButton={true} />
        </Col>
      </Row>
    </TableCard>
  )
}

export default AturRole