import { Table } from 'antd'
import React from 'react'

const TableComponent = ({ dataTable }) => {
  const { columns, data, handleDoubleClickRow } = dataTable

  return (
    <div><Table columns={columns} dataSource={data} pagination={false} onRow={(record, rowIndex) => {
      return {
        onDoubleClick: (event) => handleDoubleClickRow(record),
      }
    }} /></div >
  )
}

export default TableComponent