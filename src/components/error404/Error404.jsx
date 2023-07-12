import { Link} from 'react-router-dom'
import '../../styles/error404.scss'

const Error404 = () => {
  return (
    <div className='Error404'>
        <h1 className='Error404__title'>404</h1>
        <h2 className='Error404__subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to='/Home' className='Error404__link'>Retourner sur la page d'accueil</Link>
    </div>
  )
}
export default Error404
