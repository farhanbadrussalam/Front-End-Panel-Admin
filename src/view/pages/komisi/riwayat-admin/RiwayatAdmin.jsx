import moment from 'moment';
import { Row, Col, Space, Popover, Modal, DatePicker, message, Button } from 'antd'
import { Trash, Eye, Danger } from "iconsax-react";
import { Link } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';

import TableDisplay from '../../../components/custom-components/TableDisplay'
import TableCard from '../../../components/custom-components/TableCard'

import { getAdminCommissions } from "../../../../api/komisi/getAdminCommissions"
import { useRef, useState } from 'react'

const MasterDisplay = () => {
  let { data, deletePesanan } = getAdminCommissions()

  const [searchText, setSearchText] = useState()
  const [searchedColumn, setSearchedColumn] = useState()

  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText();
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <DatePicker.RangePicker 
          style={{ marginBottom: 8, display: 'block' }} 
          value={selectedKeys[0]} 
          onChange={e => setSelectedKeys(e ? [e] : [])} 
          onPressEnter={() => { confirm(); setSearchText(selectedKeys[0]), setSearchedColumn(dataIndex); }} 
        />

        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={""}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>

          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),

    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),

    onFilter: (value, record) => 
      record[dataIndex] ? moment(record[dataIndex]).isBetween(value[0], value[1], 'day', '[]') : "",

    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },

    render: text => moment(text).format("DD/MM/YYYY")
  });

  data = data.map((d) => {
    return {
      id: d.id,
      date: d.created_at,
      name: d.name,
      type: d.type,
      nominal: d.nominal_get,
      wo: d.commission ? d.commission.wedding_organizer.name : "",
      deletePesanan: deletePesanan
    }
  })

  const { confirm } = Modal
  const showModal = (id, name, wo, deletePesanan) => {
    confirm({
      title: `Apa anda yakin ingin menghapus riwayat komisi ${name} dari WO ${wo}?`,
      icon: <Danger color="red" />,
      okText: 'Yakin',
      cancelText: 'Batal',
      okType: 'primary',
      async onOk() {
        const success = await deletePesanan(id)
        if (success) {
          message.success("Berhasil menghapus produk")
        }
        else {
          message.error("Gagal menghapus produk")
        }
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
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => <a>{new Date(date).toLocaleString('en-GB')}</a>,
      sorter: (a, b) => {new Date(a.date) - new Date(b.date)},
      ...getColumnSearchProps('date')
    },

    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => <a>{type == 1 ? "Percent": "Direct"}</a>
    },

    {
      title: 'Nominal',
      dataIndex: 'nominal',
      key: 'nominal',
    },

    {
      title: 'WO',
      dataIndex: 'wo',
      key: 'wo',
    },

    // Kolom aksi
    {
      title: 'Action',
      key: 'action',
      render: (payload) => (
        <Space size="large" className="icons-container" >
          <Popover content={"Detail"}>
            <Link to={{
              pathname: `riwayat-komisi-admin/detail/${payload.id}`,
              state: {
                permission: 'Detail',
                data: 'Pesanan',
                id: payload.id
              },
            }} >
              <Eye size={20} />
            </Link>
          </Popover>

          <Popover content={"Delete"}>
            <Trash color="red" size={20} className='trash' onClick={() => showModal(payload.id, payload.name, payload.wo, payload.deletePesanan)} />
          </Popover>
        </Space>
      ),
    },
  ];
  
  return (
    <TableCard >

      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={columns} />
        </Col>
      </Row>

    </TableCard> 
  )
}

export default MasterDisplay