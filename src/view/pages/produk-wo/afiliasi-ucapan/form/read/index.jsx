import { useHistory, useParams } from "react-router-dom";

import { Form, Button, Spin } from "antd";
import CardForm from "../../../../../components/custom-components/form-crud/CardForm";
import ErrorPage from "../../../../../components/custom-components/Feedback/ErrorPage";

import { detailAffiliates } from "../../../../../../api/afiliasi";

const index = () => {
  const history = useHistory();
  const { id } = useParams();

  console.log(id);
  const { data, err, loading } = detailAffiliates(id);

  if (loading)
    return (
      <CardForm title={`Detail Data Voucher/Kupon ${data?.name}`}>
        <Spin />
      </CardForm>
    );

  if (err) return <ErrorPage message={err} />;

  return (
    <CardForm title={`Detail Data Produk Ucapan WO ${data?.name}`}>
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 13,
        }}
        autoComplete="off"
        disabled={true}
        labelAlign="left"
        colon={false}
      >
        <Form.Item label="Nama" name="name" key="name">
          <p>{data?.name}</p>
        </Form.Item>
        <Form.Item label="Deskripsi" name="description" key="description">
          <p>{data?.description}</p>
        </Form.Item>
        <Form.Item label="Link" name="link" key="link">
          <p>{data?.link}</p>
        </Form.Item>
        <Form.Item label="Status" name="status" key="status">
          <p>{data?.status === 1 ? "Aktif" : "Non-aktif"}</p>
        </Form.Item>

        <Form.Item label="Kreator" name="creator" key="creator">
          <p>{data?.creator}</p>
        </Form.Item>

        <Form.Item label="Editor" name="editor" key="editor">
          <p>{data?.editor}</p>
        </Form.Item>
      </Form>

      <Button danger onClick={() => history.goBack()}>
        Kembali
      </Button>
    </CardForm>
  );
};

export default index;
