import {NavLink} from 'react-router-dom'
import classes from './Sidebar.module.css'

const Sidebar = (props) => {

  let friendsElement = props.state
    .map(friend => {
      return (
        <NavLink to={`/sidebar/${friend.id}`} key={friend.id} className={classes.sidebar_item}>
          <div className={classes.item_round} >
            <img src={friend.src} alt="profile" />
          </div>
          <span className={classes.item_text}>
            {friend.name}
          </span>
        </NavLink>
      )    })

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_header}>Friends</div>
      <div className={classes.sidebar_wrapper}>
        {friendsElement}
      </div>
    </div>
  )
}

export default Sidebar
