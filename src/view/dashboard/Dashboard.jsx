import React, { useCallback, useMemo, useState } from 'react'
import TitleComponent from '../../components/componentUI/TitleComponent'
import DateWeekComponent from '../../components/common/DateWeekComponent'
import { createDateProp, tableProp } from '../../services/commonFunction'
import { COLUMN_TABLE__NEW_APPLICANTS, COLUMN_TABLE_OPENED_JOBS, dataNewApplicants, dataOpenedJobs, listNumber } from './constant'
import TableComponent from '../../components/common/TableComponent'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  const [dataWeek, setDataWeek] = useState()
  const handleChange = useCallback((value) => {
    setDataWeek(value)
  }, [])
  const dateInterviewer = useMemo(() => createDateProp(" ", dataWeek, null, '', handleChange, 'This Week'), [dataWeek, handleChange]);

  const dataTableNewJob = useMemo(() => tableProp(
    COLUMN_TABLE__NEW_APPLICANTS,
    dataNewApplicants,
  ), [COLUMN_TABLE__NEW_APPLICANTS, dataNewApplicants])

  const dataTableOpened = useMemo(() => tableProp(
    COLUMN_TABLE_OPENED_JOBS,
    dataOpenedJobs,
  ), [COLUMN_TABLE__NEW_APPLICANTS, dataNewApplicants])

  return (
    <>
      <div className="row justify-space-between align-center">
        <TitleComponent title='Dashboard' />
        <div className="wrapper_date-week display-flex align-center">
          <DateWeekComponent dateDta={dateInterviewer} />
        </div>
      </div>
      <div className="row">
        <div className="row gap-02 mt-24 mb-24 w-full">
          {listNumber?.map((item) => (
            <div className="col-xl-3" key={item.id}>
              <div className="paper-bg p-16">
                <p className="font-md text-gray">{item.title}</p>
                <h4 className="font-xl">{item.count}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="row w-full gap-24">
          <div className="row col-xl-8">
            <div className="w-full">
              <div className="paper-bg p-12">
                <div className="display-flex align-center justify-space-between">
                  <p className="font-xl text-black font-600">New applicants</p>
                  <Link className="font-md text-blue font-400 cursor-pointer" to={'/applicants'}>Show more</Link>
                </div>
                <div className="display-flex align-center justify-space-between">
                  <TableComponent dataTable={dataTableNewJob} />
                </div>
              </div>
            </div>
            <div className="w-full mt-24">
              <div className="paper-bg p-12">
                <div className="display-flex align-center justify-space-between">
                  <p className="font-xl text-black font-600">New applicants</p>
                  <Link className="font-md text-blue font-400 cursor-pointer" to={'/applicants'}>Show more</Link>
                </div>
                <div className="display-flex align-center justify-space-between">
                  <TableComponent dataTable={dataTableOpened} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="paper-bg p-16 scrollbar-custom wp__left-side">
              <p className="font-xl font-6 text-black">To interview today (12)</p>
              <div className="pt-12 pb-12">
                <div className="wp__item-inter">
                  <div className="row justify-space-between align-center">
                    <div className="row">
                      <span className="font-6">John Doe</span>
                      <span className="text-orange ml-08">Waiting for Round 1</span>
                    </div>
                    <span className="text-gray">15:30</span>
                  </div>
                  <div className="">
                    <span className="text-gray title-interview">Job title:</span>
                    <span className="truncate">Web App Developer (PHP/C#/.Net/J...</span>
                  </div>
                  <div className="">
                    <span className="text-gray title-interview">Department:</span>
                    <span className="truncate">Tech Department</span>
                  </div>
                  <div className="">
                    <span className="text-gray title-interview">Interviewer:</span>
                    <span className="truncate">Christopher</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
