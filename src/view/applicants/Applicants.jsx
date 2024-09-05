import React, { useEffect, useMemo, useState } from 'react'
import TitleComponent from '../../components/componentUI/TitleComponent'
import TableComponent from '../../components/common/TableComponent'
import { useNavigate } from 'react-router'
import { COLUMN_TABLE_APPLICANTS, LIST_STATUS_APPLICANTS, TABLE_DATA_APPLICANTS, CONSTANTS_STATUS_CV } from './constant'
import ListStatusComponent from '../../components/componentUI/ListStatusComponent'
import { setClassNameColumnsTable } from '../../services/common'
import { lisStatusProp, tableProp } from '../../services/commonFunction'

const Applicants = () => {
  const [dataCV, setDataCV] = useState(TABLE_DATA_APPLICANTS)
  const navigate = useNavigate()
  useEffect(() => {
    setClassNameColumnsTable(COLUMN_TABLE_APPLICANTS, CONSTANTS_STATUS_CV,)
  }, [])
  const filterData = (itemClick) => {
    const filterData = TABLE_DATA_APPLICANTS.filter((item) => {
      if (itemClick.status === "All")
        return true
      return item.status === itemClick.status
    })
    setDataCV(filterData)
  };

  const dataStatus = useMemo(() => lisStatusProp(LIST_STATUS_APPLICANTS, filterData), [LIST_STATUS_APPLICANTS, filterData])
  const handleDoubleClickRow = (record) => {
    navigate('/applicants/' + record.key)
  }

  const dataTable = useMemo(() => tableProp(
    COLUMN_TABLE_APPLICANTS,
    dataCV,
    handleDoubleClickRow
  ), [COLUMN_TABLE_APPLICANTS, dataCV, handleDoubleClickRow])
  return (
    <div className="">
      <div className="row justify-space-between align-center">
        <TitleComponent title='Applicants management' />
      </div>
      <div className="row mt-24">
        <ListStatusComponent dataStatus={dataStatus} />
      </div>
      <div className="paper-bg w-full mt-08">
        <TableComponent dataTable={dataTable} />
      </div>
    </div>
  )
}

export default Applicants