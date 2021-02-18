import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
        alt="logo"
      />
      <div className={classes.login_block}>
        <NavLink to={'/login'}>{props.isAuth ? props.login : 'Login'}</NavLink>
      </div>
    </header>
  )
}

export default Header
