import { Button, Form, Input, Space, Row, Col, message, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { Menus } from '../../data/Menu'
import { getOnePermission } from '../../../../../../api/permission/getOneRole';

const index = (props) => {
  const history = useHistory()
  const id = props.location.state.id
  const { data: role } = getOnePermission(id)

  const onFinish = async (values) => {
    console.log(values);
    //todo: mengambil nilai checkbox
    // if (success.data.success) {
    //   message.success('Berhasil menambahkan role')
    //   history.goBack()
    // }
    // else {
    //   message.error('Gagal menambahkan role')
    // }
  };

  const onFinishFailed = () => {
    message.error('Gagal mengubah role');
  };

  return (
    <CardForm title="Ubah Jenis Role">
      <Form
        name="basic"
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout='vertical'
        size='small'
        style={{ display: 'block' }}
        fields={[
          {
            name: ['name'],
            value: role && role?.name
          },
          {
            name: ['status'],
            value: role && role?.status
          },
          {
            name: ['role'],
            value: ["Ubah permission", "Buat permission"]
          },
        ]}
      >

        <Space direction='vertical' size='small' style={{ display: 'flex' }}>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                label="Nama"
                name="name"
                labelAlign='left'
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Nama di sistem"
                name="system_name"
                labelAlign='left'
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          {/* Checkbox */}
          {Menus?.map((menu) => (
            <Row>
              <Col span={24}>
                <Form.Item
                  label={menu.title}
                  name={menu.name}
                  labelAlign='left'
                  valuePropName="checked"
                >
                  <Checkbox.Group defaultValue={["Lihat user", "Ubah user"]} style={{ lineHeight: '32px', width: '100%' }}>
                    <Row>
                      {menu?.value?.map((value, i) => (
                        <Col span={6}>
                          <Checkbox key={i} value={value} style={{ lineHeight: '32px' }}>
                            {value}
                          </Checkbox>
                        </Col>
                      ))}
                    </Row >
                  </Checkbox.Group>
                </Form.Item>
              </Col>
            </Row>
          ))}

          {/* Button */}
          <Row>
            <Col>
              <Form.Item
                wrapperCol={{
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
            </Col>
          </Row>
        </Space>

      </Form>
    </CardForm >
  );
};


export default index