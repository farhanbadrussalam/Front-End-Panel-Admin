import { Button, Form, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import CardForm from '../../../../../components/custom-components/form-crud/CardForm';
import { getOneBride } from '../../../../../../api/pengantin/getOneBride';

const index = (props) => {
  const history = useHistory()
  const title = `${props.location.state.permission} Data ${props.location.state.data}`
  const id = props.location.state.id
  const { data: bride } = getOneBride(id)

  return (
    <CardForm title={title}>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        autoComplete="off"
        size='small'
      >
        <Form.Item
          label="Groom"
          name="groom"
        >
          <p>{bride?.groom}</p>
        </Form.Item>

        <Form.Item
          label="Bride"
          name="bride"
        >
          <p>{bride?.bride}</p>
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
        >
          <p>{bride?.phone}</p>
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
        >
          <p>{bride?.address}</p>
        </Form.Item>

        <Form.Item
          label="Wedding Date"
          name="wedding_date"
        >
          <p>{bride?.wedding_date}</p>
        </Form.Item>

        <Form.Item
          label="Wedding Time"
          name="wedding_time"
        >
          <p>{bride?.wedding_time}</p>
        </Form.Item>

        <Form.Item
          label="Wedding Address"
          name="wedding_address"
        >
          <p>{bride?.wedding_address}</p>
        </Form.Item>

        <Form.Item
          label="Wedding Place"
          name="wedding_place"
        >
          <p>{bride?.wedding_place}</p>
        </Form.Item>

        <Form.Item
          label="Wedding Organizer"
          name="wedding_organizer"
        >
          <p>{bride?.wedding_organizer?.name}</p>
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
        >
          <p>{bride?.status}</p>
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