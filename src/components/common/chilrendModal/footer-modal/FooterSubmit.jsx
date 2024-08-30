import React from 'react'
import ButtonComponent from '../../ButtonComponent'
import { useDispatch } from 'react-redux'
import { closeDialog } from '../../../../stores/features/modal/modalSlice'

const FooterSubmit = () => {
  const dispatch = useDispatch()
  const btnReject = {
    label: "Cancel",
    styleBtn: "btn-gray",
    onClick() {
      dispatch(closeDialog({ open: false }))
    }
  }
  const btnSubmit = {
    label: "Submit",
    styleBtn: "btn-blue",
    onClick() {
      // navigate("/job-requests/create-job-request");
    }
  }
  return (
    <div className='display-flex gap-flex-08 flex-row-reverse'>
      <ButtonComponent dataButton={btnReject} />
      <ButtonComponent dataButton={btnSubmit} />
    </div>
  )
}

export default FooterSubmit
