import { Row, Col } from 'antd'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './PengantinColumn'
import { getBrides } from '../../../../api/pengantin/getBrides'

const MasterDisplay = () => {
  let { data, deleteBride } = getBrides()
  data = data?.map((value) => ({ ...value, deleteBride: deleteBride }))

  return (
    <TableCard>
      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} addButton />
        </Col>
      </Row>
    </TableCard>
  )
}

export default MasterDisplay