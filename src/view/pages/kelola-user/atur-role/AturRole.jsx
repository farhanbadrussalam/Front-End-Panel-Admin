import { Col, Row } from 'antd'
import React from 'react'
import TableCard from '../../../components/custom-components/TableCard'
import TableDisplay from '../../../components/custom-components/TableDisplay'
import Column from './RoleColumn'
import { getRoles } from '../../../../api/role/getRoles'

const AturRole = () => {

  let { data, deleteProduct } = getRoles()
  data?.map((value) => (
    { ...value, deleteProduct: deleteProduct }
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

export default AturRole

// INSERT INTO `sub_menus` (`id`, `menu_id`, `name`, `route`, `url`, `status`, `creator`, `editor`, `created_at`, `updated_at`) VALUES (NULL, '10', 'Buat kupon', '/admin/kupon/create', '/admin/kupon/create', '1', 'Jagad123', 'Jagad123', '2022-10-21 19:00:44', '2022-10-11 11:10:49'), (NULL, '10', 'Lihat kupon', '/admin/kupon/detail/userid:', '/admin/kupon/detail/userid:', '1', 'Jagad123', '', '2022-11-10 21:31:46', '2022-11-10 21:31:46'), (NULL, '10', 'Ubah kupon', '/admin/kupon/edit/userid:', '/admin/kupon/edit/userid:', '1', 'Jagad123', 'Jagad123', '2022-10-21 19:00:44', '2022-10-11 11:10:49'), (NULL, '10', 'Hapus kupon', 'delete kupon', 'delete kupon', '1', 'Jagad123', '', '2022-11-10 21:31:46', '2022-11-10 21:31:46');

// INSERT INTO `sub_menus` (`id`, `menu_id`, `name`, `route`, `url`, `status`, `creator`, `editor`, `created_at`, `updated_at`) VALUES (NULL, '9', 'Buat produk ucapan', '/admin/produk-ucapan-digital/create', '/admin/produk-ucapan-digital/create', '1', 'Jagad123', 'Jagad123', '2022-10-21 19:00:44', '2022-10-11 11:10:49'), (NULL, '9', 'Lihat produk ucapan', '/admin/produk-ucapan-digital/detail/userid:', '/admin/produk-ucapan-digital/detail/userid:', '1', 'Jagad123', '', '2022-11-10 21:31:46', '2022-11-10 21:31:46'), (NULL, '9', 'Ubah produk ucapan', '/admin/produk-ucapan-digital/edit/userid:', '/admin/produk-ucapan-digital/edit/userid:', '1', 'Jagad123', 'Jagad123', '2022-10-21 19:00:44', '2022-10-11 11:10:49'), (NULL, '9', 'Hapus produk ucapan', 'delete produk ucapan', 'delete produk ucapan', '1', 'Jagad123', '', '2022-11-10 21:31:46', '2022-11-10 21:31:46');