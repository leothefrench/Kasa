import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const star = <FontAwesomeIcon icon={ faStar } />
const greyStar = <FontAwesomeIcon icon={ faStar } />

const StarsScale = (props) => {
  const scaleRating = props.scaleRating // Récupération props (niveau du rating)

  const range = [1, 2, 3, 4, 5]
  
  const numberStarsLike = range.map(rangeElem => 
    scaleRating >= rangeElem ? 
      <i key={rangeElem.toString()} className='stars__stars--color'>{ star }</i>
      : <i key={rangeElem.toString()} className='stars__stars--color stars__stars--color--grey'>{ greyStar }</i>
    )

  return (
    <div className='stars'>
      { numberStarsLike }
    </div>
  )
}
export default StarsScale
