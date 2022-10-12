import { Space, Popover } from "antd";
import { Edit, Trash, Eye } from "iconsax-react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: 'Groom',
    dataIndex: 'groom',
    key: 'groom',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.groom.length - b.groom.length,
  },
  {
    title: 'Bride',
    dataIndex: 'bride',
    key: 'bride',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.bride.length - b.bride.length,
  },

  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },


  // Kolom aksi
  {
    title: 'Action',
    dataIndex: 'key',
    key: 'action',
    render: (key) => (
      <Space size="large" className="icons-container" >
        <Popover content={"Detail"}>
          <Link to={{
            pathname: `pengantin/detail/${key}`,
            state: {
              permission: 'Detail',
              data: 'Pengantin'
            },
          }} >
            <Eye size={20} />
          </Link>
        </Popover>

        <Popover content={"Edit"}>
          <Link to={{
            pathname: `pengantin/edit/${key}`,
            state: {
              permission: 'Edit',
              data: 'Pengantin'
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover>

        <Popover content={"Delete"}>
          <Link to={{
            pathname: `pengantin/delete/${key}`,
            state: {
              permission: 'Delete',
              data: 'Pengantin'
            },
          }} className="trash" >
            <Trash color="red" size={20} />
          </Link>
        </Popover>
      </Space>
    ),
  },
];

export default columns