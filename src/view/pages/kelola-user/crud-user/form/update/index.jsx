import { Button, Form, Input, Space, message, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { putUser } from '../../../../../../api/kelola-user/putUser';
import { getOneUser } from '../../../../../../api/kelola-user/getOneUser';
import { getRoles } from '../../../../../../api/role/getRoles';
import { getWeddingOrganizers } from '../../../../../../api/wedding-organizer/getWeddingOrganizers';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id

  const { data: user } = getOneUser(id)
  const { data: roles } = getRoles()
  const { data: wos } = getWeddingOrganizers()

  const onFinish = async (values) => {
    const success = await putUser(values, id)

    if (success.data.success) {
      message.success('Berhasil mengubah data user')
      history.goBack()
    }
    else message.error('Gagal mengubah data user')
  };

  return (
    <CardForm title={title} >
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        onFinish={onFinish}
        autoComplete="off"
        colon={false}
        labelAlign="left"
        fields={[
          {
            name: "name",
            value: user?.name
          },
          {
            name: "username",
            value: user?.username
          },
          {
            name: "email",
            value: user?.email
          },
          {
            name: "access_menu_id",
            value: user?.access_menu_id
          },
          {
            name: "wo",
            value: user?.wedding_organizer?.id
          },
          {
            name: "status",
            value: user?.status
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
          label="Username"
          name="username"
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
          label="Password"
          name="password"
        >
          <Input.Password minLength={8} />
        </Form.Item>

        {/* <Form.Item
          label="Tipe"
          name="type"
        >
          <Select
            style={{
              width: 200,
            }}
          >
            <Option value={1}>Admin</Option>
            <Option value={2}>Customer</Option>
          </Select>
        </Form.Item> */}

        <Form.Item
          label="Wedding Organizer"
          name="wo"
        >
          <Select
            style={{
              width: 200,
            }}
          >
            {wos?.map((wo, i) => (
              <Option key={i} value={wo?.id}>{wo?.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Role"
          name="access_menu_id"
        >
          <Select
            style={{
              width: 200,
            }}
          >
            {roles?.map((role, i) => (
              <Option key={i} value={role?.id}>{role?.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
        >
          <Select
            style={{
              width: 200,
            }}
          >
            <Option value={1}>Aktif</Option>
            <Option value={2}>Non Aktif</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
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