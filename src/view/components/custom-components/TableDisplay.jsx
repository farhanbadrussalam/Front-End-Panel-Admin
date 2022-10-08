import { Table } from 'antd'
import React from 'react'

const TableDisplay = ({ data, column }) => {
  return (
    <Table
      size='small'
      columns={column}
      dataSource={data}
      scroll={{ x: 400 }}
      className="master-table"
      expandable={{
        expandedRowRender: (record) => (
          <div className='expanded-row'>
            <p >Judul expanded row : </p>
            <ol>
              <li>list 1</li>
              <li>list 2</li>
            </ol>
          </div>
        )
      }}
    />
  )
}

export default TableDisplay