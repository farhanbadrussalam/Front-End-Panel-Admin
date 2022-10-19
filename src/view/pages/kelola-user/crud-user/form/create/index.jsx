import { Button, Form, Input, InputNumber, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';

const index = () => {
  const history = useHistory()

  const onFinish = (values) => {
    alert('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    alert('Failed:', errorInfo);
  };

  return (
    <CardForm title="Tambah data . . . .">
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nama"
          name="nama"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan nama!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Mohon masukkan email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Level"
          name="level"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
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