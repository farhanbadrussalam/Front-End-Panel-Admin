import { Row, Col } from 'antd'

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'
import Column from './PesananColumn'

import { getOrders } from "../../../../api/pesanan"

const MasterDisplay = () => {
  let { data, deletePesanan } = getOrders()

  data = data.map((d) => {
    return {
      id: d.id,
      name: d.product ? d.product.name : "",
      price: d.price,
      wo: d.sales_order ? d.sales_order.bride.wedding_organizer.name : "",
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