import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getProductCategories } from "../../../../../../api/produk-wo/product-categories/getProductCategories";
// import { postProduct } from "../../../../../../api/produk-wo/createWOProduct";

import { Button, Form, Input, Space, message, Select, InputNumber } from "antd";
import CardForm from "../../../../../components/custom-components/form-crud/CardForm";

const index = () => {
  const history = useHistory();
  const { userid } = useParams();

  // controlled form
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(1);
  const [description, setDescription] = useState();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(typeof price);
  }, [price]);

  const onFinish = async (values) => {
    const success = await postProduct({
      name: name,
      price: price,
      product_category_id: category,
      description: description,
    });
    if (success.data.success) {
      message.success("Berhasil menambahkan user");
      history.goBack();
    } else {
      message.error("Gagal menambahkan user");
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert("Failed:", errorInfo);
  };

  const post = async () => {
    await postProduct({
      name: name,
      product_category_id: category,
      price: price,
      description: description,
    });
  };

  useState(async () => {
    await getProductCategories().then((data) => setCategories(data));
  });

  return (
    <CardForm title="Tambah Data User">
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nama"
          name="name"
          rules={[
            {
              required: true,
              message: "Mohon masukkan nama!",
            },
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              type: "number",
              message: "Mohon masukkan dengan format angka!",
            },
            {
              required: true,
              message: "Mohon masukkan harga!",
            },
          ]}
        >
          <InputNumber
            min={0}
            max={1000000000000}
            prefix="Rp. "
            style={{ width: "100%" }}
            value={price}
            onChange={(value) => setPrice(value)}
          />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Mohon masukkan kategori!",
            },
          ]}
          initialValue={category}
        >
          <Select
            defaultValue={category}
            value={category}
            style={{ width: 200 }}
            onChange={(value) => setCategory(value)}
          >
            {categories.map((category) => {
              return <Option value={category.id}>{category.name}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
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
              onClick={() =>
                history.replace(`/admin/produk-ucapan-user/${userid}`)
              }
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
