import React, { useCallback, useEffect, useMemo, useState } from 'react'
import TitleComponent from '../../components/componentUI/TitleComponent'
import ButtonComponent from '../../components/common/ButtonComponent'
import ComboboxComponent from '../../components/common/ComboboxComponent'
import ListStatusComponent from '../../components/componentUI/ListStatusComponent'
import { LIST_STATUS_JOB_REQUEST, LIST_COMBOBOX, DATA_JOB_REQUEST, COLUMNS_JOB_REQUEST, CONSTANTS_STATUS, CONSTANTS_ACTION } from './constant.js'
import TableComponent from '../../components/common/TableComponent'
import { setClassNameColumnsTable } from '../../services/common.jsx'
import { useNavigate } from 'react-router'
import { btnProp, createComboboxProps, lisStatusProp, tableProp } from '../../services/commonFunction.js'

const JobRequests = () => {
  const [dataCombo, setDataCombo] = useState()
  const [tData, setDataTable] = useState(DATA_JOB_REQUEST)
  const navigate = useNavigate();
  useEffect(() => {
    setClassNameColumnsTable(COLUMNS_JOB_REQUEST, CONSTANTS_STATUS, CONSTANTS_ACTION)
  }, [])
  const handleClickReject = useCallback(() => {
    navigate("/job-requests/create-job-request");
  }, [])
  const btnNewJob = useMemo(() => btnProp("New job", "btn-blue", handleClickReject), [])
  const dataCombobox = useMemo(() => createComboboxProps(' ', 'Department', dataCombo?.value, 'department', LIST_COMBOBOX, handleChange), [dataCombo?.value, LIST_COMBOBOX, handleChange])

  function handleChange(value, prop) {
    setDataCombo((prev) => ({
      ...prev,
      [prop]: value
    }))
  }
  const filterData = (itemClick) => {
    const filterData = DATA_JOB_REQUEST.filter((item) => {
      if (itemClick.status === "All")
        return true
      return item.status === itemClick.status
    })
    setDataTable(filterData)
  };
  const dataStatus = useMemo(() => lisStatusProp(LIST_STATUS_JOB_REQUEST, filterData), [LIST_STATUS_JOB_REQUEST, filterData])
  const handleDoubleClickRow = (record) => {
    navigate('/job-requests/' + record.key)
  };

  const dataTable = useMemo(() => tableProp(COLUMNS_JOB_REQUEST, tData, handleDoubleClickRow), [COLUMNS_JOB_REQUEST, tData, handleDoubleClickRow])
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