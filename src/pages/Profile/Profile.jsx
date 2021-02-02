import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

import classes from './Profile.module.css'

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo
        nickname='Timur'
        birthDay='22 february'
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
