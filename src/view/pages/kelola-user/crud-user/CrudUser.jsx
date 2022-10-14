import { Row, Col } from 'antd'
import { useEffect, useState } from 'react'
import { getUsers } from '../../../../api/kelola-user/getUser'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './UserColumn'

const index = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    setData(await getUsers())
  }, [])

  return (
    <TableCard >
      <Row>
        <Col span={24}>
          <TableDisplay setData={setData} data={data} column={Column} addButton={true} />
        </Col>
      </Row>
    </TableCard>
  )
}

export default index