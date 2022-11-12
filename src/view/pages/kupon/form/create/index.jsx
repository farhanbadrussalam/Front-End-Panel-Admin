import {
  Button,
  Form,
  Input,
  Space,
  message,
  Select,
  Upload,
  DatePicker,
  InputNumber,
} from "antd";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import CardForm from "../../../../components/custom-components/form-crud/CardForm";

const index = (props) => {
  const history = useHistory();
  const post = props.location.method;

  const [name, setName] = useState("");
  const [type, setType] = useState(1);
  const [nominal, setNominal] = useState(0);
  const [quota, setQuota] = useState(0);
  const [begin_date, setBeginDate] = useState();
  const [end_date, setEndDate] = useState();

  console.log(begin_date);

  const onFinish = async () => {
    const response = await post({
      name,
      type,
      nominal,
      quota,
      begin_date,
      end_date,
    });

    if (response?.data?.success) {
      message.success("Berhasil menambahkan artikel");
      history.goBack();
    } else {
      message.error(`Gagal menambahkan artikel!: ${response}`);
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert("Failed:", errorInfo);
  };

  return (
    <CardForm title="Tambah data voucher/kupon">
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
          key="name"
          name="name"
          rules={[
            {
              required: true,
              message: "Mohon masukkan nama voucher!",
            },
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Tipe"
          key="type"
          name="type"
          rules={[
            {
              required: true,
              message: "Mohon masukkan tipe voucher!",
            },
          ]}
        >
          <Select onChange={(value) => setType(value)} value={type}>
            <Select.Option value={1}>Aktif</Select.Option>
            <Select.Option value={2}>Tidak Aktif</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Nominal"
          key="nominal"
          name="nominal"
          rules={[
            {
              required: true,
              message: "Mohon masukkan nominal diskon!",
            },
            {
              type: "number",
              message: "Mohon masukkan dengan format angka!",
            },
          ]}
        >
          <InputNumber
            value={nominal}
            onChange={(value) => setNominal(value)}
            style={{
              width: "100%",
            }}
            addonBefore={
              <Select
                defaultValue="persentase"
                style={{
                  width: 60,
                }}
              >
                <Select.Option value="persentase">%</Select.Option>
                <Select.Option value="rupiah">Rp</Select.Option>
              </Select>
            }
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>

        <Form.Item
          label="Kuota"
          key="quota"
          name="quota"
          rules={[
            {
              required: true,
              message: "Mohon masukkan kuota voucher!",
            },
            {
              type: "number",
              message: "Mohon masukkan dengan format angka!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
            }}
            value={quota}
            onChange={(value) => setQuota(value)}
          />
        </Form.Item>

        <Form.Item
          label="Tanggal Mulai"
          key="begin_date"
          name="begin_date"
          rules={[
            {
              required: true,
              message: "Mohon masukkan tanggal mulainya voucher berlaku!",
            },
          ]}
        >
          <DatePicker
            format="YYYY-MM-DD"
            onChange={(value, stringValue) => setBeginDate(stringValue)}
            value={begin_date}
          />
        </Form.Item>

        <Form.Item
          label="Tanggal Kadaluwarsa"
          key="end_date"
          name="end_date"
          rules={[
            {
              required: true,
              message: "Mohon masukkan tanggal kadaluwarsa voucher!",
            },
          ]}
        >
          <DatePicker
            format="YYYY-MM-DD"
            onChange={(value, stringValue) => setEndDate(stringValue)}
            value={end_date}
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
