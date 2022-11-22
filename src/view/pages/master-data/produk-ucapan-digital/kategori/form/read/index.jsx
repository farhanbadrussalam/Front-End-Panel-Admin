import { Button, Form, Space } from "antd";
import { useHistory } from "react-router-dom";
import React from "react";
import CardForm from "../../../../../../components/custom-components/form-crud/CardForm";
import { getOneProductCategory } from "../../../../../../../api/produk/product-categories/getOneProductCategory";

const index = (props) => {
  const history = useHistory();
  const title = `${props.location.state.permission} Data ${props.location.state.data}`;
  const id = props.location.state.id;

  const { data: category } = getOneProductCategory(id);

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
        labelAlign="left"
        colon={false}
      >
        <Form.Item label="Nama Kategori" name="name">
          <p>{category?.name}</p>
        </Form.Item>

        <Form.Item label="Deskripsi" name="description">
          <p>{category?.description}</p>
        </Form.Item>

        <Form.Item label="Status" name="status">
          <p>{category?.status == 1 ? "Aktif" : "Non-Aktif"}</p>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 4,
          }}
        >
          <Space size="middle">
            <Button
              danger
              htmlType="button"
              onClick={() => history.push("/admin/kategori-produk-ucapan-digital")}
            >
              Batal
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </CardForm>
  );
};

export default index;
