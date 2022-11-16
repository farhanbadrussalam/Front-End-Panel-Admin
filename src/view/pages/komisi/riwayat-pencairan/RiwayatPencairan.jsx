import { Row, Col } from 'antd'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './RiwayatPencairanColumn'

import { getDisbursed } from "../../../../api/disbursement/getDisbursed"

const MasterDisplay = () => {
  let { data, deletePesanan } = getDisbursed()

  data = data.map((d) => {
    return {
      id: d.id,
      request_date: d.request_date,
      disbursement_date: d.disbursement_date,
      name: d.disbursement_name,
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