import { Space, Popover, Modal, message } from "antd";
import { Edit, Trash, Eye, Danger } from "iconsax-react";
import moment from "moment";
import { Link } from "react-router-dom";

const { confirm } = Modal
const showModal = (id, name, wo, deletePesanan) => {
  confirm({
    title: `Apa anda yakin ingin menghapus riwayat komisi ${name} dari WO ${wo}?`,
    icon: <Danger color="red" />,
    okText: 'Yakin',
    cancelText: 'Batal',
    okType: 'primary',
    async onOk() {
      const success = await deletePesanan(id)
      if (success) {
        message.success("Berhasil menghapus produk")
      }
      else {
        message.error("Gagal menghapus produk")
      }
    },
  })
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date) => <a>{new Date(date).toLocaleString('en-GB')}</a>,
    sorter: (a, b) => {new Date(a.date).getTime() - new Date(b.date).getTime()},
  },

  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type) => <a>{type == 1 ? "Percent": "Direct"}</a>
  },

  {
    title: 'Nominal',
    dataIndex: 'nominal',
    key: 'nominal',
  },

  {
    title: 'WO',
    dataIndex: 'wo',
    key: 'wo',
  },

  // Kolom aksi
  {
    title: 'Action',
    key: 'action',
    render: (payload) => (
      <Space size="large" className="icons-container" >
        <Popover content={"Detail"}>
          <Link to={{
            pathname: `riwayat-komisi-admin/detail/${payload.id}`,
            state: {
              permission: 'Detail',
              data: 'Pesanan',
              id: payload.id
            },
          }} >
            <Eye size={20} />
          </Link>
        </Popover>

        {/* <Popover content={"Edit"}>
          <Link to={{
            pathname: `riwayat-komisi-admin/edit/${payload.id}`,
            state: {
              permission: 'Edit',
              data: 'Pesanan',
              id: payload.id
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover> */}

        <Popover content={"Delete"}>
          <Trash color="red" size={20} className='trash' onClick={() => showModal(payload.id, payload.name, payload.wo, payload.deletePesanan)} />
        </Popover>
      </Space>
    ),
  },
];

export default columns