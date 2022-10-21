import { Button, Form, Input, Space, DatePicker, TimePicker, message } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { postBride } from '../../../../../../api/pengantin/postBride';

const index = () => {
  const history = useHistory()
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)

  // todo: menambahkan seleksi kondisi
  // useEffect(() => {
  //   if(wedding organizer belum dibuat maka jangan beri akses buat pengantin)
  // }, [])

  const onFinish = async (values) => {
    values.wedding_time = time
    values.wedding_date = date

    // todo : ubah id di bawah agar dropdown
    values.wedding_organizer_id = 1

    const response = await postBride(values)

    const success = response.data.success
    if (success) {
      message.success("Berhasil menambahkan pengantin")
      history.goBack()
    }
    else {
      message.error("Gagal menambahkan pengantin")
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
          label="Groom"
          name="groom"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan nama',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Bride"
          name="bride"
          rules={[
            {
              required: true,
              message: 'Mohon masukkan nama',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
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
          label="Address"
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
          label="Wedding Date"
          name="wedding_date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker
            onChange={(value, stringDate) => {
              setDate(stringDate)
            }}
            format="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item
          label="Wedding Time"
          name="wedding_time"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TimePicker
            onChange={(value, stringTime) => {
              setTime(stringTime)
            }}
            format="HH:mm"
          />
        </Form.Item>

        <Form.Item
          label="Wedding Address"
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
          label="Wedding Place"
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
          label="Wedding Organizer"
          name="wedding_organizer"
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