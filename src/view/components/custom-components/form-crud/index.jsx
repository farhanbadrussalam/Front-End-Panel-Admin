import {
  Button,
  Form,
  Input,
  InputNumber,
  Switch,
  Card,
} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const index = ({ permission }) => {

  return (
    <Card className='form-crud'>
      <p className='title'>{`${permission} Data User`}</p>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: 'small',
        }}
        size='small'
      >
        <Form.Item label="Nama">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Level">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Status" valuePropName="checked">
          <Switch danger />
        </Form.Item>
        <Form.Item label="Button">
          <Button danger style={{ marginRight: '15px' }} >Simpan</Button>
          <Link to='./..'>
            <Button danger >Batal</Button>
          </Link>
        </Form.Item>
      </Form>
    </Card>
  );
};


export default index