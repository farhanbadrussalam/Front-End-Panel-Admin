import { Space } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        <a>Updates</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export default columns