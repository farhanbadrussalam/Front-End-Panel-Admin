import { useEffect, useState } from "react";

import { List, Skeleton, Button, Form, Input, Space } from "antd";
import { Trash } from "iconsax-react";

const ContactList = () => {
  // const [isAdding, setIsAdding] = useState(false);
  const [isAdding, setIsAdding] = useState(true);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Line",
      value: "@wo-best-wishes-1",
      status: 1,
    },
    {
      id: 2,
      name: "Line",
      value: "@wo-best-wishes-1",
      status: 1,
    },
  ]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const statusConverter = (status) => {
    switch (status) {
      case 1:
        return <div style={{ color: "green" }}>aktif</div>;
      default:
        return <div style={{ color: "red" }}>status not found!</div>;
    }
  };

  const submitHandler = (e) => {
    name && value && setIsAdding(false);
  };

  return (
    <>
      <div className="custom_website-settings_contacts">
        <List
          itemLayout="horizontal"
          dataSource={contacts}
          header={<div>Kontak Admin</div>}
          renderItem={(item) => (
            <>
              <List.Item
                actions={[
                  <div key="list-loadmore-edit">
                    <Trash color="red" size={20} />
                  </div>,
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta title={item.name} description={item.value} />
                  <div>{statusConverter(item.status)}</div>
                </Skeleton>
              </List.Item>
            </>
          )}
        />
        {isAdding ? (
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
                  <Button
                    danger
                    htmlType="button"
                    onClick={() => setIsAdding(false)}
                  >
                    Batal
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        ) : (
          <div className="button">
            <Button
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
};

export default function () {
  return (
    <>
      <ContactList />
    </>
  );
}
