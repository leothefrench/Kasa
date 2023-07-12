import LOGO from '../../assets/LOGO.png'
import '../../styles/footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={LOGO} alt="logo-kasa" className='footer__logo'/>
      <p className='footer__paragraph'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer