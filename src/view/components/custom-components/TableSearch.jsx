import { Input } from 'antd'
import React, { useState, useEffect } from 'react'

import Data from '../../pages/MasterData'

const TableSearch = ({ setData }) => {

  useEffect(() => {
    setData(Data)
  }, [])

  const userSearch = (input) => {
    if (input == '') return setData(Data)
    const filteredData = Data.filter((person) => {
      return person.name.toLowerCase().includes(input.toLowerCase())
    })
    setData(filteredData)
  }

  return (
    <Input placeholder="Search..." style={{ height: '35px' }} onChange={(value) => userSearch(value.target.value)} />
  )
}

export default TableSearch