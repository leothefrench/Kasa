import { NavLink, useParams} from 'react-router-dom'
import housings from '../../datas/datasHousings'
import Gallery  from  '../gallery/Gallery'
import Tag from '../../components/tags/Tag'
import StarsScale from './StarsScale'
import Collapse from '../collapse/Collapse'
import Error404 from '../error404/Error404'

const HousingContent = () => {
  const { id } = useParams()
  const housing = housings.find(housing => housing.id === id)

  if(housing === undefined ) {
    return <Error404 />
  }

  return (
    <section className='housing-section' key={housing.id}>
      <Gallery img={housing.pictures}/>
      <header className='header-housing'>
        <div className='header-housing__info'>
          <h1 className='header-housing__info__title'>{ housing.title }</h1>
          <h2 className='header-housing__info__subtitle'>{ housing.location }</h2>
          <ul className="header-housing__info__tags">
            {housing.tags.map((tag, index) => (
              <Tag key={index} tagInformation={tag} />
            ))}
          </ul>
        </div>
          <div className='header-housing__host'>
            <div className='header-housing__host__info'>
              <p className='header-housing__host__info__name'>{housing.host.name}</p>
              <img src={housing.host.picture} alt="host" className='header-housing__host__info__picture'/>
            </div>
            <StarsScale scaleRating={housing.rating}/> 
          </div>
      </header>
      <div className="housing-section__collapses">
        <div className="housing-section__collapses__content">
          <Collapse title='Description' content={housing.description}/>
        </div>
        <div className="housing-section__collapses__content">
          <Collapse title='Équipements' content={housing.equipments.map((equipment, index) => (
            <ul key={index}>
              <li>{equipment}</li> 
            </ul>
          ))} />
        </div>
      </div>
    </section>
  )
}
export default HousingContent



