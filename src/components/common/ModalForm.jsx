import { Modal } from 'antd'
import React from 'react'

const ModalForm = ({ children, dataModal }) => {
    const { title, open, onCloseModal } = dataModal
    return (
        <Modal
            title={title}
            centered
            open={open}
            onCancel={() => onCloseModal()}
            footer={null}
        >
            {children}
        </Modal>
    )
}

export default ModalForm
