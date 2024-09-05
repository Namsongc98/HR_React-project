import React, { useMemo, useState } from 'react'
import TitleComponent from '../../../components/componentUI/TitleComponent.jsx'
import DatePickComponent from '../../../components/common/DatePickComponent.jsx'
import InputComponent from '../../../components/common/InputComponent.jsx'
import ComboboxComponent from '../../../components/common/ComboboxComponent.jsx'
import ButtonComponent from '../../../components/common/ButtonComponent.jsx'
import TextareaComponent from '../../../components/common/TextareaComponent.jsx'
import { CONSTANTS_DEPARTMENT, CONSTANTS_LEVEL } from '../constant.js'
import { btnProp, createComboboxProps, createDateProp, createInputTextProp, createTextareaProp } from '../../../services/commonFunction.js'
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
  const inputJobTitle = useMemo(() => createInputTextProp("Job title", 'Enter job title', 'text', dataCreateJob.job_title, 'job_title', handleChange), [dataCreateJob.job_title, handleChange]);
  const inputSkills = useMemo(() => createInputTextProp("Skills", 'Enter skills', 'text', dataCreateJob.skills, 'skills', handleChange), [dataCreateJob.skills, handleChange]);
  const inputVacancies = useMemo(() => createInputTextProp("Number of vacancies", 'Enter number', 'number', dataCreateJob.number_of_vacancies, 'number_of_vacancies', handleChange), [dataCreateJob.number_of_interviews, handleChange]);
  const inputInterviews = useMemo(() => createInputTextProp("Number of interviews", 'Enter number', 'number', dataCreateJob.number_of_interviews, 'number_of_interviews', handleChange), [dataCreateJob.number_of_interviews, handleChange]);
  const dateStart = useMemo(() => createDateProp("Start date", dataCreateJob.start_date, null, 'start_date', handleChange), [dataCreateJob.start_date, handleChange]);
  const dateEnd = useMemo(() => createDateProp("End date", dataCreateJob.end_date, null, 'end_date', handleChange), [dataCreateJob.start_date, handleChange]);
  const textareaJobDescription = useMemo(() => createTextareaProp("Job description", 'Enter job description', '4', '50', 'description', dataCreateJob.description, handleChange), [dataCreateJob.description, handleChange]);
  const comboboxDepartment = useMemo(() => createComboboxProps(
    'Department',
    'Select department',
    dataCreateJob.department,
    'interviewer',
    CONSTANTS_DEPARTMENT,
    handleChange
  ), [dataCreateJob.department, handleChange]);
  const comboboxLever = useMemo(() => createComboboxProps(
    'Level',
    'Select level',
    dataCreateJob.level,
    'level',
    CONSTANTS_LEVEL,
    handleChange
  ), [dataCreateJob.level, handleChange]);
  const btnCancel = useMemo(() => btnProp("Cancel", "btn-gray"))
  const btnSubmit = useMemo(() => btnProp("Submit", "btn-blue"))
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