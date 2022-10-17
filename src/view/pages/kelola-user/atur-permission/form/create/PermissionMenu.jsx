import { Checkbox, Col, Row } from 'antd'
import React from 'react'

const PermissionMenu = () => {
  return (
    <Row>
      <Col span={6}>
        <Checkbox value="lihat_pengguna" style={{ lineHeight: '32px' }}>
          Lihat Pengguna
        </Checkbox>
      </Col>
      <Col span={6}>
        <Checkbox value="buat_pengguna" style={{ lineHeight: '32px' }}>
          Buat Pengguna
        </Checkbox>
      </Col>
      <Checkbox value="ubah_pengguna" style={{ lineHeight: '32px' }}>
        Ubah Pengguna
      </Checkbox>
      <Col span={6}>
        <Checkbox value="hapus_pengguna" style={{ lineHeight: '32px' }}>
          Hapus Pengguna
        </Checkbox>
      </Col>
      <Col span={6}>
        <Checkbox value="hapus_pengguna" style={{ lineHeight: '32px' }}>
          Hapus Pengguna
        </Checkbox>
      </Col>
      <Col span={6}>
        <Checkbox value="hapus_pengguna" style={{ lineHeight: '32px' }}>
          Hapus Pengguna
        </Checkbox>
      </Col>
    </Row>
  )
}

export default PermissionMenu