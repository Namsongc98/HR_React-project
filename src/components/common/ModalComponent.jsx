import { Modal } from 'antd';
import React, { lazy, Suspense, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../stores/features/modal/modalSlice';


const loadFooter = (name) => {
  return lazy(() => import(`./chilrendModal/footer-modal/${name}.jsx`));
};

const ModalComponent = () => {
  const modalStore = useSelector((state) => state.modalSlice)
  const dispatch = useDispatch()
  const { open, title, footer, body } = modalStore

  const DynamicFooter = footer ? loadFooter(footer) : null
  return (
    <Modal
      title={title}
      centered
      open={open}
      onCancel={() => dispatch(closeDialog({ ...modalStore, open: false }))}
      footer={(_, { OkBtn, CancelBtn }) => {
        return DynamicFooter ?
          <Suspense fallback={<></>}>
            <DynamicFooter />
          </Suspense> : <></>
      }
      }
    >
    </Modal >
  )
}

export default ModalComponent
