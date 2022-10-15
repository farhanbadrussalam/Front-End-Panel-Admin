import { Row, Col } from 'antd'
import { getUsers } from '../../../../api/kelola-user/getUser'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './UserColumn'

const index = () => {
  const { data } = getUsers()
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

export default index