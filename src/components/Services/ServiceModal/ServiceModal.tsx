import React from 'react'
import { Modal } from 'antd'
import './serviceModal.scss'

interface IModalData {
  id: number,
  name: string,
  type: string,
  price: number,
  image: string,
  video: string,
  description: string,
  event: number
}

interface IModalProps {
  modalData: IModalData,
  serviceModal: boolean,
  setServiceModal: (arg: boolean) => void,
  clickCard: (id: number) => void,
  selectedCard: number[]
}

export const ServiceModal = ({ modalData, serviceModal, setServiceModal, clickCard, selectedCard }: IModalProps) => {
  const { id, name, image, description, price } = modalData

  const handleCancel = () => {
    setServiceModal(false);
  }
  const onSubmit = (id: number) => {
    clickCard(id)
    setServiceModal(false);
  }

  return (
    <Modal width={'700px'} className='service__modal' footer={null} visible={serviceModal} onCancel={handleCancel}>
      <div className='services__card--item'>
        <div className='card__img'>
          <img src={image} alt="" />
        </div>
        <div className='card__info'>
          <h3 className='card__title'>{name}</h3>
          <p className='card__text'>{description}</p>
          <p className='card__text'>
            Sem nullam malesuada risus commodo sed pharetra viverra. Sit sodales ipsum lorem porta lobortis placerat justo. Feugiat vivamus viverra aliquam aliquet mattis. Augue vitae vestibulum porta mi sit convallis. Rutrum tempor adipiscing sed eleifend tellus lacus morbi quis praesent. Consequat bibendum porttitor venenatis, sapien, cursus pulvinar malesuada senectus.
          </p>
          <p className='card__price'>Price:<span>{price} $</span></p>
          <button className={selectedCard.find(i => i === id) ? 'card__btn btn' : 'card__btn btn__gray'} onClick={() => onSubmit(id)}>
            {selectedCard.find(i => i === id) ? 'Выбрано ' : 'Выбрать'}
          </button>
        </div>
      </div>
    </Modal>
  )
}
