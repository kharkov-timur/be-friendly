import React, {Component} from 'react'
import Profile from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUsersProfile} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
    this.url = 'https://social-network.samuraijs.com/api/1.0/profile/'
  }
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios
      .get(`${this.url}${userId}`)
      .then(res => {
        this.props.setUsersProfile(res.data)
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const mapDispatchToProps = {
  setUsersProfile
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)

