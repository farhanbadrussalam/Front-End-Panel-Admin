import { Space, Popover, Modal } from "antd";
import { Link } from "react-router-dom";
import { Edit, Trash, Eye, Danger } from "iconsax-react";
import { deleteUser } from "../../../../api/kelola-user/deleteUser";

const { confirm } = Modal;
const showModal = (id, name) => {
  confirm({
    title: `Apa anda yakin ingin menghapus ${name}?`,
    icon: <Danger color="red" />,
    content: 'Some descriptions',
    onOk() {
      deleteUser(id)
    },
    onCancel() {
      console.log('Cancel');
    },
  })
}

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
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },

  {
    title: 'Action',
    key: 'action',
    render: payload => (
      <Space size="large" className="icons-container" >

        <Popover content={"Detail"}>
          <Link to={{
            pathname: `crud-user/detail/${payload.id}`,
            state: {
              permission: 'Detail',
              data: 'User'
            },
          }} >
            <Eye size={20} />
          </Link>
        </Popover>

        <Popover content={"Edit"}>
          <Link to={{
            pathname: `crud-user/edit/${payload.id}`,
            state: {
              permission: 'Edit',
              data: 'User',
              id: payload.id
            },
          }}>
            <Edit size={20} />
          </Link>
        </Popover>

        <Popover content={"Delete"}>
          <Trash color="red" size={20} className='trash' onClick={() => showModal(payload.id, payload.name)} />
          <Modal></Modal>
        </Popover>

      </Space>
    ),
  },
];

export default columns