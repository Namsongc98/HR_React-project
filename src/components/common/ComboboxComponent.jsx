import React, { useState } from 'react'
import DropDown from '../../assets/icon/DropDown.svg'

const ComboboxComponent = ({ dataCombobox }) => {
  const { label, placeholder, value, listDataCombobox, onChange, name } = dataCombobox
  const [openCombobox, setOpenCombobox] = useState(false)
  const [labelItem, setLabelItem] = useState()
  const handleDetail = (item) => {
    setLabelItem(item.label)
    onChange(item.value, name)
  };
  return (
    <div className="wp-combobox" onClick={() => setOpenCombobox(!openCombobox)}>
      {label && <p className="label">{label}</p>}

      <div className="wrapper_combobox" >
        {labelItem ? <p className="text-black">{labelItem}</p> : <p className="text-gray">{placeholder}</p>}
        <div className="wrapper_dropdown">
          <img src={DropDown} alt="" />
        </div>
      </div>
      <div
        style={{ display: openCombobox ? 'block' : 'none' }}
        className="list-combobox"
      >
        <div className="wp-list-combobox" >
          {
            listDataCombobox?.map((item) => (
              <p key={item.id} onClick={() => handleDetail(item)}>
                {item.label}
              </p>

            ))
          }
        </div>
        {!listDataCombobox?.length &&
          <div
            className="display-flex align-center justify-center"
          >
            No data
          </div>
        }
      </div >
    </div >
  )
}

export default ComboboxComponent