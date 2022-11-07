import { Space, Popover, Modal, message } from "antd";
import { Edit, Trash, Eye } from "iconsax-react";
import { Link } from "react-router-dom";

import { deletePesanan } from "../../../../api/pesanan/deletePesanan"

const { confirm } = Modal;
const showModal = (id, product) => {
  confirm({
    title: `Apa anda yakin ingin menghapus pesanan ${product}?`,
    icon: <Danger color="red" />,
    okText: 'Yakin',
    cancelText: 'Batal',
    okType: 'primary',
    async onOk() {
      const response = await deletePesanan(id)
      const success = response.data.success
      if (success) {
        message.success("Berhasil menghapus pesanan")
        window.location.reload(false)
      }
      else {
        message.error("Gagal menghapus pesanan")
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
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'WO',
    dataIndex: 'wo',
    key: 'wo',
  },

  // {
  //   title: 'Status',
  //   dataIndex: 'status',
  //   key: 'status',
  // },


  // Kolom aksi
  {
    title: 'Action',
    key: 'action',
    render: (payload) => (
      <Space size="large" className="icons-container" >
        <Popover content={"Detail"}>
          <Link to={{
            pathname: `pesanan/detail/${payload.id}`,
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
            pathname: `pesanan/edit/${payload.id}`,
            state: {
              permission: 'Edit',
              data: 'Pesanan',
              id: payload.id
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover> */}

        {/* <Popover content={"Delete"}>
          <Link to={{
            pathname: `pesanan/delete/${payload.id}`,
            state: {
              permission: 'Delete',
              data: 'Pesanan',
              id: payload.id
            },
          }} className="trash" >
            <Trash color="red" size={20} />
          </Link>
        </Popover> */}

        {/* <Popover content={"Delete"}>
          <Trash color="red" size={20} className='trash' onClick={() => showModal(payload.id, payload.product)} />
        </Popover> */}
      </Space>
    ),
  },
];

export default columns