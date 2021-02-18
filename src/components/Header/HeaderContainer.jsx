import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {setAuthUserData} from '../../redux/authReducer'
import {authUser} from '../../api/api'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.url = 'https://social-network.samuraijs.com/api/1.0/'
  }

  componentDidMount() {
    authUser()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, login, email} = data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

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
  setAuthUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
