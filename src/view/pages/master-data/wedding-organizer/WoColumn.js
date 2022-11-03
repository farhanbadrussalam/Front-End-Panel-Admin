import { Space, Popover, Modal, message } from "antd";
import { Edit, Trash, Eye, Danger } from "iconsax-react";
import { Link } from "react-router-dom";
import { deleteWeddingOrganizer } from "../../../../api/wedding-organizer/deleteWeddingOrganizer";

const { confirm } = Modal;
const showModal = (id, name) => {
  confirm({
    title: `Apa anda yakin ingin menghapus ${name}?`,
    icon: <Danger color="red" />,
    okText: 'Yakin',
    cancelText: 'Batal',
    okType: 'primary',

    async onOk() {
      const response = await deleteWeddingOrganizer(id)
      const success = response.data.success
      if (success) {
        message.success("Berhasil menghapus WO")
        window.location.reload(false)
      }
      else {
        message.error("Gagal menghapus WO")
      }
    },
  })
}

const columns = [
  // Kolom nama
  {
    title: 'Nama',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: 'No Telp',
    dataIndex: 'phone',
    key: 'phone',
  },

  // {
  //   title: 'Website',
  //   dataIndex: 'website',
  //   key: 'website',
  // },

  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
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

  // Kolom aksi
  {
    title: 'Aksi',
    key: 'action',
    render: payload => (
      <Space size="large" className="icons-container" >
        <Popover content={"Detail"}>
          <Link to={{
            pathname: `wedding-organizer/detail/${payload.id}`,
            state: {
              permission: 'Detail',
              data: 'Wedding Organizer',
              id: payload.id
            },
          }} >
            <Eye size={20} />
          </Link>
        </Popover>

        <Popover content={"Edit"}>
          <Link to={{
            pathname: `wedding-organizer/edit/${payload.id}`,
            state: {
              permission: 'Edit',
              data: 'Wedding Organizer',
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