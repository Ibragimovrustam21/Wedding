import React from 'react'
import './navbar.scss'
import logo from '../../Assets/images/Event.png'
import { animateDown, animateLeft, animateRight } from '../AnimationSettings/Animation'

interface IShowModal {
  setIsModalVisible: (bool: boolean) => void
}

window.addEventListener('scroll', function () {
  let head = document.querySelector('.navbar')
  head?.classList.toggle('sticky', window.scrollY > 80)
})

export const Navbar = ({ setIsModalVisible }: IShowModal) => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar__logo'>
          <a href="/" {...animateRight} data-aos-duration='1000'>
            <img src={logo} alt="" />
          </a>
        </div>
        <div className='navbar__menu'>
          <ul>
            <li {...animateDown} data-aos-duration='600' ><a href="/"> Главная</a></li>
            <li {...animateDown} data-aos-duration='800' ><a href="#gallery">Галерея</a></li>
            <li {...animateDown} data-aos-duration='1000' ><a href="#contact">Контакты</a></li>
          </ul>
        </div>
        <div className='navbar__btn'>
          <button {...animateLeft} data-aos-duration='1000' className='btn' onClick={() => setIsModalVisible(true)}>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  )
}
