import {NavLink} from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import StoreContext from '../../StoreContext'

import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/messages' activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={`${classes.item} ${classes.settings}`}>
        <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
      </div>

      <StoreContext.Consumer>
        {store => {
          let state = store.getState().sidebar

          return (
            <Sidebar state={state} />
          )
        }}
      </StoreContext.Consumer>
    </nav>
  )
}

export default Navbar
