import { Row, Col } from 'antd'
import { getCustomers } from '../../../../api/customer/getCustomers'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './CustomerColumn'

const MasterDisplay = () => {
  const { data } = getCustomers()

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

export default MasterDisplay