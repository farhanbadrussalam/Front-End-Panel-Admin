import { Button, Form, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { getOneCustomer } from '../../../../../../api/customer/getOneCustomer';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id

  const { data: customer } = getOneCustomer(id)

  return (
    <CardForm title={title}>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        autoComplete="off"
        size='small'
      >
        <Form.Item
          label="Nama"
          name="nama"
        >
          <p>{customer && customer.name}</p>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
        >
          <p>{customer && customer.email}</p>
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
        >
          <p>{customer && customer.phone}</p>
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
        >
          <p>{customer && customer.address}</p>
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
        >
          <p>{customer && customer.status}</p>
        </Form.Item>
        <Form.Item

          label="Wedding Organizer"
          name="wedding-organizer"
        >
          <p>{customer && customer.wedding_organizer.name}</p>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
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