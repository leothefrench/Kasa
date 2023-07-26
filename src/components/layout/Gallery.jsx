import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import '../../styles/gallery.scss'

const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
const leftArrow = <FontAwesomeIcon icon={faAngleLeft} />

const Gallery = ({img}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = img.length

  const nextPicture = () => {setCurrentSlide( currentSlide === length - 1 ? 0 : currentSlide + 1 )}
  const previousPicture = () => {setCurrentSlide( currentSlide === 0 ? length - 1 : currentSlide - 1)}

  return (
    <div className="caroussel">
      <div className="caroussel__container" >
        { img.map((picture, index) => <img src={picture} key={index} alt="housing" className="caroussel__container__image" />) }
      </div>

      <div className="caroussel__arrowsControl">
        <i className='caroussel__arrowsControl__img' onClick={previousPicture}>{leftArrow}</i>
        <i className='caroussel__arrowsControl__img' onClick={nextPicture}>{rightArrow}</i>
      </div>
      <div className="caroussel__picture__index">{ currentSlide + 1 } / {length}</div>

    </div>
  )
}

export default Gallery

// style={{transform: `translateX(-${pictureIndex * displayImg()}px)`}