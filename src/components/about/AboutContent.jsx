import '../../styles/aboutContent.scss'
import Collapse from '../layout/Collapse'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='about__dropdown'>
          <Collapse title='Fiabilité' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'>

          </Collapse>
      </div>
      <div className='about__dropdown'>
          <Collapse title='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'>
          </Collapse>
      </div>
      <div className='about__dropdown'>
          <Collapse title='Service' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.">
          </Collapse>
      </div>
      <div className='about__dropdown'>
          <Collapse title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.">
          </Collapse>
      </div>
    </div>
  )
}
export default AboutContent
