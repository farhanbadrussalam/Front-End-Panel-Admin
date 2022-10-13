import { Space, Popover } from "antd";
import { Edit, Trash, Eye } from "iconsax-react";
import { Link } from "react-router-dom";

const columns = [
  // Kolom nama
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
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
            pathname: `wedding-organizer/detail/${key}`,
            state: {
              permission: 'Detail',
              data: 'Wedding Organizer'
            },
          }} >
            <Eye size={20} />
          </Link>
        </Popover>

        <Popover content={"Edit"}>
          <Link to={{
            pathname: `wedding-organizer/edit/${key}`,
            state: {
              permission: 'Edit',
              data: 'Wedding Organizer'
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover>

        <Popover content={"Delete"}>
          <Link to={{
            pathname: `wedding-organizer/delete/${key}`,
            state: {
              permission: 'Delete',
              data: 'Wedding Organizer'
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