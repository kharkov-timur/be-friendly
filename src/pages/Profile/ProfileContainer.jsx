import React, {Component} from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
  getStatus,
  getUserProfile,
  updateStatus
} from '../../redux/profileReducer'
import {compose} from 'redux'

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.userLoginId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus} />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userLoginId: state.auth.userId,
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer)
