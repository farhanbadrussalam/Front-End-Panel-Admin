import { Button, Form, Input, Space, message } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { postCustomer } from '../../../../../../api/customer/postCustomer';

const index = () => {
  const history = useHistory()

  const onFinish = async (values) => {
    values.wedding_organizer_id = 1

    const success = await postCustomer(values)
    if (success.data.success) {
      message.success('Berhasil menambahkan customer')
      history.goBack()
    }
    else {
      message.error('Gagal menambahkan customer')
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert('Failed:', errorInfo);
  };

  return (
    <CardForm title="Tambah data customer">
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
          name="name"
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
          label="Nomor telp"
          name="phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Alamat"
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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