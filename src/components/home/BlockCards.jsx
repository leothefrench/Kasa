import housings from '../../datas/datasHousings'
import Cards from '../cards/Cards'
import './blockCards.scss'

const BlockCards = () => {
  return (
    <ul className='blockCards'>
        {housings.map(({id, cover, title}) => (
            <Cards key={id} id={id} title={title} cover={cover} />
        ))}
    </ul>
  )
} 
export default BlockCards
 