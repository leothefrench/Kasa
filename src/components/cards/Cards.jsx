import './cards.scss'

const Cards = ({id, title, cover}) => {
  return (
    <li key={id} className='card'>
      <a href={'/housings/' + id} className='card__link'>
        <img src={cover} alt={title} className='card__link__cover' />
      </a>
      <h2 className='card__title'>{title}</h2>
    </li>
  )
}

export default Cards
