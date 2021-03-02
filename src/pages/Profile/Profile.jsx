import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

import classes from './Profile.module.css'

const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo
        profile={props.profile}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
