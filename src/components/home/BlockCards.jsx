import Cards from './Cards'
import housings from '../../datas/datasHousings'
import '../../styles/blockCards.scss'

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
