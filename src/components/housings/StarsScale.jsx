import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const star = <FontAwesomeIcon icon={faStar} />
const greyStar = <FontAwesomeIcon icon={faStar} />

const StarsScale = (props) => {
  const scaleRating = props.rating
  const levelOfStars = [1, 2, 3, 4, 5]
  
  const numberStarsLike = levelOfStars.map(number => 
    scaleRating >= number ? 
      <i key={number.toString()} className='stars__stars--color'>{ star }</i>
      : <i key={number.toString()} className='stars__stars--color stars__stars--color--grey'>{ greyStar }</i>
    )

  return (
    <div className='stars'>
      { numberStarsLike }
    </div>
  )
}
export default StarsScale