import { Button, Form, Input, Space, message, Row, Col, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { Menus } from '../../data/Menu'

const index = () => {
  const history = useHistory()

  const onFinish = async (values) => {
    // if (success.data.success) {
    //   message.success('Berhasil menambahkan role')
    //   history.goBack()
    // }
    // else {
    //   message.error('Gagal menambahkan role')
    // }
  };

  const onFinishFailed = (errorInfo) => {
    alert('Failed:', errorInfo);
  };

  return (
    <CardForm title="Tambah Jenis Role">
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
      >

        <Space direction='vertical' size='small' style={{ display: 'flex' }}>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                label="Nama"
                name="name"
                labelAlign='left'
                rules={[
                  {
                    required: true,
                    message: 'Mohon masukkan nama!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Nama di sistem"
                name="system_name"
                labelAlign='left'
                rules={[
                  {
                    required: true,
                  },
                ]}
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
                >
                  <Checkbox.Group defaultChecked={true} style={{ lineHeight: '32px', width: '100%' }}>
                    <Row>
                      {menu?.value?.map((value, i) => (
                        <Col span={6}>
                          <Checkbox key={i} value={value} defaultChecked={true} style={{ lineHeight: '32px' }}>
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