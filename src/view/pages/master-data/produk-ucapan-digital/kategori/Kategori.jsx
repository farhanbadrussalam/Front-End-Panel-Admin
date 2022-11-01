import { Row, Col } from 'antd'

import TableDisplay from '../../../../components/custom-components/TableDisplay'
import TableCard from '../../../../components/custom-components/TableCard'
import Column from './kategoriCol'
import { getProductCategory2 } from '../../../../../api/produk-wo/product-categories/getProductCategory2'

const ProdukUcapanDigital = () => {
  let { data, deleteProduct } = getProductCategory2()

  data = data?.map((product) => {
    return {
      ...product,
      deleteProduct: deleteProduct,
    }
  })

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

export default ProdukUcapanDigital