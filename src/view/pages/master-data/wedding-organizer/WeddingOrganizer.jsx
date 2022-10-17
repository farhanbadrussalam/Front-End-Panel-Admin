import { Row, Col } from 'antd'
import { useState } from 'react'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './WoColumn'
import Data from './WoData'

const MasterDisplay = () => {
  const [data, setData] = useState([])

  return (
    <TableCard>

      <Row>
        <Col span={24}>
          <TableDisplay setData={setData} data={data} column={Column} addButton={true} />
        </Col>
      </Row>

    </TableCard>
  )
}

export default MasterDisplay