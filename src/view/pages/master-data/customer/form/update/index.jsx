import { Button, Form, Input, InputNumber, Space, message, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { getOneCustomer } from '../../../../../../api/customer/getOneCustomer';
import { putCostumer } from '../../../../../../api/customer/putCustomer';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id

  const { data: customer } = getOneCustomer(id)

  const onFinish = async (values) => {
    const success = await putCostumer(values, id)
    if (success) {
      message.success('Berhasil mengubah data customer')
      history.goBack()
    }
    else {
      message.error('Gagal mengubah data customer')
    }
  };

  return (
    <CardForm title={title}>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        onFinish={onFinish}
        autoComplete="off"
        fields={[
          {
            name: 'name',
            value: customer?.name
          },
          {
            name: 'email',
            value: customer?.email
          },
          {
            name: 'phone',
            value: customer?.phone
          },
          {
            name: 'address',
            value: customer?.address
          },
          {
            name: 'status',
            value: customer?.status
          },
        ]}
      >
        <Form.Item
          label="Nama"
          name="name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
        >
          <Select style={{ width: "200px" }}>
            <Select.Option value={1}>Aktif</Select.Option>
            <Select.Option value={2}>Non Aktif</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 4,
          }}
        >
          <Space size='middle'>
            <Button type='primary' danger htmlType="submit">
              Simpan
            </Button>
            <Button danger htmlType="button" onClick={() => history.goBack()}>
              Batal
            </Button>
          </Space>
        </Form.Item>

      </Form>
    </CardForm>
  );
};


export default index