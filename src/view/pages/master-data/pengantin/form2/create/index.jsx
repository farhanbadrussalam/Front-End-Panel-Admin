import { Button, Form, Input, Space, message, DatePicker, TimePicker } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { postBride } from '../../../../../../api/pengantin/postBride';

const index = () => {
  const history = useHistory()
  const [time, setTime] = useState(null)
  const [date, setDate] = useState(null)

  const onFinish = async (values) => {
    // todo hapus values
    values.wedding_organizer_id = 1
    values.wedding_date = date
    values.wedding_time = time

    const success = await postBride(values)
    if (success.data.success) {
      message.success('Berhasil menambahkan pengantin')
      history.goBack()
    }
    else {
      message.error('Gagal menambahkan pengantin')
    }
  };

  return (
    <CardForm title="Tambah Data Pengantin">
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
      >
        <Form.Item
          label="Pengantin Pria"
          name="groom"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan nama pengantin pria',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Pengantin Wanita"
          name="bride"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan nama pengantin wanita',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nomor Telp"
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
          label="Tanggal Pernikahan"
          name="wedding_date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker format='YYYY-MM-DD' placeholder='Tanggal'
            onChange={(value, dateString) => {
              setDate(dateString);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Waktu Pernikahan"
          name="wedding_time"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TimePicker format='HH:mm' placeholder='Waktu'
            onChange={(value, timeString) => {
              setTime(timeString);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Alamat Pernikahan"
          name="wedding_address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tempat Pernikahan"
          name="wedding_place"
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