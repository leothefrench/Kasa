import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faAngleUp} />
const downArrow = <FontAwesomeIcon icon={faAngleDown} />

const Collapse = (props) => {

  const [open, setOpen] = useState(false)

  const openCollapse = (props) => {
    setOpen((open) => !open)
  }

  return (
    <>
      <div onClick={openCollapse} className='collapse'>
        <h2 className='collapse__title'>{props.title}</h2>
        {!open ? <i>{upArrow}</i> : <i>{downArrow}</i>}
      </div>

      <div className='collapse__content'>{props.content}</div>
    </>
  )
}
export default Collapse