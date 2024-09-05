import React, { useState } from 'react'
import TitleComponent from '../../../components/componentUI/TitleComponent'
import ButtonComponent from '../../../components/common/ButtonComponent'
import { CONSTANTS_STATUS_CV, DATA_CV, JOB_INFOR, STATUS_JOB_CV, STATUS_CV_NEXT } from '../constant'
import ListStatusComponent from '../../../components/componentUI/ListStatusComponent'

const DetailJobRequest = () => {
  const [dataBtn, setDataBtn] = useState('Close')
  const [inforJob, setInforJob] = useState(JOB_INFOR)
  const [dataCV, setDataCV] = useState(DATA_CV)
  const btnNewJob = {
    label: dataBtn,
    styleBtn: "btn-blue",
    onClick() {
      setDataBtn('Open')
    }
  }
  const dataStatus = {
    listStatus: STATUS_JOB_CV,
    filterData: (itemClick) => {
      const filterData = DATA_CV.filter((item) => {
        if (itemClick.status === "All")
          return true
        return item.status === itemClick.value
      })
      setDataCV(filterData)
    },
  }
  const RenderListBtn = ({ status }) => {
    if (dataBtn === 'Open') return <></>
    return STATUS_CV_NEXT[status]?.map((item) => {
      return <ButtonComponent dataButton={item} key={item.id} />
    }
    )
  }

  return (
    <div>
      <div className="row justify-space-between align-center mb-24">
        <TitleComponent title={inforJob.job_title} backRouterBoolean={true} />
        <div className="row wrapper_button">
          <ButtonComponent dataButton={btnNewJob} />
        </div>
      </div>
      <div className="paper-bg w-full p-16">
        <h1 className="mb-16 font-lg">Job information</h1>
        <div className="">
          <div className="row gap-08 gap-bottom-08">
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">Department:</p>
              <p>{inforJob.department}</p>
            </div>
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">Number of vacancies:</p>
              <p>{inforJob.number_of_vacancies}</p>
            </div>
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">Building number:</p>
              <p>{inforJob.building}</p>
            </div>
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">Start date:</p>
              <p>{inforJob.start_date}</p>
            </div>
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">Requester:</p>
              <p>{inforJob.requester}</p>
            </div>
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">End date:</p>
              <p>{inforJob.end_date}</p>
            </div>
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">Skills:</p>
              <p>{inforJob.skills}</p>
            </div>
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">Status:</p>
              <p>{inforJob.status}</p>
            </div>
            <div className="col-xl-6 row gap-08">
              <p className="text-prop text-gray-prop">Level:</p>
              <p>{inforJob.level}</p>
            </div>
            <div className="col-xl-12">
              <p className="text-prop text-gray-prop mb-08">Job description:</p>
              <p>
                {inforJob.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h1 className="">Applicants</h1>
        <div className="row align-center mt-08">
          <ListStatusComponent dataStatus={dataStatus} />
        </div>
      </div>
      <div className="display-flex flex-column gap-flex-08 mt-16">
        {dataCV?.map((item) => (
          <div
            className="paper-bg pt-12 pb-12 pl-16 pr-16 row" key={item.id}
          >
            <div className="col-xl-8">
              <h1 className="">
                <span className="font-md font-600"> {item.nameUser}</span>
                <span
                  className={`font-md font-400 ml-16 display-inline-block ${CONSTANTS_STATUS_CV[item.status]}`}

                >{item.status}</span>
              </h1>
              <div className="row gap-08">
                <p className="title-infor text-prop">Date of Birth:</p>
                <p>{item.DateBirth}</p>
              </div>
              <div className="row gap-08">
                <p className="title-infor text-prop">Work experience:</p>
                <p>{item.WorkExperience}</p>
              </div>
              <div className="row gap-08">
                <p className="title-infor text-prop">CV:</p>
                <p className="text-purple">{item.CV}</p>
              </div>
            </div>
            <div
              className="col-xl-4 display-flex flex-column justify-space-between align-flex-end"
            >
              <div className="display-flex gap-flex-08">
                <RenderListBtn status={item.status} />
              </div>
              <p className="text-gray mt-24">
                Applied at
                <span className="text-gray mt-24">{item.AppliedAt}</span>
              </p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default DetailJobRequest