const Tag = (props) => {
  console.log(props.tagsInformation)
  return (
    <li className="header-housing__info__tags__element">

    { props.tagsInformation }
  </li>
  )
}
export default Tag
