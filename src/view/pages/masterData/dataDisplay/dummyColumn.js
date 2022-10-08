import { Space } from "antd";
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

  // Kolom usia
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    filters: [
      {
        text: '30 . . . 39',
        value: '30 . . . 39',
        children: [
          {
            text: '30',
            value: '30'
          },
          {
            text: '32',
            value: '32'
          },
        ]
      },

      {
        text: '40 . . . 49',
        value: '40 . . . 49',
        children: [
          {
            text: '40',
            value: '40'
          },
          {
            text: '42',
            value: '42'
          },
        ]
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.age.toString().startsWith(value),
    sorter: (a, b) => a.age - b.age,
  },

  // Kolom alamat
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },

  // Kolom aksi
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="large" className="icons-container" >
        <a href="" ><Eye color="black" size={20} /></a>
        <a href="" ><Edit color="black" size={20} /></a>
        <a href="" className="trash" ><Trash color="red" size={20} /></a>
      </Space>
    ),
  },
];

export default columns