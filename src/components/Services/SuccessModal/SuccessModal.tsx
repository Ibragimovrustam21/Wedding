import React from 'react'
import { Modal } from 'antd'
import './successModal.scss'

interface IModalProps {
  successModalVisible: boolean,
  setSuccessModalVisible: (arg: boolean) => void
}

export const SuccessModal = ({ successModalVisible, setSuccessModalVisible }: IModalProps) => {
  const handleCancel = () => {
    setSuccessModalVisible(false);
  }

  return (
    <Modal width={'600px'} className='success__modal' footer={null} visible={successModalVisible} onCancel={handleCancel}>
      <div className='success__modal--box'>
        <h4 className='success__modal--title'>Ваша заявка принята</h4>
        <p className='success__modal--text'>Мы вам позвоним, спасибо что пользуетесь нашими услугами.</p>
        <div className='icon__block'>
          <svg width="54" height="42" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.58325 22.5L5.74992 17.5L23.2499 32.0833L47.8333 1.25L52.8333 5.41667L24.0833 41.25L1.58325 22.5Z" stroke="#5785A9" />
          </svg>
        </div>
      </div>
    </Modal>
  )
}
