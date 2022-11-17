import { Space, Popover, Modal, message } from "antd";
import { Edit, Trash, Eye, Danger } from "iconsax-react";
import { Link } from "react-router-dom";

// TODO: Actions on Saldo (Entah cairin atau apa)

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  
  {
    title: 'Saldo',
    dataIndex: 'saldo',
    key: 'saldo',
    render: (saldo) => <a>{saldo}</a>,
    sorter: (a, b) => a.saldo - b.saldo,
  },

  // Kolom aksi
  {
    title: 'Action',
    key: 'action',
    render: (payload) => (
      <Space size="large" className="icons-container" >
        <Popover content={"Detail"}>
          <Link to={{
            pathname: `wedding-organizer/detail/${payload.id}`,
            state: {
              permission: 'Detail',
              data: 'Pesanan',
              id: payload.id
            },
          }} >
            <Eye size={20} />
          </Link>
        </Popover>

      </Space>
    ),
  },
];

export default columns