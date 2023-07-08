import './Navbar.scss'
import logo from './LOGO.svg'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" />
        <div className='div-link'>
            <Link to='Accueil' >Accueil</Link>
            <Link to='APropos'>A Propos</Link>
        </div>
    </nav>
  )
}
