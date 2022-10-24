import { Button, Form, Input, Space, message, Select } from "antd";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import CardForm from "../../../../../components/custom-components/form-crud/CardForm";
import { postArticle } from "../../../../../../api/artikel/postArticles";
import { getArticleCategories } from "../../../../../../api/artikel/category";

const index = () => {
  const history = useHistory();

  const { data, loading, error } = getArticleCategories();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [article_category_id, setArticle_category_id] = useState(1);

  const onFinish = async () => {
    const success = await postArticle({
      title,
      description,
      article_category_id,
    });
    if (success.data.success) {
      message.success("Berhasil menambahkan customer");
      history.goBack();
    } else {
      message.error("Gagal menambahkan customer");
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert("Failed:", errorInfo);
  };

  return (
    <CardForm title="Tambah data customer">
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
          label="Judul"
          name="title"
          rules={[
            {
              required: true,
              message: "Mohon masukkan judul!",
            },
          ]}
        >
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Deskripsi"
          name="description"
          rules={[
            {
              required: true,
              message: "Mohon masukkan deskripsi!",
            },
          ]}
        >
          <Input.TextArea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Kategori"
          name="article_category_id"
          rules={[
            {
              required: true,
              message: "Mohon masukkan judul!",
            },
          ]}
        >
          {loading ? (
            <Select style={{ width: 120 }} loading></Select>
          ) : (
            <Select
              defaultValue={article_category_id}
              style={{ width: 120 }}
              value={article_category_id}
              onChange={(e) => setArticle_category_id(e)}
            >
              {data.map((d) => (
                <Select.Option value={d.id}>{d.name}</Select.Option>
              ))}
            </Select>
          )}
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
            <Button danger htmlType="button" onClick={() => history.goBack()}>
              Batal
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </CardForm>
  );
};

export default index;
