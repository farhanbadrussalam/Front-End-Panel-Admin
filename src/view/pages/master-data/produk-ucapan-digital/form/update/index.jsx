import { Button, Form, Space, Input, InputNumber, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { getOneProduct } from '../../../../../../api/produk-wo/getOneProduct';
import { getProductCategory2 } from '../../../../../../api/produk-wo/product-categories/getProductCategory2';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id

  const { data: product } = getOneProduct(id)
  const { data: categories } = getProductCategory2()

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
        fields={[
          {
            name: 'name',
            value: product?.name
          },
          {
            name: 'product_category_id',
            value: product?.product_category?.name
          },
          {
            name: 'price',
            value: product?.price
          },
          {
            name: 'description',
            value: product?.description
          },
        ]}
      >
        <Form.Item
          label="Nama Produk"
          name="name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kategori Produk"
          name="product_category_id"
        >
          <Select
            style={{
              width: 200,
            }}
          >
            {categories?.map((category) => (
              <Select.Option value={category?.id}>{category?.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Harga Produk"
          name="price"
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Deskripsi Produk"
          name="description"
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 4,
          }}
        >
          <Space size='middle'>
            <Button type='primary' danger htmlType="submit">
              Simpan
            </Button>
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