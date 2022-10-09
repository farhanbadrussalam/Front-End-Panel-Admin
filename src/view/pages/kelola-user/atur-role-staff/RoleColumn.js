import { Select } from "antd";

const handleChange = (value) => {
  confirm(`Anda yakin ingin mengubah role user menjadi ${value}`);
};

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
      <Select defaultValue={text} className='dropdown-menu' onChange={handleChange} >
        <Select.Option value="Admin">Admin</Select.Option>
        <Select.Option value="Super Admin">Super Admin</Select.Option>
      </Select>
    ),
  },
];

export default columns