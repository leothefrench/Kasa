import './cards.scss'
import { Link } from 'react-router-dom'

const Cards = ({id, title, cover}) => {
  
  return (
    <li key={id} className='card'>
      <Link to={'/housings/' + id} className='card__link'>
        <div className="card__link__overlay"></div>
        <img src={cover} alt={title} className='card__link__cover' />
        <h2 className='card__title'>{title}</h2>
      </Link>
    </li>
  )
}

export default Cards
