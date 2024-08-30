import React, { useState } from 'react'
import TitleComponent from '../../components/componentUI/TitleComponent'
import ButtonComponent from '../../components/common/ButtonComponent'
import ComboboxComponent from '../../components/common/ComboboxComponent'
import ListStatusComponent from '../../components/componentUI/ListStatusComponent'
import { LIST_STATUS_JOB_REQUEST, LIST_COMBOBOX, DATA_JOB_REQUEST, COLUMNS_JOB_REQUEST, CONSTANTS_STATUS, CONSTANTS_ACTION } from './constant.js'
import TableComponent from '../../components/common/TableComponent'
import { setClassNameColumnsTable } from '../../services/common.jsx'
import { useNavigate } from 'react-router'

const JobRequests = () => {
  const [dataCombo, setDataCombo] = useState()
  const [tData, setDataTable] = useState(DATA_JOB_REQUEST)
  const navigate = useNavigate();
  setClassNameColumnsTable(COLUMNS_JOB_REQUEST, CONSTANTS_STATUS, CONSTANTS_ACTION)
  const btnNewJob = {
    label: "New job",
    styleBtn: "btn-blue",
    onClick() {
      navigate("/job-requests/create-job-request");
    }
  }
  const dataCombobox = {
    placeholder: 'Department',
    name: 'department',
    value: dataCombo?.value,
    listDataCombobox: LIST_COMBOBOX,
    defaultValue: dataCombo,
    onChange: handleChange,
  }
  function handleChange(value, prop) {
    setDataCombo((prev) => ({
      ...prev,
      [prop]: value
    }))
  }

  const dataStatus = {
    listStatus: LIST_STATUS_JOB_REQUEST,
    filterData: (itemClick) => {
      const filterData = DATA_JOB_REQUEST.filter((item) => {
        if (itemClick.status === "All")
          return true
        return item.status === itemClick.status
      })
      setDataTable(filterData)
    },
  }

  const dataTable = {
    columns: COLUMNS_JOB_REQUEST,
    data: tData,
    handleDoubleClickRow: (record) => {
      navigate('/job-requests/' + record.key)
    },
  }
  return (
    <div>
      <div className="row justify-space-between align-center">
        <TitleComponent title="Job requests management" />
        <div className="row">
          <ButtonComponent dataButton={btnNewJob} />
        </div>
      </div>
      <div className="row align-center justify-space-between mt-24 mb-16">
        <ListStatusComponent dataStatus={dataStatus} />
        <div className="container-combobox">
          <ComboboxComponent dataCombobox={dataCombobox} />
        </div>
      </div>
      <div className="paper-bg w-full mt-0_8">
        <TableComponent dataTable={dataTable} />
      </div>
    </div>
  )
}

export default JobRequests