import {addPostAction} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newText) => {
      dispatch(addPostAction(newText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)
