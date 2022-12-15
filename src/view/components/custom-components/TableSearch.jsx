import { Input } from 'antd'
import React from 'react'

const TableSearch = ({ setTableData, data }) => {

  const userSearch = async (input) => {
    if (input == '') return setTableData(await data)
    const filteredData = await data.filter((person) => {
      if (person?.name != undefined)
        return person?.name?.toLowerCase().includes(input.toLowerCase())
      else {
        const pengantin = [person?.bride.toLowerCase(), person?.groom.toLowerCase()]
        return pengantin.some(name => name.includes(input.toLowerCase()))
      }

    })
    setTableData(filteredData)
  }

  return (
    <Input placeholder="Search..." style={{ height: '35px' }} onChange={(value) => userSearch(value.target.value)} />
  )
}

export default TableSearch