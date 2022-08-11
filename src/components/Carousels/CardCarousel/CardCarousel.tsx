import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { message } from 'antd';
import axios from 'axios';
import './cardCarousel.scss'
import { AuthModal } from '../../Auth';

export const CardCarousel = () => {
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [checkedCard, setCheckedCard] = useState()
  const [selectedChecked, setSelectedChecked] = useState<number>()

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/service/event/').then((res) => {
      setData(res.data)

    }).catch((err) => {
      message.error(err)
    })
  }, [])

  const onChange = (e: any, id: number) => {
    let authorized = localStorage.getItem('username') || ''

    if (!authorized && e.target.checked) {
      setIsModalVisible(true)
      e.target.checked = false
    } else {
      setSelectedChecked(selectedChecked)
      localStorage.setItem('menuChecked', String(id))
    }
  }

  const checked = (arg: any) => {
    setCheckedCard(arg)
  }

  return (
    <>
      <AuthModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <div className='card__carousel' id='cardCarousel'>
        <div className="container">
          <h4 className='project__title'>Мероприятия</h4>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={
              {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }
            }
          >
            {
              data && data.map((item, index) => {
                const { id, name, image } = item
                return (
                  <SwiperSlide key={id}>
                    <div className='carousel__service'>
                      <input
                        id={id}
                        type="checkbox"
                        checked={checkedCard === index}
                        className='input__checkbox'
                        onChange={(e) => onChange(e, id)}
                      />
                      <label
                        htmlFor={id}
                        className='carousel__service--label'
                        onClick={() => checked(index)}
                      >
                        <div className='carousel__service--item'>
                          <img src={image} alt="" />
                          <div className='carousel__service--info'>
                            <h3>{name}</h3>
                          </div>
                        </div>
                      </label>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}
