
import { Space, Popover } from "antd";
import { Link } from "react-router-dom";
import { Edit, Trash, Eye } from "iconsax-react";

const columns = [
  // Kolom nama
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
  },

  // Kolom alamat
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },

  // Kolom alamat
  {
    title: 'Employee ID',
    dataIndex: 'employee_id',
    key: 'employee_id',
  },

  // Kolom alamat
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'level',
  },

  // Kolom alamat
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },

  // Kolom aksi
  {
    title: 'Action',
    dataIndex: 'employee_id',
    key: 'action',
    render: (id) => (
      <Space size="large" className="icons-container" >
        <Popover content={"Detail"}>
          <Link to={`detail/${id}`} state={{ nama: 'Kevin' }} ><Eye size={20} /></Link>
        </Popover>
        <Popover content={"Edit"}>
          <Link to={`edit/${id}`}><Edit size={20} /></Link>
        </Popover>
        <Popover content={"Delete"}>
          <Link to={`delete/${id}`} className="trash" ><Trash color="red" size={20} /></Link>
        </Popover>
      </Space>
    ),
  },
];

export default columns