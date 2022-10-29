import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getArticleDetail, updateArticle } from "../../../../../../api/artikel";
import { getArticleCategories } from "../../../../../../api/artikel/category";

import { Button, Form, Space, Input, Spin, Select, message } from "antd";

import CardForm from "../../../../../components/custom-components/form-crud/CardForm";

const index = (props) => {
  const history = useHistory();
  const { id } = useParams();

  const { data, error, loading } = getArticleDetail(id);
  const articleCategory = getArticleCategories();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [article_category_id, setArticle_category_id] = useState(0);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (data.title) {
      setTitle(data.title);
      setDescription(data.description);
      setStatus(data.status);
      setArticle_category_id(data.article_category.id);
    }
  }, [data]);

  const onFinish = async () => {
    const success = await updateArticle(
      { title, description, article_category_id, status },
      id
    );

    if (success.data.success) {
      message.success("Berhasil mengubah artikel");
      history.goBack();
    } else {
      message.error("Gagal mengubah artikel");
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert("Failed:", errorInfo);
  };

  return (
    <>
      <CardForm title={`Ubah Data Artikel ${data.title}`}>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          autoComplete="off"
          size="small"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {loading ? (
            <Spin size="large" />
          ) : (
            <>
              <Form.Item label="ID Artikel" name="id">
                <p>{data.id}</p>
              </Form.Item>

              <Form.Item label="Slug" name="slug">
                <p>{data.slug}</p>
              </Form.Item>

              <Form.Item
                label="Judul"
                name="title"
                initialValue={title}
                rules={[
                  {
                    required: true,
                    message: "Mohon masukkan judul!",
                  },
                ]}
              >
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  defaultValue={title}
                />
              </Form.Item>

              <Form.Item
                label="Deskripsi"
                name="description"
                initialValue={description}
                rules={[
                  {
                    required: true,
                    message: "Mohon masukkan deskripsi artikel!",
                  },
                ]}
              >
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  defaultValue={description}
                />
              </Form.Item>

              <Form.Item
                label="Kategori"
                name="article_category_id"
                initialValue={article_category_id}
                rules={[
                  {
                    required: true,
                    message: "Mohon masukkan kategori untuk artikel!",
                  },
                ]}
              >
                {articleCategory.loading ? (
                  <Select loading></Select>
                ) : (
                  <Select
                    defaultValue={article_category_id}
                    value={article_category_id}
                    onChange={(e) => setArticle_category_id(e)}
                  >
                    {articleCategory.data.map((d) => (
                      <Select.Option value={d.id}>{d.name}</Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>

              <Form.Item
                label="Status"
                name="status"
                initialValue={status}
                rules={[
                  {
                    required: true,
                    message: "Mohon masukkan judul!",
                  },
                ]}
              >
                <Input
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  defaultValue={status}
                />
              </Form.Item>

              <Form.Item label="Pembuat" name="creator">
                <p>{data.creator}</p>
              </Form.Item>

              <Form.Item label="Dibuat Pada" name="created_at">
                <p>{data.created_at}</p>
              </Form.Item>

              <Form.Item label="Editor" name="editor">
                <p>{data.editor}</p>
              </Form.Item>

              <Form.Item label="Diubah Pada" name="edited_at">
                <p>{data.updated_at}</p>
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
                    onClick={() => history.goBack()}
                  >
                    Batal
                  </Button>
                </Space>
              </Form.Item>
            </>
          )}
        </Form>
      </CardForm>
    </>
  );
};

export default index;
