import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
const leftArrow = <FontAwesomeIcon icon={faAngleLeft} />

const Gallery = (props) => {
  const [pictureIndex, setPicturesIndex] = useState(0)

  const displayImg = () => {
    const carousselImage = document.querySelector('.caroussel__container')

    if(carousselImage) {
      return carousselImage.width
    }
    return 
  }

  const nextPicture = () => {
    if(pictureIndex === props.img.length - 1) {
      setPicturesIndex(0)
    } else {
      setPicturesIndex(pictureIndex + 1)
    }
  }

  const previousPicture = () => {
    if(pictureIndex === 0) {
      setPicturesIndex(props.img.length - 1)
    } else {
      setPicturesIndex(pictureIndex - 1)
    }
  }

  return (
    <div className="caroussel">
      <div className="caroussel__container" style={{transform: `translateX(-${pictureIndex * displayImg()}px)`}}>
        { props.img.map((picture, i) => <img src={picture} key={i} alt="housing" className="caroussel__container__image" />) }
      </div>
      <div className="caroussel__arrowsControl">
        <i className='caroussel__arrowsControl__img' onClick={nextPicture}>{rightArrow}</i>
        <i className='caroussel__arrowsControl__img' onClick={previousPicture}>{leftArrow}</i>
      </div>
      <div className="picture_index">{ pictureIndex + 1 } / {props.img.length}</div>
    </div>
  )
}

export default Gallery