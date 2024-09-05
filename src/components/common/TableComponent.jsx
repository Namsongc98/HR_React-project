import { Table } from 'antd'
import React, { memo } from 'react'

const TableComponent = ({ dataTable }) => {
  const { columns, data, handleDoubleClickRow } = dataTable

  return (
    <div><Table columns={columns} dataSource={data} pagination={false} onRow={handleDoubleClickRow ? (record, rowIndex) => {
      return {
        onDoubleClick: (event) => handleDoubleClickRow(record),
      }
    } : null} /></div >
  )
}

export default memo(TableComponent) 