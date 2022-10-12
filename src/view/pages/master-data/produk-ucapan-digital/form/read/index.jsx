import { Button, Form, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`

  return (
    <CardForm title={title}>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        autoComplete="off"
        size='small'
      >
        <Form.Item
          label="Nama"
          name="nama"
        >
          <p>Nama User</p>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
        >
          <p>Email user</p>
        </Form.Item>

        <Form.Item
          label="Level"
          name="level"
        >
          <p>Level user</p>
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
        >
          <p>Status user</p>
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