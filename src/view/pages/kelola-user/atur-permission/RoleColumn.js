import { Space, Popover } from "antd";
import { Edit } from "iconsax-react";
import { Link } from "react-router-dom";

const handleChange = (value) => {
  confirm(`Anda yakin ingin mengubah role user menjadi ${value}`);
};

const columns = [
  // Kolom nama
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: 'Nama di Sistem',
    dataIndex: 'system_name',
    key: 'system_name',
  },

  {
    title: 'Aksi',
    key: 'aksi',
    render: payload => (
      <Space size='large' className="icons-container">
        <Popover content={"Edit"}>
          <Link to={{
            pathname: `policy-user/edit/${payload.key}`,
            state: {
              permission: 'Edit',
              data: 'User',
              id: payload.key
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover>
      </Space>
    ),
  },
];

export default columns