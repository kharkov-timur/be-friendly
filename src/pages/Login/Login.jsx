import React from 'react'
import classes from './Login.module.css'
import {connect} from 'react-redux'
import {LoginReduxForm} from './LoginForm'
import {login} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div className={classes.login_container}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
