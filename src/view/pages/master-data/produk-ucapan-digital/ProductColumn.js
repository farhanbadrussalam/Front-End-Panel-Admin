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
    dataIndex: 'product_id',
    key: 'action',
    render: (id) => (
      <Space size="large" className="icons-container" >
        <Popover content={"Detail"}>
          <Link to={{
            pathname: `produk-ucapan-digital/detail/${id}`,
            state: {
              permission: 'Detail',
              data: 'Produk Ucapan Digital'
            },
          }} >
            <Eye size={20} />
          </Link>
        </Popover>

        <Popover content={"Edit"}>
          <Link to={{
            pathname: `produk-ucapan-digital/edit/${id}`,
            state: {
              permission: 'Edit',
              data: 'Produk Ucapan Digital'
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover>

        <Popover content={"Delete"}>
          <Link to={{
            pathname: `produk-ucapan-digital/delete/${id}`,
            state: {
              permission: 'Delete',
              data: 'Produk Ucapan Digital'
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