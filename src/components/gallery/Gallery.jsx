import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import './gallery.scss'

const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
const leftArrow = <FontAwesomeIcon icon={faAngleLeft} />

const Gallery = ({img}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = img.length
  // Check Existing Array
  if(!Array.isArray(img) || length <=0) {
    return null
  }

  const nextPicture = () => {setCurrentSlide( currentSlide === length - 1 ? 0 : currentSlide + 1 )}
  const previousPicture = () => {setCurrentSlide( currentSlide === 0 ? length - 1 : currentSlide - 1)}

  console.log(currentSlide);

  return (
    <div className="caroussel">
        { img.map((picture, index) => { 
          return (
            <>
              <div key={index} className={!index === currentSlide ? 'caroussel__container' : 'caroussel__container--active' } >
                {index === currentSlide && <img src={picture}  alt="housing" className="caroussel__container__image" /> }
              </div>
              <div className="caroussel__arrowsControl">
                {length > 1 && (
                  <>
                    <i className='caroussel__arrowsControl__img' onClick={previousPicture}>{leftArrow}</i>
                    <i className='caroussel__arrowsControl__img' onClick={nextPicture}>{rightArrow}</i>
                  </>
                )}
              </div>
              {length > 1 && (
                <div className="caroussel__picture__index">{ currentSlide + 1 } / {length}</div>
              )}
            </>
          )
         })}
    </div>
  )
}

export default Gallery
