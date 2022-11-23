import { Button, Form, Input, InputNumber, Space, message, Select } from "antd";
import { useHistory } from "react-router-dom";
import React from "react";
import CardForm from "../../../../../../components/custom-components/form-crud/CardForm";
import { postProduct } from "../../../../../../../api/produk/postProduct";
import { getProductCategories2 } from "../../../../../../../api/produk/product-categories/getProductCategories2";

const index = () => {
  const history = useHistory();
  const { data: categories } = getProductCategories2();

  const onFinish = async (values) => {
    const success = await postProduct(values);

    if (success) {
      message.success("Berhasil menambahkan produk");
      history.push("/admin/produk-ucapan-digital");
    } else {
      message.error("Gagal menambahkan produk");
    }
  };

  return (
    <CardForm title="Tambah data produk ucapan digital">
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
        labelAlign="left"
        colon={false}
      >
        <Form.Item
          label="Nama Produk"
          name="name"
          rules={[
            {
              required: true,
              message: "Mohon masukkan nama produk",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kategori Produk"
          name="product_category_id"
          rules={[
            {
              required: true,
              message: "Mohon pilih kategori produk",
            },
          ]}
        >
          <Select
            style={{
              width: 200,
            }}
          >
            {categories?.map((category) => (
              <Select.Option value={category?.id}>
                {category?.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Harga Produk"
          name="price"
          rules={[
            {
              required: true,
              message: "Mohon tentukan harga produk",
            },
          ]}
        >
          <InputNumber style={{ width: "200px" }}
            formatter={(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\Rp\s?|(,*)/g, '')}
          />
        </Form.Item>

        <Form.Item
          label="Deskripsi Produk"
          name="description"
          rules={[
            {
              required: true,
              message: "Mohon tentukan harga produk",
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
          <Space size="middle">
            <Button type="primary" danger htmlType="submit">
              Simpan
            </Button>
            <Button
              danger
              htmlType="button"
              onClick={() => history.push("/admin/produk-ucapan-digital")}
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
