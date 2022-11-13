import { Row, Col } from 'antd'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './RiwayatAdminColumn'

import { getCommissions } from "../../../../api/komisi/getCommissions"

const MasterDisplay = () => {
  let { data, deletePesanan } = getCommissions()

  data = data.map((d) => {
    return {
      id: d.id,
      date: d.created_at,
      name: d.name,
      type: d.type,
      nominal: d.nominal_get,
      wo: d.commission ? d.commission.wedding_organizer.name : "",
      deletePesanan: deletePesanan
    }
  })

  return (
    <TableCard >

      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} />
        </Col>
      </Row>

    </TableCard>
  )
}

export default MasterDisplay