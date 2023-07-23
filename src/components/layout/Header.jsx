import LogoHeader from '../../assets/LogoHeader.svg'
import '../../styles/header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div>
            <img src={LogoHeader} alt="logo-kasa" className='header__logo' />
        </div>
        <nav className='navbar'>
            <NavLink to='/home' className={({ isActive }) => (isActive ? 'navbar__link navbar__link--isActive' : 'navbar__link navbar__link--inActive') }>Accueil</NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'navbar__link navbar__link--isActive' : 'navbar__link navbar__link--inActive') }
            >A Propos</NavLink>
        </nav>
    </header>
  )
}
export default Header
