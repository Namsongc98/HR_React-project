import React, { useMemo } from 'react'
import ButtonComponent from '../../ButtonComponent'
import { useDispatch } from 'react-redux'
import { closeDialog } from '../../../../stores/features/modal/modalSlice'

const FooterSubmit = () => {
  const dispatch = useDispatch()
  const btnReject = useMemo(() => ({
    label: "Ok",
    styleBtn: "btn-gray",
    onClick() {
      dispatch(closeDialog({ open: false }))
    }
  }
  ), [])
  const btnSubmit = useMemo(() => ({
    label: "Yes",
    styleBtn: "btn-blue",
    onClick() {
      // navigate("/job-requests/create-job-request");
    }
  }))
  return (
    <div className='display-flex gap-flex-08 justify-flex-end mt-32'>
      <ButtonComponent dataButton={btnReject} />
      <ButtonComponent dataButton={btnSubmit} />
    </div>
  )
}

export default FooterSubmit
