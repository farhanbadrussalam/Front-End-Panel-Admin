import { Row, Col } from 'antd'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './WoColumn'
import { getWeddingOrganizers } from '../../../../api/wedding-organizer/getWeddingOrganizers'

const WeddingOrganizer = () => {
  const { data } = getWeddingOrganizers()

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

export default WeddingOrganizer