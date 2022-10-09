import { Space, Dropdown, Menu } from "antd";
import { ArrowDown2 } from "iconsax-react";

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={['3']}
    items={[
      {
        key: '1',
        label: 'Super Admin',
      },
      {
        key: '2',
        label: 'Admin',
      },
    ]}
  />
);

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

  // Kolom role
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.age.toString().startsWith(value),
    render: (text) => (
      <Dropdown overlay={menu} trigger={['click']}>
        <Space>
          <div className="select-role">
            <p>{text}</p>
            <ArrowDown2 />
          </div>
        </Space>
      </Dropdown>
    ),
  },
];

export default columns