import { Space, Popover, Modal, message } from "antd";
import { Edit, Trash, Eye, Danger } from "iconsax-react";
import { Link } from "react-router-dom";

const { confirm } = Modal
const showModal = (id, name, wo, deletePesanan) => {
  confirm({
    title: `Apa anda yakin ingin menghapus riwayat pencairan ${name} dari WO ${wo}?`,
    icon: <Danger color="red" />,
    okText: 'Yakin',
    cancelText: 'Batal',
    okType: 'primary',
    async onOk() {
      const success = await deletePesanan(id)
      if (success) {
        message.success("Berhasil menghapus riwayat pencairan")
      }
      else {
        message.error("Gagal menghapus riwayat pencairan")
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
    title: 'Request Date',
    dataIndex: 'request_date',
    key: 'request_date',
    render: (date) => <a>{new Date(date).toDateString('en-GB')}</a>,
    sorter: (a, b) => new Date(a.request_date) - new Date(b.request_date),
  },

  {
    title: 'Disbursement Date',
    dataIndex: 'disbursement_date',
    key: 'disbursement_date',
    render: (date) => <a>{new Date(date).toDateString('en-GB')}</a>,
    sorter: (a, b) => new Date(a.disbursement_date) - new Date(b.disbursement_date),
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
            pathname: `riwayat-pencairan-komisi-wo/detail/${payload.id}`,
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
          <Trash color="red" size={20} className='trash' onClick={() => showModal(payload.id, payload.disbursement_name, payload.wo, payload.deletePesanan)} />
        </Popover>
      </Space>
    ),
  },
];

export default columns