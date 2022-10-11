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
    key: 'action',
    render: () => (
      <Space size="large" className="icons-container" >
        <Popover content={"Detail"}>
          <Link to={`detail/1231411`} state={{ nama: 'Kevin' }} ><Eye size={20} /></Link>
        </Popover>
        <Popover content={"Edit"}>
          <Link to={`edit/1534141`}><Edit size={20} /></Link>
        </Popover>
        <Popover content={"Delete"}>
          <Link to={`delete/15414124`} className="trash" ><Trash color="red" size={20} /></Link>
        </Popover>
      </Space>
    ),
  },
];

export default columns