import { DatePicker } from 'antd'
import React from 'react'
import DropDown from '../../assets/icon/DropDown.svg'

const DateWeekComponent = ({ dateDta }) => {
    const { label, onChange, placeholder } = dateDta
    const handleChange = (_, dateString) => {
        onChange(dateString)
    }
    return (
        <div className='container-date_pick-week w-full'>
            <label className='label'>{label}</label>
            <DatePicker onChange={handleChange} picker="week" placeholder={placeholder} suffixIcon={<img src={DropDown}></img>} />
        </div>
    )
}

export default DateWeekComponent
