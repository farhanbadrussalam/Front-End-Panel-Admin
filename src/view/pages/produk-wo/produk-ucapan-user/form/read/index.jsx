import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Input, Form, Space, Button } from "antd";
import CardForm from "../../../../../components/custom-components/form-crud/CardForm";

import "./style.css";

const index = (props) => {
  const history = useHistory();
  const id = props.location.state.id;
  const data = props.location.state.data;
  console.log(data);
  const title = `${props.location.state.permission} Data ${props.location.state.dataType}`;

  return (
    <CardForm title={title}>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        autoComplete="off"
        disabled={true}
      >
        <Form.Item label="ID" name="id">
          <Input
            defaultValue={id}
            className="custom-input-produk-ucapan-user"
          />
        </Form.Item>

        <Form.Item label="Nama" name="name">
          <Input
            defaultValue={data.name}
            className="custom-input-produk-ucapan-user"
          />
        </Form.Item>

        <Form.Item label="Harga" name="price">
          <Input
            defaultValue={data.price}
            className="custom-input-produk-ucapan-user"
          />
        </Form.Item>

        <Form.Item label="Deskripsi" name="description">
          <Input
            defaultValue={data.description}
            className="custom-input-produk-ucapan-user"
          />
        </Form.Item>

        <Form.Item label="Kategori Produk" name="product_category">
          <Input
            defaultValue={data.product_category}
            className="custom-input-produk-ucapan-user"
          />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Input
            defaultValue={data.status}
            className="custom-input-produk-ucapan-user"
          />
        </Form.Item>

        <Form.Item label="Pengantin" name="bride">
          <Input className="custom-input-produk-ucapan-user" />
        </Form.Item>

        <Form.Item label="WO" name="wo">
          <Input className="custom-input-produk-ucapan-user" />
        </Form.Item>
      </Form>

      <Button danger onClick={() => history.goBack()}>
        Kembali
      </Button>
    </CardForm>
  );
};

export default index;
