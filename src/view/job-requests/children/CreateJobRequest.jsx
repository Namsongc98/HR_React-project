import React, { useState } from 'react'
import TitleComponent from '../../../components/componentUI/TitleComponent.jsx'
import DatePickComponent from '../../../components/common/DatePickComponent.jsx'
import InputComponent from '../../../components/common/InputComponent.jsx'
import ComboboxComponent from '../../../components/common/ComboboxComponent.jsx'
import ButtonComponent from '../../../components/common/ButtonComponent.jsx'
import TextareaComponent from '../../../components/common/TextareaComponent.jsx'
import { CONSTANTS_DEPARTMENT, CONSTANTS_LEVEL } from '../constant.js'
const CreateJobRequest = () => {
  const [dataCreateJob, setCreateJob] = useState({
    job_title: "",
    department: '',
    skills: '',
    level: '',
    start_date: '',
    end_date: '',
    number_of_vacancies: '',
    number_of_interviews: '',
    description: ''
  })
  const inputJobTitle = {
    label: "Job title",
    type: 'text',
    placeholder: 'Enter job title',
    value: dataCreateJob.job_title,
    name: 'job_title',
    onChange: handleChange,
  }
  const inputSkills = {
    label: "Skills",
    type: 'text',
    placeholder: 'Enter skills',
    value: dataCreateJob.skills,
    name: 'skills',
    onChange: handleChange,
  }
  const inputVacancies = {
    label: "Number of vacancies",
    type: 'number',
    placeholder: 'Enter number',
    value: dataCreateJob.number_of_vacancies,
    name: 'number_of_vacancies',
    onChange: handleChange,
  }
  const inputInterviews = {
    label: "Number of interviews",
    placeholder: 'Enter number',
    type: 'number',
    value: dataCreateJob.number_of_interviews,
    name: 'number_of_interviews',
    onChange: handleChange,
  }
  const dateStart = {
    label: "Start date",
    value: dataCreateJob.start_date,
    defaultValue: null,
    name: 'start_date',
    onChange: handleChange
  }
  const dateEnd = {
    label: "End date",
    value: dataCreateJob.end_date,
    name: 'end_date',
    defaultValue: null,
    onChange: handleChange
  }
  const textareaJobDescription = {
    label: "Job description",
    placeholder: 'Enter job description',
    rows: "4",
    cols: "50",
    value: dataCreateJob.description,
    name: 'description',
    onChange: handleChange,
  }

  const comboboxDepartment = {
    label: "Department",
    placeholder: 'Select department',
    value: dataCreateJob.department,
    name: 'department',
    listDataCombobox: CONSTANTS_DEPARTMENT,
    onChange: handleChange,
  }
  const comboboxLever = {
    label: "Level",
    placeholder: 'Select level',
    name: 'level',
    value: dataCreateJob.level,
    listDataCombobox: CONSTANTS_LEVEL,
    onChange: handleChange,
  }
  const btnCancel = {
    label: "Cancel",
    styleBtn: "btn-gray"
  }
  const btnSubmit = {
    label: "Submit",
    styleBtn: "btn-blue"
  }

  function handleChange(value, prop) {
    setCreateJob((prev) => ({
      ...prev,
      [prop]: value
    }))
  }

  return (
    <div className="">
      <div className="row justify-space-between align-center">
        <div className="row align-center">
          <TitleComponent title="Create new Job request" backRouterBoolean={true} />
        </div>
        <div className="row wrapper_button gap-flex-08">
          <ButtonComponent dataButton={btnCancel} />
          <ButtonComponent dataButton={btnSubmit} />
        </div>
      </div>
      <div className="mt-24 paper-bg p-16">
        <div className="w-full row flex-column gap-flex-08">
          <div className="row gap-16">
            <div className="col-xl-6">
              <InputComponent dataInput={inputJobTitle} />
            </div>
            <div className="col-xl-6">
              <ComboboxComponent dataCombobox={comboboxDepartment} />

            </div>
          </div>
          <div className="row gap-16">
            <div className="col-xl-6">
              <InputComponent label="Skills" dataInput={inputSkills} />
            </div>
            <div className="col-xl-6">
              <ComboboxComponent dataCombobox={comboboxLever} />

            </div>
          </div>
          <div className="row gap-16">
            <div className="col-xl-6">
              <DatePickComponent dateDta={dateStart} />
            </div>
            <div className="col-xl-6">
              <DatePickComponent dateDta={dateEnd} />
            </div>
          </div>
          <div className="row gap-16">
            <div className="col-xl-6">
              <InputComponent dataInput={inputVacancies} />
            </div>
            <div className="col-xl-6">
              <InputComponent dataInput={inputInterviews} />
            </div>
          </div>
        </div>
        <div className="mt-16 wp-text_area">
          <TextareaComponent dataTextarea={textareaJobDescription} />
        </div>
      </div>
    </div>
  )
}

export default CreateJobRequest