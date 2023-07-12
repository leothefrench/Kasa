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
            <ul>
                <li  className='navbar__link'>
                    <NavLink
                     className={({ isActive }) => (isActive ? 'navbar__link:active' : '')}
                     title='Accueil'
                     end to='/home'        
                    >
                        Accueil
                    </NavLink>
                 </li>
                <li  className='navbar__link'>
                    <NavLink
                     className={({ isActive }) => (isActive ? 'navbar__link:active' : '')}
                     title='A propos'
                     end to='/about' 
                    >
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
export default Header