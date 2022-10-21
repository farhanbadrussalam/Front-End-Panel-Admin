import { Button, Form, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { getOneWeddingOrganizer } from '../../../../../../api/wedding-organizer/getOneWeddingOrganizer';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id

  const { data: wo } = getOneWeddingOrganizer(id)

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
          label="Nama WO"
          name="nama"
        >
          <p>{wo?.name}</p>
        </Form.Item>

        <Form.Item
          label="Email WO"
          name="email"
        >
          <p>{wo?.email}</p>
        </Form.Item>

        <Form.Item
          label="No telp WO"
          name="phone"
        >
          <p>{wo?.phone}</p>
        </Form.Item>

        <Form.Item
          label="Website WO"
          name="website"
        >
          <p>{wo?.website}</p>
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