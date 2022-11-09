import { Space, Popover, Modal } from "antd";
import { Danger, Edit, Trash } from "iconsax-react";
import { Link } from "react-router-dom";

const { confirm } = Modal;
const showModal = (id, name) => {
  confirm({
    title: `Apa anda yakin ingin menghapus ${name}?`,
    icon: <Danger color="red" />,
    okText: 'Yakin',
    cancelText: 'Batal',
    okType: 'primary',
    onOk() {

    },
  })
}

const columns = [
  // Kolom nama
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      switch (status) {
        case 1:
          return <p>Aktif</p>
        case 2:
          return <p>Non Aktif</p>
        default:
          return <p>{status}</p>
      }
    }
  },

  {
    title: 'Aksi',
    key: 'aksi',
    render: payload => (
      <Space size='large' className="icons-container">
        <Popover content={"Edit"}>
          <Link to={{
            pathname: `atur-role/edit/${payload.id}`,
            state: {
              permission: 'Edit',
              data: 'User',
              id: payload.id
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover>
        <Popover content={"Delete"}>
          <Trash color="red" size={20} className='trash' onClick={() => showModal(payload.id, payload.name)} />
        </Popover>
      </Space>
    ),
  },
];

export default columns