import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { message } from 'antd';
import axios from 'axios';
import '../CardCarousel/cardCarousel.scss'

interface IToken {
  access?: string,
  refresh?: string
}

export const CardCarousel2 = () => {
  const [data, setData] = useState([])
  const [checkedCard, setCheckedCard] = useState()

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/service/event/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        message.error(err)
      })

    if (localStorage.getItem('username')) {
      const token: IToken = JSON.parse(localStorage.getItem('token') || '')

      axios.get(process.env.REACT_APP_API_URL + '/service/wedding_hall/', { headers: { "Authorization": `Bearer ${token.access}` } })
        .then((res) => {
          setData(res.data)
          console.log(res);
        })
        .catch((err) => {
          message.error(err)
        })
    }
  }, [])

  const onChange = (e: any) => {

  }
  const checked = (arg: any) => {
    setCheckedCard(arg)
  }
  return (
    <div className='card__carousel'>
      <div className="container">
        <h4 className='project__title'>Заведения мероприятии</h4>
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
              const { id, name,  image } = item

              return (
                <SwiperSlide key={id}>
                  <div className='carousel__service'>
                    <input type="checkbox" checked={checkedCard === index} id={id + '1'} onChange={onChange} />
                    <label htmlFor={id + '1'} className='carousel__service--label' onClick={() => checked(index)}>
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
  )
}
