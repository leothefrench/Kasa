import LogoHeader from '../../assets/LogoHeader.svg'
import '../../styles/header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div>
            <img src={LogoHeader} alt="logo-kasa" className='header__logo' />
        </div>
        <nav className='navbar'>
            <Link to='/Home' className='navbar__link'>Accueil</Link>
            <Link to='/About' className='navbar__link'>A Propos</Link>
        </nav>
    </header>
  )
}
export default Header
