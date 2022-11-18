import { Row, Col } from 'antd'
import { getUsers } from '../../../../api/kelola-user/getUser'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './UserColumn'

const index = () => {
  let { data, deleteUser } = getUsers()

  data = data?.map((values) => (
    { ...values, deleteUser: deleteUser }
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

export default index