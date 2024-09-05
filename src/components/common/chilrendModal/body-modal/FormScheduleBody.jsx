import React, { useCallback, useMemo, useState } from 'react'

import { useDispatch } from 'react-redux'
import ComboboxComponent from '../../ComboboxComponent'
import DatePickComponent from '../../DatePickComponent'
import { btnProp, createComboboxProps, createDateProp, getAllHoursInDay, getAllMinutesInHour } from '../../../../services/commonFunction'
import { CONST_INTERVIEWER } from '../../../../constant/constant'
import ButtonComponent from '../../ButtonComponent'
import { closeDialog, submitDta } from '../../../../stores/features/modal/modalSlice'

const FormScheduleBody = () => {
    const dispatch = useDispatch()
    const [schedule, setSchedule] = useState({
        interviewer: '',
        interviewerDate: '',
        hour: '',
        minute: ''
    })
    const handleChange = useCallback((value, prop) => {
        setSchedule(prev => ({
            ...prev,
            [prop]: value
        }));
    }, []);


    const dataPropInterviewer = useMemo(() => createComboboxProps(
        'Interviewer',
        'Select interviewer',
        schedule.interviewer,
        'interviewer',
        CONST_INTERVIEWER,
        handleChange
    ), [schedule.interviewer, handleChange]);
    const dataPropInterviewerHour = useMemo(() => createComboboxProps(
        ' ',
        '',
        schedule.hour,
        'hour',
        getAllHoursInDay(),
        handleChange
    ), [schedule.hour, handleChange]);
    const dataPropInterviewerMinute = useMemo(() => createComboboxProps(
        ' ',
        '',
        schedule.minute,
        'minute',
        getAllMinutesInHour(),
        handleChange
    ), [schedule.minute, handleChange]);

    const dateInterviewer = useMemo(() => createDateProp("Start date", schedule.interviewerDate, null, 'interviewerDate', handleChange), [schedule.interviewerDate, handleChange]);
    
    const handleClickCancel = useCallback(() => {
        dispatch(closeDialog({ open: false }))
    }, [])

    const handleClickSubmit = useCallback(() => {
        console.log("handleClickSubmit", schedule)
    }, [schedule.interviewerDate, schedule.interviewer, schedule.hour, schedule.minute])

    const btnReject = useMemo(() => btnProp("Cancel", "btn-gray", handleClickCancel), [handleClickCancel])
    const btnSubmit = useMemo(() => btnProp("Submit", "btn-blue", handleClickSubmit), [handleClickSubmit])


    return (
        <>
            <div>
                <ComboboxComponent dataCombobox={dataPropInterviewer} />
                <div className="row gap-08">
                    <div className="col-xl-6"><DatePickComponent dateDta={dateInterviewer} /></div>
                    <div className="col-xl-3"><div className='label-body'></div> <ComboboxComponent dataCombobox={dataPropInterviewerHour} /></div>
                    <div className="col-xl-3"><div className='label-body'></div><ComboboxComponent dataCombobox={dataPropInterviewerMinute} /></div>
                </div>
            </div>
            <div className='display-flex gap-flex-08 justify-flex-end mt-32'>
                <ButtonComponent dataButton={btnReject} />
                <ButtonComponent dataButton={btnSubmit} />
            </div>
        </>
    )
}

export default FormScheduleBody
