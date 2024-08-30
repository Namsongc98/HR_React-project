import { Modal } from 'antd';
import React, { Fragment, lazy, Suspense, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../stores/features/modal/modalSlice';

const loadFooter = (name) => {
  return lazy(() => import(`./chilrendModal/footer-modal/${name}.jsx`));
};
const loadBody = (name) => {
  return lazy(() => import(`./chilrendModal/body-modal/${name}.jsx`));
};



const ModalComponent = () => {
  const modalStore = useSelector((state) => state.modalSlice)
  const dispatch = useDispatch()
  const { open, title, footer, body } = modalStore




  const DynamicFooter = loadFooter(footer);
  const DynamicBody = loadBody(body);
  return (
    <Modal
      title={title}
      centered
      open={open}
      onCancel={() => dispatch(closeDialog({ ...modalStore, open: false }))}
      footer={(_, { }) => (
        <>
          <Suspense fallback={<></>}>
            {footer ? <DynamicFooter /> : <></>}
          </Suspense>

        </>
      )}
    >
      <Suspense fallback={<></>}>
        {body ? <DynamicBody /> : <></>}
      </Suspense>
    </Modal>
  )
}

export default ModalComponent
