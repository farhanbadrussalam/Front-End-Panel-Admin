import { Button, Form, Input, InputNumber, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`

  const onFinish = (values) => {
    alert('Success:', values);
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
      >
        <Form.Item
          label="Nama"
          name="nama"
        >
          <Input value="Nama user" placeholder='Nama user' />
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
          <Input value="Email user" placeholder='Email user' />
        </Form.Item>

        <Form.Item
          label="Level"
          name="level"
        >
          <InputNumber value="Value user" placeholder='Value user' />
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