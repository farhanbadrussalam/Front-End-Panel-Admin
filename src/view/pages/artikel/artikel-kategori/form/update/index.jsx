import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  updateArticleCategory,
  getArticleCategoryDetail,
} from "../../../../../../api/artikel/category";

import { Button, Form, Space, Input, Spin, Select, message } from "antd";

import CardForm from "../../../../../components/custom-components/form-crud/CardForm";

const index = (props) => {
  const history = useHistory();
  const { id } = useParams();

  const { data, error, loading } = getArticleCategoryDetail(id);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (data.name) {
      setName(data.name);
      setDescription(data.description);
      setStatus(data.status);
    }
  }, [data]);

  const onFinish = async () => {
    const success = await updateArticleCategory(
      { title, description, status },
      id
    );

    if (success.data.success) {
      message.success("Berhasil mengubah kategori artikel");
      history.goBack();
    } else {
      message.error("Gagal mengubah kategori artikel");
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert("Failed:", errorInfo);
  };

  return (
    <>
      <CardForm title={`Ubah Data Kategori Artikel ${data.name}`}>
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
                label="Nama"
                name="name"
                initialValue={name}
                rules={[
                  {
                    required: true,
                    message: "Mohon masukkan judul!",
                  },
                ]}
              >
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={name}
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
