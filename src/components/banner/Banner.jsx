import './banner.scss'

const Banner = (props) => {
  return (
   <div className='banner'>
    <img className='banner__img' src={props.src} alt='banner-kasa' />
    <h1 className='banner__title'>{props.title}</h1>
   </div>
  )
}
export default Banner
