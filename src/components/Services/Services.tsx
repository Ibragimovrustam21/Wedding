import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { message } from 'antd'
import { ServiceModal } from './ServiceModal'
import { SuccessModal } from './SuccessModal'
import './services.scss'
import { animateUp } from '../AnimationSettings/Animation'

interface IData {
  id: number,
  name: string,
  type: string,
  price: number,
  image: string,
  video: string,
  description: string,
  event: number
}

export const Services = () => {
  const [data, setData] = useState<IData[]>([])
  const [serviceModal, setServiceModal] = useState<boolean>(false);
  const [successModalVisible, setSuccessModalVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IData>({
    id: 0,
    name: '',
    type: '',
    price: 0,
    image: '',
    video: '',
    description: '',
    event: 0
  })
  const [selectedCard, setSelectedCard] = useState<number[]>([])


  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/service/services/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        message.error(err)
      })
  }, [])

  const showModal = (item: IData) => {
    setModalData(item)
    setServiceModal(true)
  }


  const clickCard = async (id: number) => {
    selectedCard.length === 0 && setSelectedCard([id])
    selectedCard.map(i => {
      if (i !== id) {
        return setSelectedCard([...selectedCard, id])
      }
      else {
        let filter = selectedCard.filter(a => a !== id)
        return setSelectedCard([...filter])
      }
    })
  }

  const checkout = async () => {

    await axios.post(process.env.REACT_APP_API_URL + '/service/order/', {
      menu: JSON.parse(localStorage.getItem('menuChecked') || ''),
      wedding_hall: 1,
      user: localStorage.getItem('username'),
      service: selectedCard
    })
      .then(res => {
        setSuccessModalVisible(true)
      })
      .catch(err => {
        message.error(err)
      })
  }

  return (
    <>
      <ServiceModal selectedCard={selectedCard} clickCard={clickCard} modalData={modalData} serviceModal={serviceModal} setServiceModal={setServiceModal} />
      <SuccessModal successModalVisible={successModalVisible} setSuccessModalVisible={setSuccessModalVisible} />
      <div className='services'>
        <div className='container'>
          <h3 className='services__title'>Услуги</h3>
          <div className='services__cards'>
            {
              data && data.map((item, key) => {
                const { id: btnId, name, image, description, price } = item

                return (
                  <div {...animateUp} className='services__card--item' onClick={() => clickCard(btnId)} key={key} >
                    <div className='card__img'>
                      <img src={image} alt="" />
                    </div>
                    <div className='card__info'>
                      <h3 className='card__title'>{name}</h3>
                      <p className='card__text'>{description}</p>
                      <p className='card__price'>Price: <span>${price}</span></p>
                      <button className={selectedCard.find(i => i === btnId) ? 'card__btn btn' : 'card__btn btn__gray'} onClick={() => showModal(item)}>
                        {selectedCard.find(i => i === btnId) ? 'Выбрано ' : 'Выбрать'}
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='services__btn'>
            <button className='btn' onClick={checkout}>Оформить</button>
          </div>
        </div>
      </div>
    </>
  )
}
