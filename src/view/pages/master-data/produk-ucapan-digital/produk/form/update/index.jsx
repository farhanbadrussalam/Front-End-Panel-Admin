import { Button, Form, Space, Input, InputNumber, Select, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import CardForm from "../../../../../../components/custom-components/form-crud/CardForm";
import { getOneProduct } from "../../../../../../../api/produk/getOneProduct";
import { getProductCategories2 } from "../../../../../../../api/produk/product-categories/getProductCategories2";
import { putProduct } from "../../../../../../../api/produk/putProduct";

const index = (props) => {
  const history = useHistory();
  const title = `${props.location.state.permission} Data ${props.location.state.data}`;
  const id = props.location.state.id;
  const [video, setVideo] = useState(false)

  const { data: product } = getOneProduct(id);
  const { data: categories } = getProductCategories2();

  // useEffect(() => {
  //   setVideo([
  //     {
  //       name: product?.attachment,
  //       status: "done",
  //       url: `http://127.0.0.1:8000/uploads/${product?.attachment}`
  //     }
  //   ])
  // }, [product])

  const onFinish = async (values) => {
    const form = new FormData()

    form.append("name", values.name)
    form.append("price", values.price)
    form.append("description", values.description)
    form.append("product_category_id", values.product_category_id)
    form.append("status", values.status)

    values?.attachment?.file?.originFileObj &&
      form.append("attachment", values.attachment.file.originFileObj)

    const success = await putProduct(form, id);

    if (success == true) {
      message.success("Berhasil mengubah produk");
      history.push("/admin/produk-ucapan-digital");
    } else {
      message.error("Gagal mengubah produk");
    }
  };

  const handleSelectFile = (e) => {
    if (e.fileList.length == 0)
      setVideo(false)
    else if ((e.fileList.length == 1))
      setVideo(true)
  }

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
        onFinish={onFinish}
        labelAlign="left"
        colon={false}
        fields={[
          {
            name: "name",
            value: product?.name,
          },
          {
            name: "product_category_id",
            value: product?.product_category?.name,
          },
          {
            name: "price",
            value: product?.price,
          },
          {
            name: "description",
            value: product?.description,
          },
          {
            name: "status",
            value: product?.status,
          },
          {
            name: "attachment",
            value: product?.attachment,
          },
        ]}
      >
        <Form.Item label="Nama Produk" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Kategori Produk" name="product_category_id">
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

        <Form.Item label="Harga Produk" name="price">
          <InputNumber style={{ width: "200px" }}
            formatter={(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\Rp\s?|(,*)/g, '')}
          />
        </Form.Item>

        <Form.Item label="Deskripsi Produk" name="description">
          <Input />
        </Form.Item>

        <Form.Item
          label="Upload Video Demo"
          name="attachment"
        >
          <Upload
            accept=".mp4,.mkv,.mov,.webm"
            customRequest={undefined}
            maxCount={1}
            onChange={handleSelectFile}
            className="avatar-uploader"
            listType="picture"
            name="attachment"
          >
            {!video && (
              <Button icon={<UploadOutlined />}>
                Upload video demo
              </Button>
            )}
          </Upload>
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select style={{ width: "200px" }}>
            <Option value={1}>Aktif</Option>
            <Option value={2}>Non-Aktif</Option>
          </Select>
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
