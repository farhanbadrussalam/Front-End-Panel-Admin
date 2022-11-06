import { useEffect, useState } from "react";
import { contactsTest } from "../../../api/website-settings/admin-contacts";

import {
  List,
  Skeleton,
  Button,
  Form,
  Input,
  Space,
  Select,
  Modal,
  Popover,
} from "antd";
import { Trash, Danger } from "iconsax-react";

export default function () {
  const [isAdding, setIsAdding] = useState(false);

  let { data, error, loading, method } = contactsTest();
  data = data.filter((d) => d.id !== undefined);

  useEffect(() => {
    setIsAdding(false);
  }, []);

  const statusConverter = (status) => {
    switch (status) {
      case 0:
        return "tidak aktif";
      case 1:
        return "aktif";
      default:
        return "status tidak ditemukan!";
    }
  };

  const deleteContact = (id, name) => {
    Modal.confirm({
      title: `Apa anda yakin ingin menghapus ${name}?`,
      icon: <Danger color="red" />,
      okText: "Yakin",
      cancelText: "Batal",
      okType: "primary",
      onOk() {
        method.destroy(id);
      },
    });
  };

  return (
    <>
      <div className="custom_website-settings_contacts">
        <List
          itemLayout="horizontal"
          dataSource={data}
          header={<div>Kontak Admin</div>}
          loading={loading.update || loading.destroy || loading.getAll}
          renderItem={(item) => (
            <>
              <List.Item
                actions={[
                  <Popover
                    content="delete"
                    key="delete-contact"
                    onClick={() => deleteContact(item.id, item.name)}
                  >
                    <Trash color="red" size={20} />
                  </Popover>,
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta title={item.name} description={item.value} />
                  <div>
                    <Select
                      value={statusConverter(item.status)}
                      style={{
                        width: 120,
                      }}
                      onChange={(e) =>
                        method.update(item.id, {
                          name: item.name,
                          value: item.value,
                          status: e,
                        })
                      }
                      options={[
                        {
                          value: "0",
                          label: "tidak aktif",
                        },
                        {
                          value: "1",
                          label: "aktif",
                        },
                      ]}
                    />
                  </div>
                </Skeleton>
              </List.Item>
            </>
          )}
        />
        {isAdding ? (
          <AddForm
            submit={method.create}
            setIsAdding={setIsAdding}
            createErr={error.create}
          />
        ) : (
          <div className="button">
            <Button
              disabled={loading.create}
              size="small"
              type="primary"
              danger
              onClick={() => setIsAdding(true)}
            >
              tambah kontak admin
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

const AddForm = ({ submit, setIsAdding, createErr }) => {
  const [name, setName] = useState();
  const [value, setValue] = useState();

  const submitHandler = (e) => {
    submit({ name, value });
    name && value && setIsAdding(false);
  };

  return (
    <div className="addForm">
      <Form
        name="addForm"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Nama Kontak"
          name="name"
          rules={[
            {
              required: true,
              message: "Mohon masukkan nama kontak!",
            },
          ]}
        >
          <Input
            value={name}
            placeholder="Whatsapp, Line, Telegram"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Kontak"
          name="value"
          rules={[
            {
              required: true,
              message: "Mohon masukkan kontak!",
            },
          ]}
        >
          <Input
            value={value}
            placeholder="@admin123, 089..."
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Space
            size="small"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Button
              htmlType="submit"
              type="primary"
              danger
              onClick={submitHandler}
            >
              Simpan
            </Button>
            <Button danger htmlType="button" onClick={() => setIsAdding(false)}>
              Batal
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
