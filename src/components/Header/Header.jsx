import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import React from 'react';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
        alt="logo"
      />
      <div className={classes.login_block}>
        {
          props.isAuth
            ? <div>{props.login}- <button onClick={props.logout}>
              Logout</button></div>
            : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header
