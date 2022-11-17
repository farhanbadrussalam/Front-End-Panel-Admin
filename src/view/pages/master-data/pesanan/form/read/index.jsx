import { Button, Form, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';

import { getPesanan } from "../../../../../../api/pesanan/getPesanan"

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id
  const { data, error, refetch } = getPesanan(id)

  return (
    <CardForm title={title}>
      <Form
        name="basic"
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 14,
        }}
        autoComplete="off"
        size='small'
      >
        <Form.Item
          label="Voucher Code"
          name="voucher code"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan kode voucher',
            },
          ]}
        >
          <p>{data && data.sales_order?.code}</p>
        </Form.Item>

        <Form.Item
          label="Voucher Nominal"
          name="voucher nominal"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan nominal voucher',
            },
          ]}
        >
          <p>{data && data.sales_order?.voucher_nominal}</p>
        </Form.Item>

        <Form.Item
          label="Bride"
          name="bride"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan Pengantin Wanita',
            },
          ]}
        >
          <p>{data && data.sales_order?.bride.bride}</p>
        </Form.Item>

        <Form.Item
          label="Groom"
          name="groom"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan Pengantin Pria',
            },
          ]}
        >
          <p>{data && data.sales_order?.bride.groom}</p>
        </Form.Item>

        <Form.Item
          label="WO Name"
          name="wo name"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan nama WO',
            },
          ]}
        >
          <p>{data && data.sales_order?.bride.wedding_organizer.name}</p>
        </Form.Item>

        <Form.Item
          label="WO Email"
          name="wo email"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan email WO',
            },
          ]}
        >
          <p>{data && data.sales_order?.bride.wedding_organizer.email}</p>
        </Form.Item>

        <Form.Item
          label="WO Website"
          name="wo website"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan website WO',
            },
          ]}
        >
          <p>{data && data.sales_order?.bride.wedding_organizer.website}</p>
        </Form.Item>

        <Form.Item
          label="WO Address"
          name="wo address"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan address WO',
            },
          ]}
        >
          <p>{data && data.sales_order?.bride.wedding_organizer.address}</p>
        </Form.Item>

        <Form.Item
          label="Product Name"
          name="product name"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan nama produk',
            },
          ]}
        >
          <p>{data && data.product?.name}</p>
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="product price"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan price Product',
            },
          ]}
        >
          <p>{data && data.product?.price}</p>
        </Form.Item>

        <Form.Item
          label="Deskripsi Produk"
          name="product deskripsi"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan deskripsi Product',
            },
          ]}
        >
          <p>{data && data.product?.description}</p>
        </Form.Item>

        <Form.Item
          label="Product Status"
          name="product status"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan status product',
            },
          ]}
        >
          <p>{data && (data.product?.status == 1 ? "Aktif" : "Nonaktif")}</p>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 4,
          }}
        >
          <Space size='middle'>
            <Button danger htmlType="button" onClick={() => history.goBack()}>
              Kembali
            </Button>
          </Space>
        </Form.Item>

      </Form>
    </CardForm>
  );
};


export default index