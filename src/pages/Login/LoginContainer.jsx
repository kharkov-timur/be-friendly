import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './Login'

class LoginContainer extends Component {
  render() {
    return (
      <Login />
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(LoginContainer)
