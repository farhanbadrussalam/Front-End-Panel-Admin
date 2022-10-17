import { Button, Form, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { getOneUser } from '../../../../../../api/kelola-user/getOneUser';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const [user, setUser] = useState(null)

  useEffect(async () => {
    setUser(await getOneUser(props.location.state.id))
  }, [])

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
          <p>{user && user.data.data.name}</p>
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
        >
          <p>{user && user.data.data.username}</p>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
        >
          <p>{user && user.data.data.email}</p>
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
        >
          <p>{user && user.data.data.status}</p>
        </Form.Item>

        <Form.Item
          label="Creator"
          name="creator"
        >
          <p>{user && user.data.data.creator}</p>
        </Form.Item>

        <Form.Item
          label="Editor"
          name="Editor"
        >
          <p>{user && user.data.data.creator}</p>
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