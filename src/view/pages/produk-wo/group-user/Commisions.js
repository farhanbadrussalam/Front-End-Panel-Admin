import { Space, Popover, Modal } from "antd";
import { Link } from "react-router-dom";
import { Edit, Trash, Eye, Danger } from "iconsax-react";

const { confirm } = Modal;
const showModal = (id, destroy) => {
  confirm({
    title: `Apa anda yakin ingin menghapus ${id}?`,
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

  {
    title: "WO",
    dataIndex: "wo",
    key: "wo",
  },

  {
    title: "Tipe",
    dataIndex: "type",
    key: "type",
    render: (data) => (data === 1 ? "Presentase" : "nominal"),
  },

  {
    title: "Nominal",
    dataIndex: "nominal",
    key: "nominal",
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (data) => (data === 1 ? "Aktif" : "Non-aktif"),
  },

  {
    title: "Action",
    key: "action",
    width: 200,
    fixed: "right",
    render: (payload) => (
      <Space size="large" className="icons-container">

        {payload.permission.includes("/admin/group-user/detail/:userid") ? (
          <Popover content={"Detail"}>
            <Link
              to={{
                pathname: `/admin/group-user/${payload.id}`,
              }}
            >
              <Eye size={20} />
            </Link>
          </Popover>
        ) : undefined}

        {payload.permission.includes("/admin/group-user/detail/:userid") ? (
          <Popover content={"Edit"}>
            <Link
              to={{
                pathname: `/admin/group-user/edit/${payload.id}`,
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

        {payload.permission.includes("delete group user") ? (
          <Popover content={"Delete"}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                showModal(payload.id, payload.destroy);
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
