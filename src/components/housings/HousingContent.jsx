import { NavLink, useParams} from 'react-router-dom'
import housings from '../../datas/datasHousings'
import '../../styles/aboutContent.scss'
import Gallery  from  '../layout/Gallery'
import StarsScaleRate from './StarsScale'
import Collapse from '../layout/Collapse'
// import Error404 from '../../components/error404'

const HousingContent = () => {

  const { id } = useParams()
  const housing = housings.find(housing => housing.id === id)
  console.log(housing);

  if(housing === undefined ) {
    return   (  <div className='Error404'>
        <h1 className='Error404__title'>404</h1>
        <h2 className='Error404__subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to='/Home' className='Error404__link'>Retourner sur la page d'accueil</NavLink>
    </div>
    )
  }

  const tagsInformation = housing.tags.map((tag, index) => (
    <p key={ index }>{ tag }</p>))

  return (

    <section className='housing-section' key={housing.id}>
      <Gallery img={housing.pictures}/>
      <header className='header-housing'>
        <div className='header-housing__info'>
          <h1 className='header-housing__info__title'>{ housing.title}</h1>
          <h2 className='header-housing__info__subtitle'>{ housing.location }</h2>
          <div className="header-housing__info__tags">
            { tagsInformation }
          </div>
        </div>

          <div className='header-housing__host'>
            <div className='header-housing__host__info'>
              <p className='header-housing__host__info__name'>{housing.host.name}</p>
              <img src={housing.host.picture} alt="host" className='header-housing__host__info__picture'/>
            </div>
            <StarsScaleRate scaleRating={housing.rating}/>
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



