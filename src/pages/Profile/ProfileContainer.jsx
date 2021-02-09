import React, {Component} from 'react'
import Profile from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUsersProfile} from '../../redux/profileReducer'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
    this.url = 'https://social-network.samuraijs.com/api/1.0/'
  }
  componentDidMount() {
    axios
      .get(`${this.url}profile/2`)
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
    profile: state.profilePage.profile,
  }
}

const mapDispatchToProps = {
  setUsersProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
