import { Space, Popover } from "antd";
import { Edit, Trash, Eye } from "iconsax-react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },

  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },

  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
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
            pathname: `customer/detail/${key}`,
            state: {
              permission: 'Detail',
              data: 'Customer'
            },
          }} >
            <Eye size={20} />
          </Link>
        </Popover>

        <Popover content={"Edit"}>
          <Link to={{
            pathname: `customer/edit/${key}`,
            state: {
              permission: 'Edit',
              data: 'Customer'
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover>

        <Popover content={"Delete"}>
          <Link to={{
            pathname: `customer/delete/${key}`,
            state: {
              permission: 'Delete',
              data: 'Customer'
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