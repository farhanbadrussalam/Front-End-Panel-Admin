import { Row, Col } from 'antd'
import { useState } from 'react'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './PengantinColumn'
import Data from './PengantinData'

const MasterDisplay = () => {
  const [data, setData] = useState([])

  return (
    <TableCard setData={setData} Data={Data} addButton={true} >

      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} />
        </Col>
      </Row>

    </TableCard>
  )
}

export default MasterDisplay