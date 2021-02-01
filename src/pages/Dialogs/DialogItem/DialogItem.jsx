import {NavLink} from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
  let path = `/messages/${props.id}`

  return (
    <div>
      <NavLink
        activeClassName={classes.active}
        to={path}
      >
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem
