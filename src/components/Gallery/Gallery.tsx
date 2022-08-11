import React from 'react'
import './gallery.scss'
import img1 from '../../Assets/images/gallery/Rectangle 27.png'
import img2 from '../../Assets/images/gallery/Rectangle 28.png'
import img3 from '../../Assets/images/gallery/Rectangle 30.png'
import img4 from '../../Assets/images/gallery/Rectangle 31.png'
import img5 from '../../Assets/images/gallery/Rectangle 32.png'
import img6 from '../../Assets/images/gallery/Rectangle 33.png'
import img7 from '../../Assets/images/gallery/Rectangle 35.png'
import img8 from '../../Assets/images/gallery/Rectangle 37.png'
import img9 from '../../Assets/images/gallery/Rectangle 36.png'
import img10 from '../../Assets/images/gallery/Rectangle 42.png'
import img11 from '../../Assets/images/gallery/Rectangle 38.png'

export const Gallery = () => {

  return (
    <div className='gallery' id='gallery'>
      <div className="container">
        <h4 className='project__title'>Галерея</h4>
        <div className='gallery__block'>
          <figure className="gallery__item gallery__item--1">
            <img className='gallery__img' src={img1} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img className='gallery__img' src={img2} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img className='gallery__img' src={img3} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img className='gallery__img' src={img4} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img className='gallery__img' src={img5} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img className='gallery__img' src={img6} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img className='gallery__img' src={img7} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img className='gallery__img' src={img8} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img className='gallery__img' src={img9} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img className='gallery__img' src={img10} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img className='gallery__img' src={img11} alt="" />
            <div className='gallery__img--info'>
              <h3>Lorem ipsum</h3>
              <p>19.02.2000</p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  )
}
