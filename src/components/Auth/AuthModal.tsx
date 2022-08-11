import React, { useState, useEffect } from 'react'
import { Modal, Input, DatePicker, Select, message } from 'antd'
import modal_img from '../../Assets/images/modalmg.png'
import './authModal.scss'
import axios from 'axios'
import InputMask from 'react-input-mask';
import type { DatePickerProps } from 'antd';


interface IModal {
  isModalVisible: boolean,
  setIsModalVisible: (arg: boolean) => void
}

export const AuthModal = ({ isModalVisible, setIsModalVisible }: IModal) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [cite, setCite] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [register, setRegister] = useState<boolean>(false)
  const { Option } = Select;

  const hideModal = () => {
    setIsModalVisible(false);
  }

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDate(dateString)
  }

  const handleChangeOption = (arg: string) => {
    setCite(arg)
  }

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    await axios.post(process.env.REACT_APP_API_URL + '/accounts/register/',
      {
        username: name,
        phone: phone.slice(4, 13),
        cite,
        wedding_date: date
      },
    )
      .then((res) => {
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('phone', res.data.phone)
        localStorage.setItem('date', res.data.wedding_date)
        localStorage.setItem('cite', res.data.cite)
        message.success('success');
        setRegister(true)
        setIsModalVisible(false)
      })
      .catch((err => {
        message.error(err)
      }))

  }

  useEffect(() => {
    if (localStorage.getItem('username')) {
      getToken()
    }
  }, [register])

  const getToken = async () => {
    await axios.post(process.env.REACT_APP_API_URL + '/accounts/api/token/', {
      phone: localStorage.getItem('phone'),
      password: 'yusuf123'
    }).then((res) => {
      localStorage.setItem('token', JSON.stringify(res.data))
    }).catch((err) => {
      message.error(err)
    })
  }

  return (
    <div>
      <Modal width={'800px'} className='auth__modal' footer={null} visible={isModalVisible} onCancel={hideModal}>
        <div className='modal__block'>
          <div className='modal__form'>
            <form onSubmit={handleSubmit}>
              <h4 className='modal__form--title'>Регистрация</h4>
              <div className='modal__input'>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='modal__input--text'
                  size='large'
                  placeholder="Имя Фамилия"
                  minLength={3}
                  maxLength={24}
                />
              </div>
              <div className="modal__input">
                <DatePicker
                  placeholder='Дата'
                  size='large'
                  onChange={onChange}
                // format="DD-MM-YYYY"
                />
              </div>
              <div className="modal__input">
                <Select
                  defaultValue="Место мероприятия"
                  style={{
                    width: '100%',
                  }}
                  onChange={handleChangeOption}
                  size='large'
                >
                  <Option value="Toshkent">Toshkent</Option>
                  <Option value="Navoiy">Navoiy</Option>
                  <Option value="Buxoro">Buxoro</Option>
                </Select>
              </div>
              <div className='modal__input'>
                <InputMask
                  className='modal__input--phone'
                  mask="+\9\9\8999999999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  alwaysShowMask={true}
                />
              </div>
              <button className='btn' type='submit'>
                Зарегистрироваться
              </button>
            </form>
          </div>
          <div className='modal__img'>
            <img src={modal_img} alt="" />
          </div>
        </div>
      </Modal>
    </div>
  )
}
