import { Space, Popover, Modal } from "antd";
import { Link } from "react-router-dom";
import { Edit, Trash, Eye, Danger } from "iconsax-react";

const { confirm } = Modal;
const showModal = (id, name, destroy) => {
  confirm({
    title: `Apa anda yakin ingin menghapus ${name}?`,
    icon: <Danger color="red" />,
    okText: "Yakin",
    cancelText: "Batal",
    okType: "primary",
    onOk() {
      destroy(id);
    },
  });
};

const columns = [
  {
    title: "Nama",
    dataIndex: "name",
    key: "name",
  },

  // {
  //   title: "Slug",
  //   dataIndex: "slug",
  //   key: "slug",
  // },

  {
    title: "Deskripsi",
    dataIndex: "description",
    key: "description",
  },

  {
    title: "Action",
    key: "action",
    width: 200,
    fixed: "right",
    render: (payload) => (
      <Space size="large" className="icons-container">
        {payload.permission.includes("/admin/kategori-artikel/detail/:userid") ? (
          <Popover content={"Detail"}>
            <Link
              to={{
                pathname: `/admin/kategori-artikel/${payload.id}`,
              }}
            >
              <Eye size={20} />
            </Link>
          </Popover>
        ) : undefined}

        {payload.permission.includes("/admin/kategori-artikel/edit/:userid") ? (
          <Popover content={"Edit"}>
            <Link
              to={{
                pathname: `/admin/kategori-artikel/update/${payload.id}`,
                state: {
                  permission: "Edit",
                  data: "User",
                  id: payload.id,
                },
              }}
            >
              <Edit size={20} />
            </Link>
          </Popover>

        ) : undefined}

        {payload.permission.includes("delete kategori artikel") ? (
          <Popover content={"Delete"}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                showModal(payload.id, payload.name, payload.destroy);
              }}
            >
              <Trash color="red" size={20} />
            </Link>
          </Popover>
        ) : undefined}

      </Space>
    ),
  },
];

export default columns;
