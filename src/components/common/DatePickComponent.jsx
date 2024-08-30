import { DatePicker } from 'antd';
import React, { memo } from 'react'

const DatePickComponent = ({ dateDta }) => {
  const { label, onChange, name } = dateDta
  const handleChange = (_, dateString) => {
    onChange(dateString, name)
  }
  return (
    <div className='container-date_pick w-full'>
      <label className='label'>{label}</label>
      <DatePicker onChange={handleChange} />
    </div>
  )
}

export default memo(DatePickComponent) 
