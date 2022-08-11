import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { message } from 'antd'
import axios from 'axios';
import './mainCarousel.scss'

export const MainCarousel = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/service/base_image/').then((res) => {
      setData(res.data)
    }).catch((err) => {
      message.error(err)
    })
  }, [])

  return (
    <div className='main__carousel' >
      <div className="container">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {
            data && data.map(item => {
              const { id, title, image } = item
              return (
                <SwiperSlide key={id}>
                  <img src={image} alt="" />
                  <div className='carosuel__content'>
                    <h2 className='carousel__title'>
                      {title}
                    </h2>
                    <a className='carousel__btn' href="#cardCarousel">
                      Выбрать
                    </a>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}
