import { UploadOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getArticleDetail, updateArticle } from "../../../../../../api/artikel";
import { getArticleCategories } from "../../../../../../api/artikel/category";

import {
  Button,
  Form,
  Space,
  Input,
  Spin,
  Select,
  message,
  Upload,
} from "antd";

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
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    if (data.title) {
      setTitle(data.title);
      setDescription(data.description);
      setStatus(data.status);
      setArticle_category_id(data.article_category.id);
    }
  }, [data]);

  const thumbnailOnChangeHandler = (info) => {
    (i) => {
      if (i.fileList.length === 0) setThumbnail("");
      else {
        i.file.status = "done";

        const isJpgOrPng =
          i.file.type === "image/jpeg" || i.file.type === "image/png";
        if (!isJpgOrPng) {
          message.error("You can only upload JPG/PNG file!");
        }

        const isLt2M = i.file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error("Image must smaller than 2MB!");
        }

        if (!isJpgOrPng || !isLt2M) {
          i.fileList.splice(0, 1);
        } else {
          setThumbnail(i.file.originFileObj);
        }
      }
    };
  };

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

              <Form.Item label="Judul" name="title" initialValue={title}>
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

              <Form.Item label="Status" name="status" initialValue={status}>
                <Input
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  defaultValue={status}
                />
              </Form.Item>

              <Form.Item label="Thumbnail" key="thumbnail" name="thumbnail">
                <Upload
                  accept=".jpg,.png,.jpeg,.svg"
                  customRequest={undefined}
                  className="avatar-uploader"
                  listType="picture"
                  maxCount={1}
                  onChange={thumbnailOnChangeHandler}
                  // defaultFileList="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._cDbY1jbQDbrhOYmFqCW_wHaE7%26pid%3DApi&f=1&ipt=e52b2e67a5ba8032efb9b089154477fae36f40d0e918d25fa4cd366fc2db50e2&ipo=images"
                >
                  {!thumbnail && (
                    <Button icon={<UploadOutlined />}>
                      Upload file png atau jpg
                    </Button>
                  )}
                </Upload>
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
