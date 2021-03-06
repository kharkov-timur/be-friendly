import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {logout} from '../../redux/authReducer'

class HeaderContainer extends Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
