import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo
        nickname='Timur'
        birthDay='22 february'
      />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile
