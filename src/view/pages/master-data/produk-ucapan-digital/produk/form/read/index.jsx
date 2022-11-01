import { Button, Form, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../../components/custom-components/form-crud/CardForm';
import { getOneProduct } from '../../../../../../../api/produk-wo/getOneProduct';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id

  const { data: product } = getOneProduct(id)

  return (
    <CardForm title={title}>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Nama Produk"
          name="name"
        >
          <p>{product?.name}</p>
        </Form.Item>

        <Form.Item
          label="Kategori Produk"
          name="product_category_id"
        >
          <p>{product?.product_category?.name}</p>
        </Form.Item>

        <Form.Item
          label="Harga Produk"
          name="price"
        >
          <p>{product?.price}</p>
        </Form.Item>

        <Form.Item
          label="Deskripsi Produk"
          name="description"
        >
          <p>{product?.description}</p>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 4,
          }}
        >
          <Space size='middle'>
            <Button danger htmlType="button" onClick={() => history.push('/admin/produk-ucapan-digital')}>
              Batal
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </CardForm>
  );
};


export default index