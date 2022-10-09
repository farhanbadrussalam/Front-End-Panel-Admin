import { Space, Popover } from "antd";
import { Edit, Trash, Eye } from "iconsax-react";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
  },

  // {
  //   title: 'Product ID',
  //   dataIndex: 'product_id',
  //   key: 'product_id',
  // },

  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'Attachment',
    dataIndex: 'attachment',
    key: 'attachment',
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
          <a href="" ><Eye size={20} /></a>
        </Popover>
        <Popover content={"Edit"}>
          <a href="" ><Edit size={20} /></a>
        </Popover>
        <Popover content={"Delete"}>
          <a href="" className="trash" ><Trash color="red" size={20} /></a>
        </Popover>
      </Space>
    ),
  },
];

export default columns