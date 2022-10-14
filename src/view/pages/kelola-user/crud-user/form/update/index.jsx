import { Button, Form, Input, Space, message } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { putUser } from '../../../../../../api/kelola-user/putUser';
import { getOneUser } from '../../../../../../api/kelola-user/getOneUser';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id

  const [user, setUser] = useState(null)

  useEffect(async () => {
    setUser(await getOneUser(id))
  }, [])

  const onFinish = async (values) => {
    values.status = 1
    const success = await putUser(values, id)

    if (success.data.success) {
      message.success('Berhasil mengubah user')
      history.goBack()
    }
    console.log(success);
  };

  return (
    <CardForm title={title} >
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
          name="name"
        >
          <Input placeholder={user && user.data.data.name} />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
        >
          <Input placeholder={user && user.data.data.username} />
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
          <Input placeholder={user && user.data.data.email} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
        >
          <Input.Password minLength={8} />
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