import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'

export const withAuthRedirect = (Component) => {
  const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
  })

  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Redirect to='/login' />
    }
    return <Component {...props} />
  }

  return compose(
    connect(mapStateToPropsForRedirect)
  )(RedirectComponent)
}
