import { Space, Dropdown, Menu } from "antd";
import { ArrowDown2 } from "iconsax-react";

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={['3']}
    items={[
      {
        key: '1',
        label: 'Permission 1',
      },
      {
        key: '2',
        label: 'Permission 2',
      },
      {
        key: '3',
        label: 'Permission 3',
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

  // Kolom No Karyawan
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },

  // Kolom role
  {
    title: 'Permission',
    dataIndex: 'permission',
    key: 'permission',
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